import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function HowLongInvesting({ length, setLength, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        How long have you been investing in financial products?
      </SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(10)}
      >
        <div
          onClick={() =>
            setLength({
              ...length,
              duration_time_investing_in_financial: "less than 1 year",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="how-long"
            className="accent-secondary2"
            checked={
              length.duration_time_investing_in_financial === "less than 1 year"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            Less than 1 year
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setLength({
              ...length,
              duration_time_investing_in_financial: "1 to 2 years",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="how-long"
            className="accent-secondary2"
            checked={
              length.duration_time_investing_in_financial === "1 to 2 years"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>1 to 2 years</SmallHeading>
        </div>
        <div
          onClick={() =>
            setLength({
              ...length,
              duration_time_investing_in_financial: "3 to 5 years",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="how-long"
            className="accent-secondary2"
            checked={
              length.duration_time_investing_in_financial === "3 to 5 years"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>3 to 5 years</SmallHeading>
        </div>
        <div
          onClick={() =>
            setLength({
              ...length,
              duration_time_investing_in_financial: "more than 5 years",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="how-long"
            className="accent-secondary2"
            checked={
              length.duration_time_investing_in_financial ===
              "more than 5 years"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            More than 5 years
          </SmallHeading>
        </div>

        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(8)}
            rounded={`rounded-md`}
          />
          <ShadowButton
            text={`Next`}
            bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
            type={`submit`}
            rounded={`rounded-md`}
          />
        </div>
      </form>
    </div>
  );
}

export default HowLongInvesting;
