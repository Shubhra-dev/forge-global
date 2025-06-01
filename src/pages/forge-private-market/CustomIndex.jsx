import CustomIndexBg from "../../assets/CustomIndexBg.jpg";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
function CustomIndex() {
  return (
    <div className="w-full py-8 px-5 dark:bg-backgroundDarkGeneral">
      <div
        className="relative max-w-content m-auto rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CustomIndexBg})` }}
      >
        <div className="absolute rounded-3xl inset-0 bg-black/65 dark:block hidden z-10"></div>
        <div className="z-20 px-4 py-[50px] smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto rounded-3xl flex items-center justify-center">
          <div className="w-full z-20">
            <SmallHeading
              align={`text-center`}
              textColor={`text-secondary`}
              font={`font-semibold`}
              extraClass={`pb-3`}
            >
              Explore
            </SmallHeading>
            <Heading align={`text-center`} font={`font-clash`}>
              Custom Index Solutions
            </Heading>
            <SmallHeading
              align={`text-center`}
              extraClass={`w-full tab:w-1/2 m-auto py-3`}
            >
              Design and build custom indices and models, leveraging Forge’s
              data, expertise and infrastructure.
            </SmallHeading>
            <div className="w-max m-auto">
              <PrimaryButton icon={true}>
                Learn More{" "}
                <span className="hidden sm:block">
                  About Custom Index Soutions
                </span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomIndex;
