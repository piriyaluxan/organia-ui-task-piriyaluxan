import React from "react";

export default function InputField({ label, ...props }) {
  return (
    <label className="block text-sm text-white">
      {label && <div className="mb-1">{label}</div>}
      <input
        className="w-full px-3 py-2 rounded bg-white/5 text-white border border-transparent focus:border-blue-400"
        {...props}
      />
    </label>
  );
}
