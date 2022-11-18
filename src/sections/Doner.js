/** @jsx jsx */
import { jsx } from "theme-ui";
import DonationForm from "components/donation-form";
import ContactForm from "components/contactForm";

const Doner = () => {
  return (
    <div
      id="innsamling"
      className="w-full h-auto max-w-[1440px] p-4 mb-32 mx-auto"
    >
      <div className="flex flex-col items-center justify-center mx-auto mt-8 mb-12">
        <p className="my-2 text-xl font-semibold md:text-4xl">
          Støtt saken med Vipps!
        </p>
        <p className="my-2 text-sm text-center md:text-lg">
          Firma? Større sum? Legg igjen din info under så kontakter vi deg!
        </p>
      </div>
      <div className="flex flex-col justify-center gap-12 mx-0 lg:flex-row md:mx-8 lg:mx-20">
        <div className="mx-0 my-4 min-w-[300px] md:min-w-[440px]">
          <DonationForm />
        </div>
        <div className="flex items-center justify-center">
          <p>eller</p>
        </div>
        <div className="mx-0 md:mx-4 mb-4 min-w-[300px] md:min-w-[440px]">
          {/*<div className="mb-4">
            <p className="font-semibold">Vi tar kontakt med deg!</p>
            <p></p>
          </div>*/}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Doner;

const styles = {};
