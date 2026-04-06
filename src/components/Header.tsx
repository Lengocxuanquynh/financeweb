'use client';

import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl text-gray-900">FinanceHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Trang chủ
            </Link>
            <Link href="/investment" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Đầu tư
            </Link>
            <Link href="/insurance" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Bảo hiểm
            </Link>
            <Link href="/credit-cards" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Thẻ tín dụng
            </Link>
            {user ? (
              <>
                <Link href={user.role === 'admin' ? '/admin' : '/user'} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Dashboard
                </Link>
                <span className="text-gray-700">Xin chào, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Đăng nhập
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Đăng ký
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Trang chủ
              </Link>
              <Link href="/investment" className="text-gray-700 hover:text-blue-600 transition-colors">
                Đầu tư
              </Link>
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 transition-colors">
                Bảo hiểm
              </Link>
              <Link href="/credit-cards" className="text-gray-700 hover:text-blue-600 transition-colors">
                Thẻ tín dụng
              </Link>
              {user ? (
                <>
                  <Link href={user.role === 'admin' ? '/admin' : '/user'} className="text-gray-700 hover:text-blue-600 transition-colors">
                    Dashboard
                  </Link>
                  <span className="text-gray-700">Xin chào, {user.name}</span>
                  <button
                    onClick={logout}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-left"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Đăng nhập
                  </Link>
                  <Link href="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                    Đăng ký
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
