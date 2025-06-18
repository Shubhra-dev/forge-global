import { useEffect } from "react";
import Logo from "../assets/icons/Logo.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import LinkedIn from "../assets/icons/LinkedIn.svg";
import Send from "../assets/icons/Send.svg";
import X from "../assets/icons/X.svg";
import GooglePlay from "../assets/GooglePlay.png";
import AppleStore from "../assets/AppleStore.png";
import BigText from "../components/BigText";
import SmallText from "../components/SmallText";
import Text from "../components/Text";
function Footer() {
  return (
    <div className="w-full bg-backgroundDark">
      <div className="w-full max-w-content m-auto">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto pt-16 pb-8 flex flex-col gap-4 sm:gap-0 sm:flex-row items-start justify-between">
          <div className="flex flex-col w-full sm:w-1/4">
            <div className="flex pr-2.5 py-2.5 items-center justify-normal gap-[15px]">
              <img src={Logo} alt="logo" />
              <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                Investment
              </BigText>
            </div>
            <SmallText extraClass={`pt-1.5`} textColor={`text-white`}>
              Empowering your financial future with smart, secure, and
              accessible investment solutions. Join us on the path to long-term
              growth and prosperity.
            </SmallText>
            <div className="pt-7 flex items-center justify-normal gap-3">
              <img src={Facebook} alt="Facebook" className=" cursor-pointer" />
              <img
                src={Instagram}
                alt="Instagram"
                className=" cursor-pointer"
              />
              <img src={LinkedIn} alt="LinkedIn" className=" cursor-pointer" />
              <img src={X} alt="X" className=" cursor-pointer" />
            </div>
          </div>
          <div className="w-full sm:w-[35%] flex items-start justify-normal gap-4 sm:gap-8">
            <div className="w-1/2">
              <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                Company
              </BigText>
              <div className="pt-5">
                <Text extraClass={`cursor-pointer pb-[5px]`}>Who We Are?</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>
                  Meet Our Team
                </Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>Latest Blog</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>FAQ</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>Contact Us</Text>
              </div>
            </div>
            <div className="w-1/2">
              <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                Service Link
              </BigText>
              <div className="pt-5">
                <Text extraClass={`cursor-pointer pb-[5px]`}>Who We Are?</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>
                  Meet Our Team
                </Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>Latest Blog</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>FAQ</Text>
                <Text extraClass={`cursor-pointer py-[5px]`}>Contact Us</Text>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[30%]">
            <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
              Newsletter
            </BigText>
            <SmallText
              fontWeight={`font-normal`}
              extraClass={`pt-2`}
              textColor={`text-white`}
            >
              Don’t miss the latest news
            </SmallText>
            <div className="my-5 relative">
              <input
                type="email"
                name="email"
                className="py-2 w-full pr-2 pl-5 rounded-r-full"
                placeholder="Enter email"
              />
              <div className="p-2 absolute right-1 cursor-pointer top-1 z-50 rounded-full bg-secondary2">
                <img src={Send} alt="send" />
              </div>
            </div>
            <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
              Get our app on
            </BigText>
            <div className="pt-4 flex flex-wrap gap-4">
              <img src={GooglePlay} alt="g play" className="" />
              <img src={AppleStore} alt="a store" className="" />
            </div>
          </div>
        </div>
        <div className="px-4 smLap:px-0 w-full smLap:w-10/12 laptop:w-9/12 m-auto border-t border-t-borderPrimary/50 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-center sm:justify-between">
          <SmallText textColor={`text-textParagraphDark`} textColorDark={` `}>
            ©All Rights Reserved by{" "}
            <span className="font-semibold text-secondary cursor-pointer">
              Investment INC
            </span>
          </SmallText>
          <div className="flex items-center justify-normal divide-x divide-x-borderPrimaryDark">
            <SmallText
              extraClass={`px-2 cursor-pointer`}
              textColor={`text-textParagraphDark`}
              textColorDark={` `}
            >
              Terms & Condition
            </SmallText>
            <SmallText
              extraClass={`px-2 cursor-pointer`}
              textColor={`text-textParagraphDark`}
              textColorDark={` `}
            >
              Privacy Policy
            </SmallText>
            <SmallText
              extraClass={`px-2 cursor-pointer`}
              textColor={`text-textParagraphDark`}
              textColorDark={` `}
            >
              Legal
            </SmallText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
