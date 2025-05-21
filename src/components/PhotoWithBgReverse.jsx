import Man2 from "../assets/Man2.png";
import BgYellow2 from "../assets/BgYellow1.svg";
function PhotoWithBgReverse() {
  return (
    <div className="w-10/12 m-auto sm:m-0 sm:w-full rounded-md bg-transparent relative">
      <img
        src={Man2}
        alt="man"
        className="w-full m-auto z-10 relative rounded-md"
      />
      <img
        src={BgYellow2}
        alt="background shape"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
    </div>
  );
}

export default PhotoWithBgReverse;
