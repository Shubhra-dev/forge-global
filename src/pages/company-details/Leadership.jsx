import { useEffect, useState } from "react";
import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import { getLeadershipAndBoard } from "../../services/companyDetails";
function Leadership({ id }) {
  const [leadershipData, setLeadershipData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchLeadershipData = async () => {
      setIsLoading(true);
      try {
        const data = await getLeadershipAndBoard(id);
        setLeadershipData(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLeadershipData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center py-10">
          <p>Sorry! Something is wrong.</p>
        </div>
      )}
      {!isError && !isLoading && (
        <SectionLayout id={`leadership`}>
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            Leadership and board
          </SubTitle>
          <div className="pt-5 pb-8 ">
            <div className="flex items-center justify-between gap-3">
              <SmallHeading fontWeight={`font-bold`} extraClass={`w-[13%]`}>
                Leadership
              </SmallHeading>
              <div className="border-t w-[87%] border-t-borderPrimary dark:border-t-borderPrimaryDark"></div>
            </div>
            <div className="pt-5 flex flex-wrap sm:flex-nowrap items-start justify-normal gap-8 sm:gap-[50px]">
              {leadershipData.leadership_members.map((leader, index) => (
                <div className="w-[45%] sm:w-auto tab:w-1/4">
                  <SmallHeading fontWeight={`font-medium`}>
                    {leader.name}
                  </SmallHeading>
                  <Text extraClass={`pt-1`}>{leader.designation}</Text>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-5 ">
            <div className="flex items-center justify-between gap-3">
              <SmallHeading fontWeight={`font-bold`} extraClass={`w-[13%]`}>
                Board
              </SmallHeading>
              <div className="border-t w-[87%] border-t-borderPrimary dark:border-t-borderPrimaryDark"></div>
            </div>
            <div className="pt-5 flex flex-wrap sm:flex-nowrap items-start justify-normal gap-8 sm:gap-[50px]">
              {leadershipData.board_members.map((board, index) => (
                <div className="w-[45%] sm:w-auto tab:w-1/4">
                  <SmallHeading fontWeight={`font-medium`}>
                    {board.name}
                  </SmallHeading>
                  <Text extraClass={`pt-1`}>{board.designation}</Text>
                </div>
              ))}
            </div>
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default Leadership;
