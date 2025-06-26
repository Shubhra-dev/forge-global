// components/FloatingInput.jsx
import { useState } from "react";

const FloatingInput = ({
  label,
  required,
  type = "text",
  name,
  value,
  onChange,
  width,
}) => {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value;

  return (
    <div className={`relative ${width ? width : "w-full"}`}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={isActive ? "Type Here" : ""}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full dark:bg-backgroundDark dark:text-textSubheadingDark rounded-md px-4 pt-6 pb-2 outline-none transition-all 
          ${isActive ? "border-x border-t border-b-[3px] border-primary" : "border border-gray-400"}`}
        required={required}
      />
      <label
        className={`absolute left-4 top-2 text-sm transition-all px-1 font-bold 
          ${
            isActive
              ? "text-gray-500 text-xs -top-2 scale-90"
              : "text-gray-500 top-4"
          }`}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    </div>
  );
};

export default FloatingInput;
