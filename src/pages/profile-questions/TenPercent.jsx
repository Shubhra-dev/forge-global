import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function TenPercent({ whatToDo, setWhatToDo, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        What would you do if you lost 10% a year?
      </SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(9)}
      >
        <div
          onClick={() =>
            setWhatToDo({
              ...whatToDo,
              if_lost_10_percent_a_year: "sell everything",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="ten-percent"
            className="accent-secondary2"
            checked={whatToDo.if_lost_10_percent_a_year === "sell everything"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Sell everything
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setWhatToDo({
              ...whatToDo,
              if_lost_10_percent_a_year: "sell partial",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="ten-percent"
            className="accent-secondary2"
            checked={whatToDo.if_lost_10_percent_a_year === "sell partial"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Sell part of my holdings
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setWhatToDo({ ...whatToDo, if_lost_10_percent_a_year: "switch" })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="ten-percent"
            className="accent-secondary2"
            checked={whatToDo.if_lost_10_percent_a_year === "switch"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Switch to a conservative portfolio
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setWhatToDo({
              ...whatToDo,
              if_lost_10_percent_a_year: "do nothing",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="ten-percent"
            className="accent-secondary2"
            checked={whatToDo.if_lost_10_percent_a_year === "do nothing"}
          />
          <SmallHeading fontWeight={`font-normal`}>Do nothing</SmallHeading>
        </div>
        <div
          onClick={() =>
            setWhatToDo({
              ...whatToDo,
              if_lost_10_percent_a_year: "invest more",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="ten-percent"
            className="accent-secondary2"
            checked={whatToDo.if_lost_10_percent_a_year === "invest more"}
          />
          <SmallHeading fontWeight={`font-normal`}>Invest more</SmallHeading>
        </div>

        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(7)}
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

export default TenPercent;
