import FloatingInput from "../../components/FloatingInput";
import BigText from "../../components/BigText";
import Text from "../../components/Text";
import AttachCards from "./AttachCards";
import SmallText from "../../components/SmallText";
import ShadowButton from "../../components/ShadowButton";
function ApplyForm() {
  return (
    <div className="mt-10" id="apply">
      <BigText fontWeight={`font-semibold`}>Apply for this job</BigText>
      <SmallText extraClass={`pt-1`}>
        <span className="text-red-700">*</span> indicates a required field
      </SmallText>
      <form className="mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[25px]">
          <FloatingInput label="First Name" required name="firstName" />
          <FloatingInput label="Last Name" required name="lastName" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[25px] mt-5">
          <FloatingInput label="Email" type="email" required name="email" />
          <FloatingInput label="Phone" required name="phone" />
        </div>
        <div className="mt-5">
          <Text fontWeight={`font-bold`}>
            Resume / CV <span className="text-red-700">*</span>
          </Text>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 my-2.5">
            <AttachCards text={`Attach`} />
            <AttachCards text={`Dropbox`} />
            <AttachCards text={`Google Drive`} />
            <AttachCards text={`Other Link`} />
          </div>
          <Text textColor={`text-borderPrimary`}>
            Accepted file types: pdf, doc, docx, txt, rtf
          </Text>
        </div>
        <div className="mt-5 pb-5 border-b border-b-borderPrimary">
          <Text fontWeight={`font-bold`}>
            Cover Letter <span className="text-red-700">*</span>
          </Text>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 my-2.5">
            <AttachCards text={`Attach`} />
            <AttachCards text={`Dropbox`} />
            <AttachCards text={`Google Drive`} />
            <AttachCards text={`Other Link`} />
          </div>
          <Text textColor={`text-borderPrimary`}>
            Accepted file types: pdf, doc, docx, txt, rtf
          </Text>
        </div>
        <div className="mt-5">
          <div className="rounded-xl border border-borderPrimary pl-2 pt-2">
            <label className="dark:text-textSubheadingDark text-sm font-bold">
              This role requires recent experience and a deep understanding of
              alternative investments and wealth management with 5+ years of
              experience marketing to financial institutions, ideally targeting
              family offices, RIAs, regional wealth managers, aggregators and
              mid-market asset managers. Do you meet this requirement, and if
              so, please give a brief description below.{" "}
              <span className="text-red-700">*</span>
            </label>
            <textarea
              name="details"
              rows={8}
              placeholder="Type Here.."
              required
              className="w-full dark:text-textSubheadingDark bg-transparent mt-2 pl-2 pt-1 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-5 w-max m-auto">
          <ShadowButton
            type={"submit"}
            text={`Submit Application`}
            width={`w-max`}
            bg={`bg-gradient-to-b from-primary to-secondary`}
          />
        </div>
      </form>
    </div>
  );
}

export default ApplyForm;
