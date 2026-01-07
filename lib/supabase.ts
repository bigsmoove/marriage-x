import { createClient } from '@supabase/supabase-js';

// Allow build to succeed without env vars, but will fail at runtime if not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

// Client for client-side operations (public)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for server-side operations (admin privileges)
export const supabaseServiceRole = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

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

// Storage helpers
const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'marriage-pdfs';
const PDF_FREE_FILENAME = process.env.PDF_FREE_FILENAME || '10-ways-revitalize-marriage.pdf';
const PDF_PREMIUM_FILENAME = process.env.PDF_PREMIUM_FILENAME || '25-ways-revitalize-marriage.pdf';

export const getPDFFilename = (isPremium: boolean): string => {
  return isPremium ? PDF_PREMIUM_FILENAME : PDF_FREE_FILENAME;
};

export const generateSignedPDFUrl = async (isPremium: boolean, expiresIn: number = 48 * 60 * 60) => {
  const filename = getPDFFilename(isPremium);
  
  try {
    const { data, error } = await supabaseServiceRole.storage
      .from(BUCKET_NAME)
      .createSignedUrl(filename, expiresIn);

    if (error) {
      console.error('Error generating signed URL:', error);
      throw error;
    }

    return data.signedUrl;
  } catch (error) {
    console.error('Failed to generate signed PDF URL:', error);
    throw new Error('Failed to generate download link');
  }
};

