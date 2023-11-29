import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="container-fluid">
    <App />
  </div>
);
