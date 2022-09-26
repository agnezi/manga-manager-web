import { FormErrorMessage } from "../components/FormErrorMessage";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    console.log("login", data);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col justify-start align-center">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: true })}
              placeholder="username"
              type="text"
              defaultValue=""
              id="username"
            />
            {errors.username && (
              <FormErrorMessage
                id="usernameError"
                message="This field is required"
              />
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              placeholder="password"
              type="password"
              defaultValue=""
              id="password"
              aria-errormessage=""
            />
            {errors.password && (
              <FormErrorMessage
                id="passwordError"
                message="This field is required"
              />
            )}
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </main>
    </>
  );
};
