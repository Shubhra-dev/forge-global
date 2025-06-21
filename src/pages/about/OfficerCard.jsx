import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";

function OfficerCard({ image, designation, firstname, lastName, text }) {
  return (
    <div className="w-full sm:w-1/3 flex flex-col">
      <img
        src={image}
        alt="cto image"
        className="h-60 rounded-[10px] object-center"
      />
      <div className="pt-4 flex flex-col">
        <SmallHeading
          extraClass={`tracking-wider uppercase`}
          fontWeight={`font-normal`}
        >
          {designation}
        </SmallHeading>
        <SubTitle extraClass={`pt-5 pb-[5px]`}>
          {firstname} <span className=" font-medium">{lastName}</span>
        </SubTitle>
        <div className="h-[1px] w-1/3 bg-borderPrimary dark:bg-borderPrimaryDark mb-[5px]"></div>
      </div>
      <Text>{text}</Text>
    </div>
  );
}

export default OfficerCard;
