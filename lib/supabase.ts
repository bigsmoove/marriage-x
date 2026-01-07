import { createClient } from '@supabase/supabase-js';

// Allow build to succeed without env vars, but will fail at runtime if not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Lead {
  id: string;
  email: string;
  name: string;
  created_at: string;
  download_token?: string;
}

export interface Purchase {
  id: string;
  email: string;
  stripe_payment_id: string;
  amount: number;
  created_at: string;
  download_token?: string;
}

// Helper functions
export const createLead = async (email: string, name: string, downloadToken: string) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ email, name, download_token: downloadToken }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const createPurchase = async (
  email: string,
  stripePaymentId: string,
  amount: number,
  downloadToken: string
) => {
  const { data, error } = await supabase
    .from('purchases')
    .insert([{ email, stripe_payment_id: stripePaymentId, amount, download_token: downloadToken }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getLeadByToken = async (token: string) => {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('download_token', token)
    .single();

  if (error) return null;
  return data;
};

export const getPurchaseByToken = async (token: string) => {
  const { data, error } = await supabase
    .from('purchases')
    .select('*')
    .eq('download_token', token)
    .single();

  if (error) return null;
  return data;
};

export const getStats = async () => {
  const { data: leads, error: leadsError } = await supabase
    .from('leads')
    .select('*', { count: 'exact' });

  const { data: purchases, error: purchasesError } = await supabase
    .from('purchases')
    .select('*', { count: 'exact' });

  const totalRevenue = purchases?.reduce((sum, p) => sum + p.amount, 0) || 0;

  return {
    totalLeads: leads?.length || 0,
    totalPurchases: purchases?.length || 0,
    totalRevenue: totalRevenue / 100, // Convert cents to dollars
    conversionRate: leads?.length ? ((purchases?.length || 0) / leads.length) * 100 : 0,
  };
};

