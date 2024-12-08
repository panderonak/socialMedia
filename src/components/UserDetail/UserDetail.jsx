import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button, Container } from "../../components";
import userProfileManagement from "../../freeAPI/profile";

export default function UserDetail() {
  const [error, setError] = useState("Lorem ipsum dolor sit.");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitUserDetails = async (data) => {
    console.log(data);
    setError("");
    try {
      const success = await userProfileManagement.updateUserProfile(data);
      if (success) {
        // const data = await userProfileManagement.getMyProfile();
        navigate("/profile");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center flex-col gap-3">
          <h2 className="text-center mb-2 text-2xl font-bold leading-tight">
            User Details
          </h2>
          <p className="mb-5 text-center text-base text-black/60">
            Fill out the following details.
          </p>
          {"error" && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form method="POST" onSubmit={handleSubmit(submitUserDetails)}>
            <div className="space-y-5">
              <Input
                label="Bio"
                placeholder="Enter your bio"
                {...register("bio", { required: true })}
              />
              <Input
                label="Country Code"
                placeholder="+91"
                {...register("countryCode", { required: true })}
              />

              <Input
                label="Date of Bith Code"
                placeholder="yy/mm/dd"
                {...register("dob", { required: true })}
              />

              <Input
                label="First Name"
                placeholder="Jane"
                {...register("firstName", { required: true })}
              />

              <Input
                label="Last Name"
                placeholder="Doe"
                {...register("lastName", { required: true })}
              />

              <Input
                label="Location"
                placeholder="Mumbai,India"
                {...register("location", { required: true })}
              />

              <Input
                label="Phone Number"
                placeholder="1396121114"
                {...register("phoneNumber", { required: true })}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
