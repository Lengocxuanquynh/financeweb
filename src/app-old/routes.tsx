import { createBrowserRouter, Navigate } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserDashboard } from './pages/UserDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { WalletPage } from './pages/WalletPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { CreditCardPage } from './pages/CreditCardPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { InsurancePage } from './pages/InsurancePage';
import { PaymentPage } from './pages/PaymentPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/user',
    element: <UserDashboard />
  },
  {
    path: '/user/wallet',
    element: <WalletPage />
  },
  {
    path: '/user/investment',
    element: <InvestmentPage />
  },
  {
    path: '/user/credit-card',
    element: <CreditCardPage />
  },
  {
    path: '/user/analytics',
    element: <AnalyticsPage />
  },
  {
    path: '/user/insurance',
    element: <InsurancePage />
  },
  {
    path: '/user/payment',
    element: <PaymentPage />
  },
  {
    path: '/admin',
    element: <AdminDashboard />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);
