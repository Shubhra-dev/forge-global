import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
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
function Applayout() {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Smooth scroll behavior
  //   });
  // }, [location]);

  return (
    <div className="font-workSans">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="w-full bg-backgroundDark">
        <div className="w-full max-w-content m-auto flex items-center justify-center">
          <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-12 flex items-start justify-between">
            <div className="flex flex-col w-1/4">
              <div className="flex pr-2.5 py-2.5 items-center justify-normal gap-[15px]">
                <img src={Logo} alt="logo" />
                <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                  Investment
                </BigText>
              </div>
              <SmallText extraClass={`pt-1.5`} textColor={`text-white`}>
                Empowering your financial future with smart, secure, and
                accessible investment solutions. Join us on the path to
                long-term growth and prosperity.
              </SmallText>
              <div className="pt-7 flex items-center justify-normal gap-3">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className=" cursor-pointer"
                />
                <img
                  src={Instagram}
                  alt="Instagram"
                  className=" cursor-pointer"
                />
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className=" cursor-pointer"
                />
                <img src={X} alt="X" className=" cursor-pointer" />
              </div>
            </div>
            <div className="w-[35%] flex items-start justify-normal gap-8">
              <div className="w-1/2">
                <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                  Company
                </BigText>
                <div className="pt-5">
                  <Text extraClass={`cursor-pointer pb-[5px]`}>
                    Who We Are?
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>
                    Meet Our Team
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>
                    Latest Blog
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>FAQ</Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>Contact Us</Text>
                </div>
              </div>
              <div className="w-1/2">
                <BigText font={`font-clash`} textColor={`text-textHeadingDark`}>
                  Service Link
                </BigText>
                <div className="pt-5">
                  <Text extraClass={`cursor-pointer pb-[5px]`}>
                    Who We Are?
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>
                    Meet Our Team
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>
                    Latest Blog
                  </Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>FAQ</Text>
                  <Text extraClass={`cursor-pointer py-[5px]`}>Contact Us</Text>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
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
              <div className="pt-4 flex gap-4">
                <img src={GooglePlay} alt="g play" className="" />
                <img src={AppleStore} alt="a store" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applayout;
