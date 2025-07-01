import { useEffect, useState } from "react";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";
import PasswordInput from "../registration/PasswordInput";
import { div } from "framer-motion/client";
function PasswordSet() {
  const [details, setDetails] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [data, setData] = useState({ password: "", confirmPassword: "" });
  const [validate, setValidate] = useState({
    lengthValid: false,
    noWhitespace: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(false);
  useEffect(() => {
    setValidate({
      lengthValid: data.password.length >= 8 && data.password.length <= 16,
      noWhitespace: !/\s/.test(data.password),
      hasNumber: /\d/.test(data.password),
      hasUppercase: /[A-Z]/.test(data.password),
      hasLowercase: /[a-z]/.test(data.password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(data.password),
    });
  }, [data.password]);
  useEffect(() => {
    if (data.password && data.confirmPassword) {
      setPasswordMatch(data.password === data.confirmPassword);
    }
  }, [data.password, data.confirmPassword]);
  console.log(showPasswordMessage);
  return (
    <div className="w-full sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <div className="">
        <PasswordInput
          width={`w-full`}
          onFocus={() => setDetails(true)}
          value={data.password}
          setValue={(e) => setData({ ...data, password: e.target.value })}
          label={`New Password`}
          placeholder={`Enter Your password`}
          name={`password`}
        />
      </div>
      {details && (
        <div className="w-full p-2 mt-2 rounded-md bg-backgroundCream dark:bg-backgroundDark">
          <ul className="list-disc dark:text-textParagraphDark pl-4">
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.lengthValid ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.lengthValid ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  8-16 character
                </SmallText>
              </li>
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.hasNumber ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.hasNumber ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  1 Numeric
                </SmallText>
              </li>
            </div>
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.hasUppercase ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.hasUppercase ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  1 uppercase letter
                </SmallText>
              </li>
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.hasLowercase ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.hasLowercase ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  1 lowercase letter
                </SmallText>
              </li>
            </div>
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.hasSpecialChar ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.hasSpecialChar ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  1 special character ($,#,@,*)
                </SmallText>
              </li>
              <li className="w-1/2">
                <SmallText
                  textColor={`${validate.noWhitespace ? "text-green-700" : "text-textParagraph"}`}
                  textColorDark={`${validate.noWhitespace ? "text-green-700" : "text-textParagraphDark"}`}
                >
                  No white space
                </SmallText>
              </li>
            </div>
          </ul>
        </div>
      )}
      <div className="mt-5">
        <PasswordInput
          width={`w-full`}
          label={`Confirm New Password`}
          value={data.confirmPassword}
          onFocus={() => setShowPasswordMessage(true)}
          setValue={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
          placeholder={`Confirm password`}
          name={`password`}
        />
      </div>
      {showPasswordMessage && (
        <div className="mt-2 p-3 bg-backgroundCream dark:bg-backgroundCreamDark">
          {passwordMatch && (
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-green-700`}
              textColorDark={` `}
            >
              Password matched.
            </SmallText>
          )}
          {!passwordMatch && (
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-red-700`}
              textColorDark={` `}
            >
              Password did not match.
            </SmallText>
          )}
        </div>
      )}
      <div className="mt-5">
        <ShadowButton
          type={`submit`}
          disabled={!passwordMatch}
          text={`Submit`}
          bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
          rounded={`rounded-md`}
        />
      </div>
    </div>
  );
}

export default PasswordSet;
