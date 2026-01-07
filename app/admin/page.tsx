'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, DollarSign, TrendingUp, Download } from 'lucide-react';

interface Stats {
  totalLeads: number;
  totalPurchases: number;
  totalRevenue: number;
  conversionRate: number;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
      loadStats();
    } else {
      setError('Incorrect password');
    }
  };

  const loadStats = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-4">
        <Card className="w-full max-w-md p-8">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Admin Login</h1>
          <div className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 py-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Marriage Corner Analytics</p>
          </div>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        {/* Stats Loading */}
        {loading && (
          <div className="text-center">
            <p className="text-gray-600">Loading stats...</p>
          </div>
        )}

        {/* Stats Grid */}
        {stats && (
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Leads */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Leads</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </Card>

            {/* Total Purchases */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Purchases</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalPurchases}</p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </Card>

            {/* Total Revenue */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${stats.totalRevenue.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-full bg-purple-100 p-3">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </Card>

            {/* Conversion Rate */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.conversionRate.toFixed(1)}%
                  </p>
                </div>
                <div className="rounded-full bg-pink-100 p-3">
                  <TrendingUp className="h-6 w-6 text-pink-600" />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Additional Info */}
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Quick Stats</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Average Order Value</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${stats ? (stats.totalRevenue / (stats.totalPurchases || 1)).toFixed(2) : '0.00'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Free to Paid Conversion</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats ? stats.conversionRate.toFixed(1) : '0'}%
              </p>
            </div>
          </div>
        </Card>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <Button onClick={loadStats} disabled={loading}>
            {loading ? 'Loading...' : 'Refresh Stats'}
          </Button>
        </div>
      </div>
    </div>
  );
}

