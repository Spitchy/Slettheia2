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
      <div className="mx-auto flex flex-col justify-center items-center mt-8 mb-12">
        <p className="my-2 font-semibold text-xl md:text-4xl">
          Støtt saken med Vipps!
        </p>
        <p className="text-sm md:text-lg my-2 text-center">
          Firma? Større sum? Legg igjen din info under så kontakter vi deg!
        </p>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row mx-0 md:mx-8 lg:mx-20 justify-center">
        <div className="mx-0 my-4 min-w-[300px] md:min-w-[440px]">
          <DonationForm />
        </div>
        <div className="flex justify-center items-center">
          <p>eller</p>
        </div>
        <div className="mx-0 md:mx-4 my-4 min-w-[300px] md:min-w-[440px]">
          <div className="mb-4">
            <p className="font-semibold">Vi tar kontakt med deg!</p>
            <p></p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Doner;

const styles = {};
