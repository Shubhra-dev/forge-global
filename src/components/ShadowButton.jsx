function ShadowButton({ bg, type, textColor, text, width }) {
  return (
    <button
      type={type}
      className={`${width ? "width" : "w-32"} px-6 py-3 ${bg ? bg : `bg-gradient-to-b from-sky-500 to-sky-700`} rounded-[40px] shadow-[inset_0px_-7px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5`}
    >
      <div
        class={`text-center justify-start ${textColor ? textColor : `text-white`} text-base font-bold leading-normal`}
      >
        {text}
      </div>
    </button>
  );
}

export default ShadowButton;
