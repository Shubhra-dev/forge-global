import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import ShadowButton from "../../components/ShadowButton";

function LiquidNetWorth({ liquidNetWorth, setLiquidNetWorth, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>What is your liquid net worth?</SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(5)}
      >
        <div
          onClick={() =>
            setLiquidNetWorth({
              ...liquidNetWorth,
              liquid_net_worth: "250000-500000",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="liquidNetWorth"
            className="accent-secondary2"
            checked={liquidNetWorth.liquid_net_worth === "250000-500000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 250000-500000
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setLiquidNetWorth({
              ...liquidNetWorth,
              liquid_net_worth: "500000-1000000",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="liquidNetWorth"
            className="accent-secondary2"
            checked={liquidNetWorth.liquid_net_worth === "500000-1000000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 500000-1000000
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setLiquidNetWorth({
              ...liquidNetWorth,
              liquid_net_worth: "1000000-1500000",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="liquidNetWorth"
            className="accent-secondary2"
            checked={liquidNetWorth.liquid_net_worth === "1000000-1500000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 1000000-1500000
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setLiquidNetWorth({
              ...liquidNetWorth,
              liquid_net_worth: "1500000-2000000",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="liquidNetWorth"
            className="accent-secondary2"
            checked={liquidNetWorth.liquid_net_worth === "1500000-2000000"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            BDT 1500000-2000000
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setLiquidNetWorth({
              ...liquidNetWorth,
              liquid_net_worth: "2000000+",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="liquidNetWorth"
            className="accent-secondary2"
            checked={liquidNetWorth.liquid_net_worth === "2000000+"}
          />
          <SmallHeading fontWeight={`font-normal`}>BDT 2000000+</SmallHeading>
        </div>
        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(3)}
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

export default LiquidNetWorth;
