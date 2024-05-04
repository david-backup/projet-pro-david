import FormLogin from "../components/FormLogin";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Formulaire de connexion</h1>
          <FormLogin />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
