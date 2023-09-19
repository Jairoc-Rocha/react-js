import ClipLoader from "react-spinners/ClipLoader";

import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <ClipLoader />
    </div>
  );
}
