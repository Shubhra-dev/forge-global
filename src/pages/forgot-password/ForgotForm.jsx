import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Input from "../registration/Input";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";
function ForgotForm() {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <Text fontWeight={`font-medium`}>
        Return to{" "}
        <span className="text-blue-700 underline cursor-pointer">Login</span>
      </Text>
      <SubTitle font={`font-clash`} extraClass={`mt-1.`}>
        Forgot Password?
      </SubTitle>
      <SmallText extraClass={`pt-1 sm:w-3/4`}>
        Enter the email address or mobile number associated with your account.
      </SmallText>
      <form className="w-full mt-5">
        <Input
          width={`w-full`}
          type={`text`}
          label={`Email or Phone Numnber`}
          placeholder={`Email or Phone Numnber`}
          name={`email/phone`}
        />

        <div className="mt-5">
          <ShadowButton
            type={`submit`}
            text={`Continue`}
            bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
            rounded={`rounded-md`}
          />
        </div>
      </form>
    </div>
  );
}

export default ForgotForm;
