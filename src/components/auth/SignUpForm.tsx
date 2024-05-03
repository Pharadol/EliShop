import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { Register } from "@/model/Auth";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { registerUser } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { AuthState } from "@/model/Auth";

type Props = {
  handleTab: (tab: string) => void;
};

function SignUpForm({ handleTab }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<Register>();

  const authState = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice
  );

  const onSubmit: SubmitHandler<Register> = async (data) => {
    await dispatch(registerUser(data));
    if (authState.currentUser) {
      await handleTab("login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <span className="err">{authState?.registerError}</span>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span onClick={() => handleTab("login")}>login</span>
        </p>
        <Button
          type="submit"
          fullWidth
          color="success"
          className="submit-form-btn"
        >
          Sign up
        </Button>
      </form>
    </>
  );
}

export default SignUpForm;
