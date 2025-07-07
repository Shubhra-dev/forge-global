import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import ShadowButton from "../../components/ShadowButton";

function IncomeSources({ incomeSources, setIncomeSources, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        Your income sources (current and future) are:
      </SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(6)}
      >
        <div
          onClick={() =>
            setIncomeSources({
              ...incomeSources,
              income_sources: "very-stable",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-incomeSources"
            className="accent-secondary2"
            checked={incomeSources.income_sources === "very-stable"}
          />
          <SmallHeading fontWeight={`font-normal`}>Very Stable</SmallHeading>
        </div>
        <div
          onClick={() =>
            setIncomeSources({ ...incomeSources, income_sources: "unstable" })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-incomeSources"
            className="accent-secondary2"
            checked={incomeSources.income_sources === "unstable"}
          />
          <SmallHeading fontWeight={`font-normal`}>Unstable</SmallHeading>
        </div>
        <div
          onClick={() =>
            setIncomeSources({
              ...incomeSources,
              income_sources: "somewhat-stable",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-incomeSources"
            className="accent-secondary2"
            checked={incomeSources.income_sources === "somewhat-stable"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Somewhat Stable
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setIncomeSources({ ...incomeSources, income_sources: "stable" })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-incomeSources"
            className="accent-secondary2"
            checked={incomeSources.income_sources === "stable"}
          />
          <SmallHeading fontWeight={`font-normal`}>Stable</SmallHeading>
        </div>
        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(4)}
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

export default IncomeSources;
