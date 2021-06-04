import loader from "../../assets/images/spinning.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="box-loading">
      <img src={loader} alt="Loading" />;
    </div>
  );
}
