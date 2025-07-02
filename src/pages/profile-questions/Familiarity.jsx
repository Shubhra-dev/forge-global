import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function Familiarity() {
  const [familiarity, setFamiliarity] = useState("familiar");
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        How familiar are you with investing?
      </SubTitle>
      <form className="mt-5 flex flex-col items-start gap-3">
        <div
          onClick={() => setFamiliarity("familiar")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-familiarity"
            className="accent-secondary2"
            checked={familiarity === "familiar"}
          />
          <SmallHeading fontWeight={`font-normal`}>Familiar</SmallHeading>
        </div>
        <div
          onClick={() => setFamiliarity("very-familiar")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-familiarity"
            className="accent-secondary2"
            checked={familiarity === "very-familiar"}
          />
          <SmallHeading fontWeight={`font-normal`}>Very Familiar</SmallHeading>
        </div>
        <div
          onClick={() => setFamiliarity("not-familiar")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-familiarity"
            className="accent-secondary2"
            checked={familiarity === "not-familiar"}
          />
          <SmallHeading fontWeight={`font-normal`}>Not familiar</SmallHeading>
        </div>
        <div
          onClick={() => setFamiliarity("somewhat-familiar")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-familiarity"
            className="accent-secondary2"
            checked={familiarity === "somewhat-familiar"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Somewhat Familiar
          </SmallHeading>
        </div>
        <div
          onClick={() => setFamiliarity("new")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-familiarity"
            className="accent-secondary2"
            checked={familiarity === "new"}
          />
          <SmallHeading fontWeight={`font-normal`}>
            New to investing
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

export default Familiarity;
