import BgYellow1 from "../assets/BgYellow1.png";
function PhotoWithBg({ image }) {
  return (
    <div className="w-full rounded-md bg-transparent relative">
      <img
        src={image}
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
