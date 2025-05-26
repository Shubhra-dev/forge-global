import Stat from "../../assets/Stat.jpg";
import Title from "../../components/Title";
import BigText from "../../components/BigText";
function PrivateStatistics() {
  return (
    <div
      className={`w-full relative bg-center bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${Stat})` }}
    >
      <div className="absolute inset-0 bg-backgroundBronzeDark/80 z-10"></div>
      <div className={`max-w-content m-auto relative z-20`}>
        <div
          className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-12 sm:py-16 tab:py-24`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:justify-between">
            <div className="w-1/2 sm:w-1/3 flex flex-col items-center justify-center ">
              <Title textColor={`text-textHeadingDark`}>$15.3B</Title>
              <div className="w-14 h-1.5 bg-white rounded-xl my-4"></div>
              <BigText
                align={`text-center`}
                fontWeight={`font-semibold`}
                textColor={`text-textHeadingDark`}
              >
                Transaction Volume
              </BigText>
            </div>
            <div className="w-1/2 sm:w-1/3 py-4 sm:py-0 flex flex-col items-center justify-center border-y-2 sm:border-y-0 sm:border-x-2 border-white">
              <Title textColor={`text-textHeadingDark`}>600+</Title>
              <div className="w-14 h-1.5 bg-white rounded-xl my-4"></div>
              <BigText
                align={`text-center`}
                fontWeight={`font-semibold`}
                textColor={`text-textHeadingDark`}
                extraClass={`sm:w-11/12 tab:w-5/6`}
              >
                Private Companies Traded
              </BigText>
            </div>
            <div className="w-1/2 sm:w-1/3 flex flex-col items-center justify-center ">
              <Title textColor={`text-textHeadingDark`}>27K+</Title>
              <div className="w-14 h-1.5 bg-white rounded-xl my-4"></div>
              <BigText
                align={`text-center`}
                fontWeight={`font-semibold`}
                textColor={`text-textHeadingDark`}
              >
                Trades
              </BigText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateStatistics;
