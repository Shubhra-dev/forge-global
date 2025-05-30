import Subtitle from "./Subtitle";
import PrimaryButton from "./PrimaryButton";
function PhotoInfoCard2({
  imagePosition = "left",
  extraClass,
  heading,
  image,
  children,
  buttonText,
}) {
  return (
    <>
      {imagePosition === "left" && (
        <div
          className={`flex flex-col tab:flex-row items-center justify-normal gap-5 tab:gap-20 w-full ${extraClass ? extraClass : ""}`}
        >
          <div className="w-full tab:w-[50%] overflow-hidden">
            <img
              src={image}
              alt="card image"
              className="h-auto tab:h-64 tab:rounded-br-[40px] object-cover object-center"
            />
          </div>
          <div className="pr-5 py-5 tab:pr-10 tab:py-10 w-full tab:w-[50%]">
            <Subtitle
              font={`font-clash`}
              extraClass={`pb-5`}
              align={`text-left`}
            >
              {heading}
            </Subtitle>
            {children}
            <PrimaryButton>{buttonText}</PrimaryButton>
          </div>
        </div>
      )}
      {imagePosition === "right" && (
        <div
          className={`flex flex-col-reverse tab:flex-row items-center justify-normal gap-5 tab:gap-20 w-full ${extraClass ? extraClass : ""}`}
        >
          <div className="pr-5 py-5 tab:pr-10 tab:py-10 w-full h-auto tab:w-[50%]">
            <Subtitle
              font={`font-clash`}
              extraClass={`pb-5`}
              align={`text-left`}
            >
              {heading}
            </Subtitle>
            {children}
            <PrimaryButton>{buttonText}</PrimaryButton>
          </div>
          <div className="w-full tab:w-[50%] overflow-hidden">
            <img
              src={image}
              alt="card image"
              className="h-auto tab:h-64 tab:rounded-tl-[40px] object-cover object-center"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoInfoCard2;
