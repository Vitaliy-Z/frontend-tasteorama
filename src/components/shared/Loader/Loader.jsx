import css from "./Loader.module.css";
import { FadeLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className={css.loader}>
      <FadeLoader color="#3D2218" />
    </div>
  );
}
