import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function PreTaxIncome() {
  const [preTaxIncome, setPreTaxIncome] = useState("250000-500000");
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        What is your pre-tax annual income?
      </SubTitle>
      <form className="mt-5 flex flex-col items-start gap-3">
        <div
          onClick={() => setPreTaxIncome("250000-500000")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="preTaxIncome"
            className="accent-secondary2"
            checked={preTaxIncome === "250000-500000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 250000-500000
          </SmallHeading>
        </div>
        <div
          onClick={() => setPreTaxIncome("500000-1000000")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="preTaxIncome"
            className="accent-secondary2"
            checked={preTaxIncome === "500000-1000000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 500000-1000000
          </SmallHeading>
        </div>
        <div
          onClick={() => setPreTaxIncome("1000000-1500000")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="preTaxIncome"
            className="accent-secondary2"
            checked={preTaxIncome === "1000000-1500000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 1000000-1500000
          </SmallHeading>
        </div>
        <div
          onClick={() => setPreTaxIncome("1500000-2000000")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="preTaxIncome"
            className="accent-secondary2"
            checked={preTaxIncome === "1500000-2000000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 1500000-2000000
          </SmallHeading>
        </div>
        <div
          onClick={() => setPreTaxIncome("2000000+")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="preTaxIncome"
            className="accent-secondary2"
            checked={preTaxIncome === "2000000+"}
          />
          <SmallHeading fontWeight={`font-normal`}>BDT 2000000+</SmallHeading>
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

export default PreTaxIncome;
