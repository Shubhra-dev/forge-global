import People from "../assets/People.png";
import SecondaryButton from "./SecondaryButton";
import SmallHeading from "./SmallHeading";
import Text from "./Text";
function PhotoCardWithButton() {
  return (
    <div className="h-[400px] w-1/3 p-[10px] rounded-3xl bg-white border border-borderPrimary dark:bg-backgroundDark">
      <img src={People} alt="People" className="w-full h-[40%] rounded-3xl" />
      <div className="p-4 flex flex-col justify-between h-[60%]">
        <div>
          <SmallHeading extraClass={`pb-3`}>Build confidence</SmallHeading>
          <Text>
            Partner with a Forge Private Market Specialist to learn about the
            private market and how to navigate the transaction process.
          </Text>
        </div>
        <SecondaryButton padding={"py-2 px-3"} iconUp={true}>
          Open a Forge Account
        </SecondaryButton>
      </div>
    </div>
  );
}

export default PhotoCardWithButton;
