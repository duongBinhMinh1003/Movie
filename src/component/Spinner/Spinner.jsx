import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* coolors  */}
      <PacmanLoader size={150} color="#fca311" speedMultiplier={3} />
    </div>
  ) : (
    <></>
  );
}

// react spinner npm
