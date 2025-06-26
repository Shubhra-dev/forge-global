import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Star from "../../assets/Star.png";
import SmallText from "../../components/SmallText";
import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import { FiArrowUpRight } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import AddressCard from "./AddressCard";
function OfficeLocations() {
  return (
    <SectionLayout>
      <Title align={`text-left`} fontWeight={`font-medium`}>
        Office Locations
      </Title>
      <div className="mt-10 flex flex-wrap tab:flex-nowrap items-stretch justify-between gap-5">
        <div className="relative w-full sm:w-[48%] tab:w-1/3 bg-backgroundBronzeDark text-white rounded-[24px] p-5 overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative px-2.5 py-[5px] border border-borderPrimary rounded-md w-max">
              <SmallText textColor={`text-textSubHeadingDark`}>
                Head Office
              </SmallText>
            </div>
            <Heading
              font={`font-clash`}
              textColor={`text-secondary2`}
              textColorDark={` `}
              extraClass={`py-5`}
              align={`text-left`}
            >
              Investment INC.
            </Heading>
            <SmallHeading
              textColor={`text-textHeadingdark`}
              textColorDark={` `}
            >
              Bangladesh
            </SmallHeading>
            <Text textColor={`text-textHeadingdark`} textColorDark={` `}>
              Banani, Dhaka-1200
            </Text>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <Text
              textColor={`text-textHeadingDark`}
              textColorDark={` `}
              font={`font-medium`}
            >
              Get Direction
            </Text>
            <div className="p-2 bg-white rounded-full">
              <FiArrowUpRight className="text-black" />
            </div>
          </div>
          <img src={Star} className="absolute bottom-0 right-0 z-0 w-40 h-40" />
        </div>
        <AddressCard
          mainTown={`Chattogram`}
          address={`G C E Circle, Chottogram-4000`}
          phone={`+880 1234 567890s`}
        />
        <AddressCard
          mainTown={`Rajshahi`}
          address={`Shaheb Bazar, Rajshahi-3452`}
          phone={`+880 1234 567870`}
        />
      </div>
    </SectionLayout>
  );
}

export default OfficeLocations;
