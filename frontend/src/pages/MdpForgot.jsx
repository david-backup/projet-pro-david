import FormForgotPassword from "../components/FormForgotPassword";
import Header from "../components/Header";

const MdpForgot = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Formulaire réinitialisation du mot de passe</h1>
          <FormForgotPassword />
        </section>
      </main>
    </>
  );
};

export default MdpForgot;
