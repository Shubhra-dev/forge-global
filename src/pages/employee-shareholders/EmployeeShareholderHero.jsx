import EmpShareHero from "../../assets/EmpShareHero.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function EmployeeShareholderHero() {
  return (
    <div
      className="pt-[65px] h-[600px] relative sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${EmpShareHero})` }}
    >
      <div className="absolute inset-0 bg-black/75 dark:block hidden z-10"></div>
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <div className="m-0 sm:m-auto w-full sm:w-4/5 tab:w-3/5">
            <Title align={`text-center`}>Unlock more possibilities</Title>
            <BigText extraClass={`pt-2.5`} align={`text-center`}>
              Whether you want to diversify your assets or have immediate
              financial needs like paying for college or buying a home, Forge
              can help you understand and potentially unlock equity in your
              private company shares.
            </BigText>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeShareholderHero;
