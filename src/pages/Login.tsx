import { FormErrorMessage } from "../components/FormErrorMessage";
import { Helmet } from "react-helmet";
import { axiosInstance } from "../service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
}

const formStyle =
  "max-w-lg bg-gray-300 rounded-md p-4 border-gray-500 border-solid border-2";

const inputStyle = "max-w-md min-w-sm p-4 rounded-md";

const buttonStyle =
  "mt-2 text-blue-600 bg-blue-200 rounded-md p-2 border-solid border-2 border-blue-600";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const submitForm = async (data: FormData) => {
    try {
      const response = await axiosInstance.post("/login", data);
      console.log(response.data);
      if (response.data.username) {
        navigate("/home");
      }
    } catch (err: unknown) {
      alert(String(err));
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main>
        <section className="flex items-center justify-center w-screen h-screen bg-slate-200">
          <form onSubmit={handleSubmit(submitForm)} className={formStyle}>
            <div className="flex flex-col justify-start align-center">
              <label htmlFor="username" className="text-gray-400">
                Username
              </label>
              <input
                className={inputStyle}
                {...register("username", { required: true })}
                placeholder="username"
                type="text"
                defaultValue=""
                id="username"
                aria-errormessage="usernameError"
              />
              {errors.username && (
                <FormErrorMessage
                  id="usernameError"
                  message="This field is required"
                />
              )}
            </div>

            <div className="flex flex-col justify-start align-center">
              <label htmlFor="password" className="text-gray-400">
                Password
              </label>
              <input
                className={inputStyle}
                {...register("password", { required: true })}
                placeholder="password"
                type="password"
                defaultValue=""
                id="password"
                aria-errormessage="passwordError"
                autoComplete="current-password"
              />
              {errors.password && (
                <FormErrorMessage
                  id="passwordError"
                  message="This field is required"
                />
              )}
            </div>

            <div>
              <button className={buttonStyle} type="submit">
                Login
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
