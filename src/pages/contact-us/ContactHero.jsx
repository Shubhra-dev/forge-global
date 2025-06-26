import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import LocationOn from "../../assets/icons/LocationWhite.svg";
import Phone from "../../assets/icons/Phone.svg";
import ContactBg from "../../assets/ContactBg.jpg";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";
function ContactHero() {
  return (
    <SectionLayout
      padding={`pt-24 pb-12 sm:pt-16 sm:pb-16 tab:pt-32 tab:pb-14`}
    >
      <Title fontWeight={`font-medium`}>
        Lets <span className="font-semibold text-primary">Connect</span>
      </Title>
      <SmallHeading
        align={`text-center`}
        fontWeight={`font-medium`}
        extraClass={`pt-[15px]`}
      >
        We look forward to learning about your financial goals.
      </SmallHeading>
      <div className="my-10 flex flex-wrap tab:flex-nowrap items-center justify-between gap-10 tab:gap-14">
        <div className="flex items-center justify-normal gap-5 w-full sm:w-[47%] tab:w-1/3">
          <div className="p-2.5 bg-backgroundBronzeDark dark:bg-backgroundBronze rounded-full">
            <img src={LocationOn} alt="location tracker" />
          </div>
          <div>
            <Text textColor={`text-primary`} textColorDark={` `}>
              Address
            </Text>
            <Text textColor={`text-textHeading`} fontWeight={`font-medium`}>
              Banani, Dhaka-1200, Bangladesh
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-normal gap-5 w-full sm:w-[47%] tab:w-1/3">
          <div className="p-2.5 bg-backgroundBronzeDark dark:bg-backgroundBronze rounded-full">
            <img src={Phone} alt="location tracker" />
          </div>
          <div>
            <Text textColor={`text-primary`} textColorDark={` `}>
              Our Phone
            </Text>
            <Text textColor={`text-textHeading`} fontWeight={`font-medium`}>
              +880 1234 567890
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-normal gap-5 w-full sm:w-[47%] tab:w-1/3">
          <div className="p-2.5 bg-backgroundBronzeDark dark:bg-backgroundBronze rounded-full">
            <img src={Phone} alt="location tracker" />
          </div>
          <div>
            <Text textColor={`text-primary`} textColorDark={` `}>
              Our Email
            </Text>
            <Text textColor={`text-textHeading`} fontWeight={`font-medium`}>
              office@investment.com
            </Text>
          </div>
        </div>
      </div>
      <div
        className="flex items-stretch justify-end w-full rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="w-full sm:w-2/3 tab:w-1/2 p-6 tab:p-0 tab:px-10 tab:py-7 bg-white dark:bg-backgroundPrimaryDark rounded-[20px]">
          <Title fontWeight={`font-medium`} align={`text-left`}>
            Get in Touch
          </Title>
          <SmallText fontWeight={`font-medium`} extraClass={`pt-2.5`}>
            Have a question or feedback? <br />
            Fill out the form below, and we’ll respond promptly!
          </SmallText>
          <form className="mt-7">
            <div className="w-full flex items-center justify-between gap-5">
              <div className="w-full sm:w-1/2">
                <SmallText fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Your Name
                </SmallText>
                <input
                  type="text"
                  name="name"
                  placeholder="eg. Abidur Rahman"
                  className="py-3 px-2.5 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-[5px]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <SmallText fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Your Email
                </SmallText>
                <input
                  type="email"
                  name="email"
                  placeholder="eg. abrahman@gmail.com"
                  className="py-3 px-2.5 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-[5px]"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-5 my-5">
              <div className="w-full sm:w-1/2">
                <SmallText fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Phone Number
                </SmallText>
                <input
                  type="text"
                  name="phone"
                  placeholder="e.g. +880 1234 567890"
                  className="py-3 px-2.5 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-[5px]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <SmallText fontWeight={`font-medium`} extraClass={`pl-2`}>
                  Company Name
                </SmallText>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Execore"
                  className="py-3 px-2.5 text-sm w-full rounded-md dark:bg-backgroundDark dark:text-textSubheadingDark border border-borderPrimary mt-[5px]"
                />
              </div>
            </div>
            <div>
              <SmallText fontWeight={`font-medium`} extraClass={`pl-2`}>
                Your Message
              </SmallText>
              <textarea
                placeholder="Type here.."
                rows={3}
                className="py-3 w-full px-2.5 text-sm dark:bg-backgroundDark dark:text-textSubheadingDark rounded-md border border-borderPrimary mt-[5px]"
              />
            </div>
            <div className="w-max m-auto mt-7">
              <ShadowButton
                width={`w-max tab:w-64`}
                bg={`bg-gradient-to-b from-orange-400 to-yellow-800`}
                text={`Submit`}
              />
            </div>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactHero;
