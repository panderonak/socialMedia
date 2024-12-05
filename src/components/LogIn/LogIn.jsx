import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../freeAPI/authentication";
import { login } from "../../features/authenticationSlice";
import { Button, Input } from "../../components/index";

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState();

  const handleLogin = async (data) => {
    console.log("Handle Login", data);
    setMessage("");
    try {
      const session = await authService.loginUser(data);
      if (session.success) {
        const userData = await authService.getLoggedInUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <h2>Log In to your account</h2>
        <p>
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {message && <p className="text-red-600 mt-8 text-center">{message}</p>}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="UserName"
              placeholder="Enter your UserName"
              {...register("username", {
                required: true,
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
            <Button
              type="submit"
              className="w-full
            "
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
