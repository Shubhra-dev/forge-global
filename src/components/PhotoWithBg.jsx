import Man1 from "../assets/Man1.png";
import BgYellow1 from "../assets/BgYellow1.png";
function PhotoWithBg() {
  return (
    <div className="w-2/5 rounded-md bg-transparent relative">
      <img
        src={Man1}
        alt="man"
        className="w-[90%] m-auto z-10 relative rounded-md"
      />
      <img
        src={BgYellow1}
        alt="background shape"
        className=" absolute bottom-0 left-0 z-0"
      />
    </div>
  );
}

export default PhotoWithBg;
