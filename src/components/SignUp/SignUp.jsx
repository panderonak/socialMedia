import { useState } from "react";
import authService from "../../freeAPI/authentication";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../features/authenticationSlice";
import { Button, Input } from "../../components/index";

export default function SignUp() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const createNewAccount = async (data) => {
    setMessage("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const loggedInUser = await authService.getLoggedInUser();
        if (loggedInUser) {
          dispatch(login(loggedInUser));
        }
        navigate("/");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
      <div className="mb-2 flex justify-center">
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className=" font-medium text-primary transition-all duration-200 hover:underline"
          ></Link>
        </p>
        {message && <p className="text-red-600 mt-8 text-center">{message}</p>}

        <form onSubmit={handleSubmit(createNewAccount)}>
          <div className="space-y-5">
            <Input
              label="UserName"
              placeholder="Enter your UserName"
              {...register("username", {
                required: true,
              })}
            ></Input>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            ></Input>
            <Input
              label="Password"
              type="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: true,
                matchPattern: (value) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
                    value
                  ) || "Password should be valid",
              })}
            ></Input>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}