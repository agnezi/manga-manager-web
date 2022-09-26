interface FormErrorMessageProps {
  message: string;
  id: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  message,
  id,
}) => (
  <span className="text-red-600" role="alert" id={id}>
    {message}
  </span>
);
