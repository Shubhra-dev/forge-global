import Text from "../../components/Text";

function AttachCards({ text, active }) {
  return (
    <div
      className={`cursor-pointer group ${active ? "shadow-xl" : ""} hover:shadow-xl w-[47%] sm:w-1/4 dark:bg-backgroundDark rounded-md border border-borderPrimary px-5 py-2.5`}
    >
      <Text
        fontWeight={`${active ? "font-bold" : "font-medium"} group-hover:font-bold group-hover:scale-105 transition-all duration-300`}
        align={`text-center`}
      >
        {text}
      </Text>
    </div>
  );
}

export default AttachCards;
