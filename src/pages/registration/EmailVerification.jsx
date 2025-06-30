import { useState, useRef, useEffect } from "react";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import ShadowButton from "../../components/ShadowButton";

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Initialize refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (pastedData && /^\d+$/.test(pastedData)) {
      const newOtp = [...otp];

      // Fill the inputs with pasted data
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i] || "";
      }

      setOtp(newOtp);

      // Focus on the last filled input or the next empty one
      const lastFilledIndex = Math.min(pastedData.length - 1, 5);
      const nextEmptyIndex = Math.min(pastedData.length, 5);

      if (pastedData.length >= 6) {
        inputRefs.current[5]?.focus();
      } else {
        inputRefs.current[nextEmptyIndex]?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("OTP Submitted:", otpValue);
      // Handle form submission here
    } else {
      alert("Please enter all 6 digits");
    }
  };

  const handleResendCode = () => {
    console.log("Resending code...");
    // Handle resend logic here
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <div className="">
        <div className="text-center mb-8">
          <SubTitle font={`font-clash`}>Verify your email</SubTitle>
          <Text fontWeight={`font-medium`} extraClass={`pt-[5px]`}>
            The code was sent to your email address for confirmation.
          </Text>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-start gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center dark:text-textHeadingDark dark:bg-backgroundDark text-xl font-semibold border border-borderPrimary rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder=""
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <ShadowButton
              bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
              type="submit"
              text={`Verify`}
            />
          </div>
        </form>

        {/* Resend Code */}
        <div className="mt-5">
          <Text>
            Didn't receive any code?{" "}
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium focus:outline-none focus:underline"
            >
              Resend Code
            </button>
          </Text>
        </div>
      </div>
    </div>
  );
}
