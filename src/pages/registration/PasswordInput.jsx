import { useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import Text from "../../components/Text";

function PasswordInput({
  width,
  value,
  setValue,
  onFocus,
  label,
  name,
  placeholder,
}) {
  const [see, setSee] = useState(false);
  return (
    <div
      onFocus={onFocus ? onFocus : () => {}}
      className={`${width ? width : "w-full sm:w-1/2"} relative`}
    >
      <Text fontWeight={`font-medium`}>{label}</Text>
      <input
        type={see ? "text" : "password"}
        value={value}
        onChange={setValue}
        name={name}
        className={`w-full mt-1 rounded-md bg-indigo-50 dark:bg-backgroundDark dark:text-textHeadingDark py-3 px-[15px]`}
        placeholder={placeholder}
      />
      <PiEyeClosed
        onClick={() => setSee(false)}
        className={`${see ? "block" : "hidden"} cursor-pointer z-10 absolute top-[55%] right-4 text-xl font-bold text-textHeading dark:text-textHeadingDark`}
      />
      <PiEye
        onClick={() => setSee(true)}
        className={`${see ? "hidden" : "block"} cursor-pointer z-10 absolute top-[55%] right-4 text-xl font-bold text-textHeading dark:text-textHeadingDark`}
      />
    </div>
  );
}

export default PasswordInput;
