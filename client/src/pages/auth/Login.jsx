import { NavLink } from "react-router-dom";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import authApi from "../../api/authApi";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  // const navigate = useNavigate();
  // const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onsubmit = async (data) => {
    try {
      const res = await authApi.login(data);
      console.log("login successfull", res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center bg-gray-100">
      <div className="w-[90%] sm:w-[50%] h-[400px] mt-20 lg:w-[35%] bg-white shadow-md rounded-md p-4">
        <div className="flex flex-col gap-1 text-center">
          <h3 className="text-2xl font-bold uppercase">Login</h3>
          <p className="text-xs font-semibold">
            Welcome back, Sign in to your account
          </p>
        </div>
        <form
          className="mt-6  flex flex-col items-center justify-center gap-5"
          onSubmit={handleSubmit(onsubmit)}
        >
          <label htmlFor="email" className="w-[80%] flex flex-col gap-2">
            <span className="text-sm font-semibold">Email</span>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <input
              type="text"
              placeholder="Email"
              className="w-full outline-none text-sm p-2 rounded-md border border-gray-400"
              {...register("email")}
            />
          </label>

          <label htmlFor="password" className="w-[80%] flex flex-col gap-2">
            <span className="text-sm font-semibold">Password</span>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm p-2 rounded-md border border-gray-400"
              {...register("password")}
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-[80%] p-2 bg-blue-400 cursor-pointer text-sm hover:bg-blue-300 transition duration-300 text-white  rounded-md"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="w-3/6 mx-auto text-center mt-3 sflex items-center justify-center ">
          <NavLink
            className={
              "text-xs md:text-sm font-semibold text-gray-600 cursor-pointer"
            }
            to={"/"}
          >
            Forget you password
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
