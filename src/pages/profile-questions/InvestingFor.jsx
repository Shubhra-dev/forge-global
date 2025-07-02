import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function InvestingFor() {
  const [group, setGroup] = useState("general-savings");
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>What are you investing for?</SubTitle>
      <form className="mt-5 flex flex-col items-start gap-3">
        <div
          onClick={() => setGroup("retirement")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={group === "retirement"}
          />
          <SmallHeading fontWeight={`font-normal`}>Retirement</SmallHeading>
        </div>
        <div
          onClick={() => setGroup("long-term-savings")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={group === "long-term-savings"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Long Term Savings
          </SmallHeading>
        </div>
        <div
          onClick={() => setGroup("general-savings")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={group === "general-savings"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            General Savings
          </SmallHeading>
        </div>
        <div
          onClick={() => setGroup("major-purchase")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={group === "major-purchase"}
          />
          <SmallHeading fontWeight={`font-normal`}>Major Purchase</SmallHeading>
        </div>
        <div
          onClick={() => setGroup("short-term-savings")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="investing-for"
            className="accent-secondary2"
            checked={group === "short-term-savings"}
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
