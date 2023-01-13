import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const urlChangeHandler = () => {
    navigate("products");
  };
  return (
    <div className="header">
      <div>Header</div>
      <button onClick={urlChangeHandler}>Change URL</button>
    </div>
  );
}
