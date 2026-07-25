import { useState } from "react";
import axios from "axios";
import { IForm } from "./model/IForm";

const Form: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [inviato, setInviato] = useState<IForm | null>(null);
  const handleSubmit = () => {
    const datiForm: IForm = { nome: nome, email: email };
    axios
      .post("https://corso-react-45a82-default-rtdb.firebaseio.com/form.json", datiForm)
      .then(() => {
        setInviato(datiForm);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <button onClick={handleSubmit}>Invia</button>
    </div>
  );
};
export default Form;
