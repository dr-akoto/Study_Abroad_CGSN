import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft, Github } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      {/* Left Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 text-white">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Welcome to Horizon</h1>
          <p className="text-xl opacity-80">Where creativity meets technology. Join our community of innovators and creators.</p>
          <div className="flex space-x-3">
            <div className="w-12 h-1 bg-white opacity-50 rounded-full" />
            <div className="w-12 h-1 bg-white rounded-full" />
            <div className="w-12 h-1 bg-white opacity-50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl">
          <div className="mb-8 text-white">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="opacity-70">
              {isLogin ? 'Sign in to continue your journey' : 'Begin your creative journey today'}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div className="flex space-x-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                  />
                  <User className="absolute right-3 top-3 text-white/50 h-5 w-5" />
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                  />
                  <User className="absolute right-3 top-3 text-white/50 h-5 w-5" />
                </div>
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
              <Mail className="absolute right-3 top-3 text-white/50 h-5 w-5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
              <Lock className="absolute right-3 top-3 text-white/50 h-5 w-5" />
            </div>

            <button className="w-full py-3 bg-white rounded-xl text-purple-700 font-semibold hover:bg-white/90 transition-colors">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/50">Or continue with</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors flex items-center justify-center space-x-2">
                <Github className="h-5 w-5" />
                <span>Github</span>
              </button>
              <button className="flex-1 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Google</span>
              </button>
            </div>

            <p className="text-center text-white/50 mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;