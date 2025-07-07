import SmallHeading from "../../components/SmallHeading";
import ExtraSmallText from "../../components/ExtraSmallText";
function SideView({ contents }) {
  function handleClick(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="hidden tab:block w-[30%]">
      <div className="w-full rounded-[20px] shadow-md p-5 bg-backgroundPrimary dark:bg-backgroundPrimaryDark">
        <SmallHeading fontWeight={`font-bold`}>Get Future Updates</SmallHeading>
        <ExtraSmallText fontWeight={`font-normal`} extraClass={`pt-1.5`}>
          Create a Forge account today to receive future Private Market Updates.
        </ExtraSmallText>
        <div className="py-[15px] w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-borderPrimary dark:border-borderPrimaryDark w-full"
          />
        </div>
        <button className="p-3 bg-primary w-full text-white mb-3">
          Register
        </button>
        <ExtraSmallText>
          By registering, you agree to Forge’s{" "}
          <span className={`cursor-pointer underline hover:text-blue-400`}>
            Terms of Use.
          </span>
          Already registered?{" "}
          <span className={`cursor-pointer underline hover:text-blue-400`}>
            Log in
          </span>
        </ExtraSmallText>
      </div>
      <div className="mt-10">
        <SmallHeading fontWeight={`font-bold`}>Jump to sections</SmallHeading>
        <div className="mt-6">
          {contents.map(
            (item, index) =>
              item.title !== "" && (
                <div
                  onClick={() => handleClick(index)}
                  key={index}
                  className="cursor-pointer first:border-y border-b border-y-borderPrimary py-3 pr-10"
                >
                  <ExtraSmallText
                    textColor={`text-textParagraph`}
                    textColorDark={`text-textParagraphDark`}
                  >
                    {item.title}
                  </ExtraSmallText>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default SideView;
