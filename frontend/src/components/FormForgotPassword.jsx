import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

const FormForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="reset_password_form">
      <form onSubmit={handleSubmit}>
        <div className="reset_password_form_connexion">
          <Label htmlFor={"password"} text={"Nouveau mot de passe :"}></Label>
          <Input
            type={"text"}
            id={"password"}
            name={"password"}
            value={password}
            placeholder={"Entrez votre nouveau mot de passe ..."}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="reset_password_form_connexion">
          <Label
            htmlFor={"passwordConfirmation"}
            text={"Confirmation du mot de passe :"}
          ></Label>
          <Input
            type={"text"}
            id={"passwordConfirmation"}
            name={"passwordConfirmation"}
            value={passwordConfirmation}
            placeholder={"Confirmez votre nouveau mot de passe ..."}
            required={true}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <Link to="/">
          <Button
            type={"submit"}
            className={"reset_password_btn button"}
            text={"Changer le mot de passe"}
          />
        </Link>
      </form>
    </div>
  );
};

export default FormForgotPassword;
