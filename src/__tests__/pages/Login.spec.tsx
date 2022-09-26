import { render, screen } from "@testing-library/react";

import { Login } from "../../pages/Login";
import userEvent from "@testing-library/user-event";

describe("Login page component", () => {
  it("should call submit form function", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const username = "test";
    const password = "test";

    jest.mock("react-hook-form", () => ({
      ...jest.requireActual("react-hook-form"),
      handleSubmit: () => jest.fn().mockReturnValue({ username, password }),
    }));

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByLabelText(/password/i);

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();

    await user.type(inputUsername, username);
    await user.type(inputPassword, password);

    const formSubmitInput = screen.getByRole("button", { name: /login/i });

    expect(formSubmitInput).toBeInTheDocument();

    await user.click(formSubmitInput);
  });

  it("should show error on submit form", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const username = "";
    const password = "";

    jest.mock("react-hook-form", () => ({
      ...jest.requireActual("react-hook-form"),
      handleSubmit: () => jest.fn().mockReturnValue({ username, password }),
    }));

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByLabelText(/password/i);

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();

    const formSubmitInput = screen.getByRole("button", { name: /login/i });

    expect(formSubmitInput).toBeInTheDocument();

    await user.click(formSubmitInput);

    const errorMessage = await screen.findAllByRole("alert");
    expect(errorMessage[0]).toBeInTheDocument();
  });
});
