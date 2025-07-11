import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function InvestingFor({ investingFor, setInvestingFor, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>What are you investing for?</SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(3)}
      >
        <div
          onClick={() =>
            setInvestingFor({ ...investingFor, investing_for: "retirement" })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={investingFor.investing_for === "retirement"}
          />
          <SmallHeading fontWeight={`font-normal`}>Retirement</SmallHeading>
        </div>
        <div
          onClick={() =>
            setInvestingFor({
              ...investingFor,
              investing_for: "long-term-savings",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={investingFor.investing_for === "long-term-savings"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Long Term Savings
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setInvestingFor({
              ...investingFor,
              investing_for: "general-savings",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={investingFor.investing_for === "general-savings"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            General Savings
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setInvestingFor({
              ...investingFor,
              investing_for: "major-purchase",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={investingFor.investing_for === "major-purchase"}
          />
          <SmallHeading fontWeight={`font-normal`}>Major Purchase</SmallHeading>
        </div>
        <div
          onClick={() =>
            setInvestingFor({
              ...investingFor,
              investing_for: "short-term-savings",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={investingFor.investing_for === "short-term-savings"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Short Term Savings
          </SmallHeading>
        </div>
        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(1)}
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

export default InvestingFor;
