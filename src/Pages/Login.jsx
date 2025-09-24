import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { useState } from "react";
import EarthVideo from "../components/Planets/EarthVideo";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // handle login
  const onSubmit = (data) => {
    setIsLoading(true);

    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (
      storedAdmin &&
      storedAdmin.email === data.email &&
      storedAdmin.password === data.password &&
      storedAdmin.role === data.role
    ) {
      // store in session storage
      sessionStorage.setItem("user", JSON.stringify(storedAdmin));
      toast.success(`Login successful as ${data.role}! 🎉`);
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials or role ❌");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background */}
      <div className="w-full top-0 absolute object-cover z-0">
        <EarthVideo />
      </div>

      {/* frontground */}
      <div className="flex z-10 top-0 left-20 absolute items-center justify-start w-screen h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md overflow-hidden bg-zink-900 border-zinc-700 border-2 bg-opacity-50 shadow-xl bg-gradient-to-br backdrop-filter backdrop-blur-xl rounded-2xl"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text">
              Welcome Back
            </h2>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />

              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              {/* Role Selection */}
              <div className="mb-6">
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

              <div className="flex items-center mb-6 ">
                <Link
                  to="/forgot-password"
                  className="text-sm text-white  hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-br from-red-950 via-blue to-red-900 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
              focus:ring-offset-white transition duration-200"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 mx-auto animate-spin" />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>
          </div>

          <div className="px-8 py-4 bg-black bg-opacity-50 flex justify-center">
            <p className="text-sm text-white">
              Don't have an account?{" "}
              <Link to="/signup" className="text-red-900 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
