import SmallHeading from "../../components/SmallHeading";
import SmallText from "../../components/SmallText";

function BlogCards({ title, date, image, id }) {
  return (
    <div className="cursor-pointer p-[15px] rounded-3xl w-full tab:w-[47%] flex items-center justify-normal gap-7 border border-borderPrimary dark:border-borderPrimaryDark hover:shadow-md">
      <div className="w-[50%] sm:w-[60%]">
        <SmallText
          extraClass={`uppercase tracking-wide`}
          fontWeight={`font-medium`}
        >
          blog
        </SmallText>
        <SmallHeading
          extraClass={`py-[7px]`}
          leading={`leading-tight`}
          fontWeight={`font-semibold`}
        >
          {title}
        </SmallHeading>
        <SmallText extraClass={`tracking-wide`} fontWeight={`font-medium`}>
          {date}
        </SmallText>
      </div>
      <div
        className="w-[50%] sm:w-[40%] h-36 bg-center bg-cover bg-no-repeat rounded-xl p-[15px] flex flex-col justify-end items-start"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default BlogCards;
