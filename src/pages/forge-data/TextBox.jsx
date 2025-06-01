import BigText from "../../components/BigText";
import Text from "../../components/Text";
function TextBox({ title, text }) {
  return (
    <div className="w-full sm:w-[32%] tab:w-[31%]">
      <BigText fontWeight={`font-semibold`}>{title}</BigText>
      <div className="w-40 h-[5px] bg-gradient-to-r from-secondary2 to-primary rounded-tr-3xl rounded-bl-3xl my-2.5"></div>
      <Text>{text}</Text>
    </div>
  );
}

export default TextBox;
