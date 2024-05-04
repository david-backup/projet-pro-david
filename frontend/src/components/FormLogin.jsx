import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="login_form_connexion">
          <Label htmlFor={"email"} text={"Email :"}></Label>
          <Input
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"Votre email ..."}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_form_connexion">
          <Label htmlFor={"password"} text={"Mot de passe :"}></Label>
          <Input
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"Votre mot de passe ..."}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/">
          <Button
            type={"submit"}
            className={"login_btn button"}
            text={"Se connecter"}
          />
        </Link>
        <Link to="/create-account">
          <Button
            type={"submit"}
            className={"login_btn button"}
            text={"Créer un compte"}
          />
        </Link>
        <Link to="/create-account">
          <Button
            type={"submit"}
            className={"login_btn button"}
            text={"Mot de passe oublié ?"}
          />
        </Link>
      </form>
    </div>
  );
};

export default FormLogin;
