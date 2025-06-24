import { useEffect, useState } from "react";
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
import { subcribeNewletter } from "../services/newsletter";
import { div } from "framer-motion/client";
import SmallHeading from "../components/SmallHeading";
function Footer() {
  const [email, setEmail] = useState("");
  const [subcription, setSubcription] = useState({
    data: null,
    isLoading: false,
    isError: false,
    errorMsg: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    setSubcription({ ...subcription, isLoading: true });
    try {
      const result = await subcribeNewletter(email);
      if (result.success) {
        setSubcription({
          data: result.result.subscriber,
          isLoading: false,
          isError: false,
        });
        setTimeout(() => {
          setSubcription({ ...subcription, data: null });
        }, 3000);
        setEmail("");
      }
    } catch (err) {
      setSubcription({ ...subcription, isError: true, errorMsg: err.message });
      setTimeout(() => {
        setSubcription({
          data: null,
          isLoading: false,
          isError: false,
          errorMsg: "",
        });
      }, 3000);
    }
  }
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
              {subcription.isError && (
                <SmallHeading textColor={`text-textHeadingDark`}>
                  {subcription.errorMsg}
                </SmallHeading>
              )}
              {!subcription.isError && subcription.isLoading && (
                <SmallHeading textColor={`text-textHeadingDark`}>
                  Loading..
                </SmallHeading>
              )}
              {!subcription.data &&
                !subcription.isError &&
                !subcription.isLoading && (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2 w-full pr-2 pl-5 rounded-r-full"
                      placeholder="Enter email"
                    />
                    <button
                      type="submit"
                      className="p-2 absolute right-1 cursor-pointer top-1 z-50 rounded-full bg-secondary2"
                    >
                      <img src={Send} alt="send" />
                    </button>
                  </form>
                )}
              {subcription.data &&
                !subcription.isError &&
                !subcription.isLoading && (
                  <SmallHeading textColor={`text-textHeadingDark`}>
                    {subcription.data.email} is successfully subscribed
                  </SmallHeading>
                )}
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
