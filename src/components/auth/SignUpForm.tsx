"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { SignUp } from "@/model/Auth";

type Props = {
  handleTab: (tab: string) => void;
};

function SignUpForm({ handleTab }:Props) {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<SignUp> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-4">
        <Input
          isRequired
          isClearable
          label="Username"
          placeholder="Enter your username"
          type="text"
          {...register("username")}
        />
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your email"
          type="text"
          {...register("email")}
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
        <span></span>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <button onClick={() => handleTab("login")} className="text-blue-400">
            login
          </button>
        </p>
        <Button type="submit" fullWidth color="success">
          Sign up
        </Button>
      </form>
    </>
  );
}

export default SignUpForm;
