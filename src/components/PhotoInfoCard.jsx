import Heading from "./Heading";
import PrimaryButton from "./PrimaryButton";
function PhotoInfoCard({
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
          className={`flex flex-col sm:flex-row items-center justify-normal gap-5 w-full ${extraClass ? extraClass : ""}`}
        >
          <img
            src={image}
            alt="card image"
            className="w-full sm:w-[55%] h-auto sm:h-96 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-3xl object-cover object-center"
          />
          <div className="p-5 tab:p-10 w-full sm:w-[45%] h-auto sm:h-96 bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-b-2xl sm:rounded-b-none sm:rounded-r-3xl">
            <Heading
              font={`font-clash`}
              extraClass={`pb-6`}
              align={`text-left`}
            >
              {heading}
            </Heading>
            {children}
            <PrimaryButton icon={true}>{buttonText}</PrimaryButton>
          </div>
        </div>
      )}
      {imagePosition === "right" && (
        <div
          className={`flex flex-col-reverse sm:flex-row items-center justify-normal gap-5 w-full ${extraClass ? extraClass : ""}`}
        >
          <div className="p-5 tab:p-10 w-full h-auto sm:h-96 sm:w-[45%] bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-b-2xl sm:rounded-br-none sm:rounded-l-3xl">
            <Heading
              font={`font-clash`}
              extraClass={`pb-6`}
              align={`text-left`}
            >
              {heading}
            </Heading>
            {children}
            <PrimaryButton icon={true}>{buttonText}</PrimaryButton>
          </div>
          <img
            src={image}
            alt="card image"
            className="w-full sm:w-[55%] h-auto sm:h-96 rounded-t-2xl sm:rounded-tl-none sm:rounded-r-3xl object-cover object-center"
          />
        </div>
      )}
    </>
  );
}

export default PhotoInfoCard;
