import { render, screen } from "@testing-library/react";

import { FormErrorMessage } from "../../components/FormErrorMessage";

describe("FormErrorMessage component", () => {
  it("should be in the document", () => {
    render(<FormErrorMessage id="test" message="teste" />);

    const component = screen.getByRole("alert");

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(/teste/i);
  });
});
