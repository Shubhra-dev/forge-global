import Abstract6 from "../assets/icons/Abstract6.svg";
import SmallHeading from "./SmallHeading";
import Text from "./Text";
function IconBox1() {
  return (
    <div className="w-1/2 rounded-3xl h-full p-[10px] flex items-start justify-normal gap-2.5 border border-borderPrimary">
      <div>
        <img src={Abstract6} alt="abstract element" className="m-2.5" />
      </div>
      <div className="p-5">
        <SmallHeading extraClass={"pb-4"}>
          Access to institutional investor network
        </SmallHeading>
        <Text>
          Access Forge’s investor network to raise capital from quality
          institutional investors.
        </Text>
      </div>
    </div>
  );
}

export default IconBox1;
