import { BiPhone } from "react-icons/bi";
import SmallHeading from "../../components/SmallHeading";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import { FiArrowUpRight } from "react-icons/fi";

function AddressCard({ mainTown, address, phone }) {
  return (
    <div className="w-full dark:bg-backgroundDark sm:w-[48%] tab:w-1/3 rounded-[24px] border border-borderPrimary p-5 flex flex-col justify-between gap-14">
      <div>
        <div className="px-2.5 py-[5px] border border-borderPrimary rounded-md w-max">
          <SmallText>Head Office</SmallText>
        </div>
        <SubTitle
          font={`font-clash`}
          textColor={`text-primary`}
          textColorDark={` `}
          extraClass={`py-5`}
          align={`text-left`}
        >
          {mainTown}
        </SubTitle>
        <SmallHeading>Bangladesh</SmallHeading>
        <Text>{address}</Text>
        <div className="mt-5 flex items-center justify-normal gap-3">
          <div className="p-2 rounded-full bg-backgroundBronzeLightDark">
            <BiPhone className="text-white text-xl" />
          </div>
          <Text fontWeight={`font-medium`}>{phone}</Text>
        </div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <Text font={`font-medium`}>Get Direction</Text>
        <div className="p-2 dar:bg-white rounded-full">
          <FiArrowUpRight className="dark:text-black" />
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
