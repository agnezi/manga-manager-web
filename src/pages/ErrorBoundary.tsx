import { Helmet } from "react-helmet";

export const ErrorBoundary: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Not found!</title>
      </Helmet>
      <header>
        <h1>Theres nothing here!</h1>
      </header>
      <main>
        <p>Something wents wrong, sorry!</p>
      </main>
    </>
  );
};
