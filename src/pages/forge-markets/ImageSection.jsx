import ForgeMarketSection from "../../assets/ForgeMarketSection.jpg";
function ImageSection() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat rounded-[40px]"
      style={{ backgroundImage: `url(${ForgeMarketSection})` }}
    >
      <div className="m-auto max-w-content">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto h-[400px] flex items-center justify-normal"></div>
      </div>
    </div>
  );
}

export default ImageSection;
