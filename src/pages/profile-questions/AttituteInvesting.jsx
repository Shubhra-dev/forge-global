import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import ShadowButton from "../../components/ShadowButton";

function AttituteInvesting({ attitude, setAttitude, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        Describe your attitude towards investing
      </SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(8)}
      >
        <div
          onClick={() =>
            setAttitude({
              ...attitude,
              attitude_towards_investing: "not comfortable with losses",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="attitude"
            className="accent-secondary2"
            checked={
              attitude.attitude_towards_investing ===
              "not comfortable with losses"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            I am not comfortable with losses
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setAttitude({
              ...attitude,
              attitude_towards_investing: "do no mind taking risk",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="attitude"
            className="accent-secondary2"
            checked={
              attitude.attitude_towards_investing === "do no mind taking risk"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            I do no mind taking risk
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setAttitude({
              ...attitude,
              attitude_towards_investing: "some risk is okay",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="attitude"
            className="accent-secondary2"
            checked={
              attitude.attitude_towards_investing === "some risk is okay"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            I am aiming for long growth, some risk is okay
          </SmallHeading>
        </div>
        <div
          onClick={() =>
            setAttitude({
              ...attitude,
              attitude_towards_investing: "short term losses are okay",
            })
          }
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="attitude"
            className="accent-secondary2"
            checked={
              attitude.attitude_towards_investing ===
              "short term losses are okay"
            }
          />
          <SmallHeading fontWeight={`font-normal`}>
            Short term losses are okay if it means better long term growth
          </SmallHeading>
        </div>

        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(6)}
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

export default AttituteInvesting;
