import { useState } from "react";
import PasswordInput from "./PasswordInput";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";

function PasswordSet() {
  const [details, setDetails] = useState(false);
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <div className="">
        <PasswordInput
          width={`w-full`}
          onFocus={() => setDetails(true)}
          label={`Password`}
          placeholder={`Enter Your password`}
          name={`password`}
        />
      </div>
      {details && (
        <div className="w-full p-2 mt-2 rounded-md bg-backgroundCream dark:bg-backgroundDark">
          <ul className="list-disc dark:text-textParagraphDark pl-4">
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText>8-16 character</SmallText>
              </li>
              <li className="w-1/2">
                <SmallText>1 Numeric</SmallText>
              </li>
            </div>
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText>1 uppercase letter</SmallText>
              </li>
              <li className="w-1/2">
                <SmallText>1 lowercase letter</SmallText>
              </li>
            </div>
            <div className="flex items-start justify-normal gap-4">
              <li className="w-1/2">
                <SmallText>1 special character ($,#,@,*)</SmallText>
              </li>
              <li className="w-1/2">
                <SmallText>No white space</SmallText>
              </li>
            </div>
          </ul>
        </div>
      )}
      <div className="mt-5">
        <PasswordInput
          width={`w-full`}
          label={`Confirm Password`}
          placeholder={`Confirm password`}
          name={`password`}
        />
      </div>
      <div className="mt-5">
        <ShadowButton
          type={`submit`}
          text={`Validate`}
          bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
          rounded={`rounded-md`}
        />
      </div>
    </div>
  );
}

export default PasswordSet;
