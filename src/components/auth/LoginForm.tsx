"use state";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { Login } from "@/model/Auth";

type Props = {
  handleTab: (tab: string) => void;
};

function LoginForm({ handleTab }:Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-4">
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your username or email"
          type="text"
          {...register("identifier")}
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
          Need to create an account?{" "}
          <button
            onClick={() => handleTab("sign-up")}
            className="text-blue-400"
          >
            Sign up
          </button>
        </p>
        <Button type="submit" fullWidth color="success">
          Login
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
