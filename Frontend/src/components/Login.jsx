import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-orange-50 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to your BookHaven account
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-orange-500 hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="mt-2 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-500 font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
