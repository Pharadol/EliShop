import { Input, Button } from "@nextui-org/react";
import { Login } from "@/model/Auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { AuthState } from "@/model/Auth";

type Props = {
  handleTab: (tab: string) => void;
};

function LoginForm({ handleTab }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<Login>();

  const authState = useSelector(
    (state: { authSlice: AuthState }) => state.authSlice
  );

  const onSubmit: SubmitHandler<Login> = async (data) => {
    const { identifier, password } = data;
    await dispatch(loginUser({ identifier, password }));
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      window.location.reload()
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          isRequired
          isClearable
          label="Username / Email"
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
        <span className="err">{authState?.loginError}</span>
        <p className="text-center text-sm">
          Need to create an account?{" "}
          <span onClick={() => handleTab("sign-up")}>Sign up</span>
        </p>
        <Button type="submit" fullWidth color="success" className="submit-form-btn">
          Login
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
