import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={"p-4 bg-white/5 rounded " + className}>{children}</div>
  );
}
