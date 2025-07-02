import ShadowButton from "../../components/ShadowButton";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
function RegistrationForm() {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <Text fontWeight={`font-medium`}>
        Already a member?{" "}
        <span className="text-blue-700 underline cursor-pointer">Login</span>
      </Text>
      <SubTitle font={`font-clash`} extraClass={`mt-1.`}>
        Register Your Account
      </SubTitle>
      <div className="my-6 w-full">
        <form className="w-full">
          <div className="flex items-center justify-between gap-5">
            <Input
              label={`First Name`}
              name={`firstName`}
              type={`text`}
              placeholder={`John`}
            />
            <Input
              label={`Last Name`}
              name={`lastName`}
              type={`text`}
              placeholder={`Doe`}
            />
          </div>
          <div className="mt-5">
            <Input
              width={`w-full`}
              label={`Email Address`}
              placeholder={`example@email.com`}
              type={`email`}
              name={`email`}
            />
          </div>
          <div className="cursor-default mt-5 flex items-center justify-normal gap-2">
            <input type="checkbox" />
            <SmallText>
              I agree to the{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Privacy Policy.
              </span>
            </SmallText>
          </div>
          <div className="mt-4 sm:mt-5 w-max m-auto sm:m-0">
            <ShadowButton
              bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
              text={`Create`}
              type={`submit`}
              rounded={`rounded-md`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
