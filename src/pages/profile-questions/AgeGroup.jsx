import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import ShadowButton from "../../components/ShadowButton";

function AgeGroup({ group, setGroup, setPage }) {
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>What is your age group?</SubTitle>
      <form
        className="mt-5 flex flex-col items-start gap-3"
        onSubmit={() => setPage(2)}
      >
        <div
          onClick={() => setGroup({ ...group, age_group: "18-25" })}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-group"
            className="accent-secondary2"
            checked={group.age_group === "18-25"}
          />
          <SmallHeading fontWeight={`font-normal`}>18-25</SmallHeading>
        </div>
        <div
          onClick={() => setGroup({ ...group, age_group: "26-35" })}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-group"
            className="accent-secondary2"
            checked={group.age_group === "26-35"}
          />
          <SmallHeading fontWeight={`font-normal`}>26-35</SmallHeading>
        </div>
        <div
          onClick={() => setGroup({ ...group, age_group: "36-50" })}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-group"
            className="accent-secondary2"
            checked={group.age_group === "36-50"}
          />
          <SmallHeading fontWeight={`font-normal`}>36-50</SmallHeading>
        </div>
        <div
          onClick={() => setGroup({ ...group, age_group: "51-65" })}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-group"
            className="accent-secondary2"
            checked={group.age_group === "51-65"}
          />
          <SmallHeading fontWeight={`font-normal`}>51-65</SmallHeading>
        </div>
        <div
          onClick={() => setGroup({ ...group, age_group: "65+" })}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="age-group"
            className="accent-secondary2"
            checked={group.age_group === "65+"}
          />
          <SmallHeading fontWeight={`font-normal`}>65+</SmallHeading>
        </div>
        <div className="mt-5">
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

export default AgeGroup;
