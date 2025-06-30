import Text from "../../components/Text";

function Input({ width, label, name, type, placeholder }) {
  return (
    <div className={`${width ? width : "w-full sm:w-1/2"}`}>
      <Text fontWeight={`font-medium`}>{label}</Text>
      <input
        type={type}
        name={name}
        className={`w-full mt-1 rounded-md bg-indigo-50 dark:bg-backgroundDark dark:text-textHeadingDark py-3 px-[15px]`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
