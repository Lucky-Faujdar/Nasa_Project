import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { toast } from "react-toastify";
import EarthVideo from "../components/Planets/EarthVideo";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const passwordValue = watch("password", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      setTimeout(() => {
        console.log(data);
        localStorage.setItem("admin", JSON.stringify(data));
        navigate("/login");
        toast.success("Signup successful! 🎉");
      }, 2000);
    } catch (err) {
      setError("Something went wrong!");
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background */}
      <div className="w-full top-0 absolute object-cover z-0">
        <EarthVideo />
      </div>

        <div className="absolute w-screen top-20 left-20">
      {/* frontground */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md overflow-hidden bg-zink-900 border-zinc-700 border-2 bg-opacity-50 shadow-xl bg-gradient-to-br backdrop-filter backdrop-blur-xl rounded-2xl"
      >

        {/* Header */}
        <div className="px-8 py-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-zinc-300 tracking-wide bg-clip-text">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}

            {/* Password Strength Meter */}
            <PasswordStrengthMeter password={passwordValue} />

            {/* Role Selection */}
            <div className="mb-6 mt-2">
              <label className="block mb-2 text-sm font-medium text-zinc-300">
                Select Role
              </label>
              <select
                {...register("role", { required: true })}
                className="w-full px-3 py-2 border-1 bg-zinc-800 text-white border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Choose Role</option>
                <option value="Public">Public</option>
                <option value="User">User</option>
                <option value="Scientist">Scientist</option>
              </select>
            </div>

            {/* Error Message */}
            {error && (
              <p className="mt-2 font-semibold text-red-500">{error}</p>
            )}

            {/* Submit Button */}
            <motion.button
              className="w-full py-3 px-4 bg-gradient-to-br from-red-950 via-blue to-red-900 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
              focus:ring-offset-white transition duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="mx-auto animate-spin" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-black bg-opacity-50 flex justify-center">
          <p className="text-sm text-white">
            Already have an account?{" "}
            <Link to={"/login"} className="text-400 text-red-900 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default SignUp;
