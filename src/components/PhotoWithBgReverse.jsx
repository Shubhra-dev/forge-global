import Man2 from "../assets/Man2.png";
import BgYellow2 from "../assets/BgYellow1.svg";
function PhotoWithBgReverse() {
  return (
    <div className="w-[35%] rounded-md bg-transparent relative">
      <img
        src={Man2}
        alt="man"
        className="w-[90%] m-auto z-10 relative rounded-md"
      />
      <img
        src={BgYellow2}
        alt="background shape"
        className="absolute bottom-0 right-0 z-0"
      />
    </div>
  );
}

export default PhotoWithBgReverse;
