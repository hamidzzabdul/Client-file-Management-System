import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateClientSchema } from "../../schemas/CreateClietnSchema";
import userApi from "../../api/userApi";
import { toast } from "react-hot-toast";

const CreateClientForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(CreateClientSchema),
  });

  const onSubmit = async (data) => {
    try {
      await userApi.create(data);
      toast.success("Client created Succesfully");
      reset();
    } catch (error) {
      console.log(error);
      // If error is from the backend with a message
      // if (
      //   error.response &&
      //   error.response.data &&
      //   error.response.data.message
      // ) {
      //   toast.error(error.response.data.message);
      // } else {
      //   toast.error("Something went wrong. Please try again.");
      // }
    }
  };

  return (
    <div className="w-full">
      <form
        className="w-full bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full border-b border-gray-200 pb-4 p-6 mb-4">
          <h2 className="text-lg font-semibold">
            Fill in the required Details
          </h2>
        </div>

        <div className="flex flex-col gap-8 px-6 py-3">
          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-bold mb-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter business name"
                {...register("name")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                {...register("phoneNumber")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Business Type
              </label>
              <input
                type="text"
                placeholder="e.g. Retail, Tech, Healthcare..."
                {...register("businessType")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.businessType ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.businessType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.businessType.message}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-1">
                Physical Address <span className="text-xs text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter address"
                {...register("address")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                City / Town <span className="text-xs text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter city or town"
                {...register("city")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          {/* Role & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-1">Role</label>
              <select
                {...register("role")}
                className={`w-full bg-transparent cursor-pointer outline-none text-sm border rounded-md px-3 py-2 ${
                  errors.role ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select role</option>
                <option value="client">client</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
                className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-8 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="w-5" />
                ) : (
                  <Eye className="w-5" />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold mb-1">
              Notes / Description (Optional)
            </label>
            <textarea
              placeholder="Add any additional information..."
              {...register("description")}
              className="w-full h-[200px] text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              {isSubmitting ? "Creating..." : "Create Client"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateClientForm;
