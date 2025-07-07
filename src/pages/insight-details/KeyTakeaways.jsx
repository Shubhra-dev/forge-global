import DOMPurify from "dompurify";

import BigText from "../../components/BigText";
function KeyTakeaways({ title, editorData, id }) {
  return (
    <div
      id={id}
      className="py-5 pl-5 pr-5 sm:pr-10 bg-[#F1F2F4] dark:bg-transparent dark:text-textSubheadingDark"
    >
      <BigText fontWeight={`font-semibold`}>{title}</BigText>
      <div
        className="pl-4 text-xl text-normal list-disc mt-2 dark:text-textParagraphDark"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorData) }}
      ></div>
    </div>
  );
}

export default KeyTakeaways;
