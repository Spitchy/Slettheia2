import React, { useState } from "react";

export default function contactForm() {
  // States 4 contact form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [orgnr, setOrgnr] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sender");
      const res = await fetch("http://localhost:3000/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          company: company,
          orgnr: orgnr,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      //await fetch("/api/mail", {
      //  method: "POST",
      //  body: JSON.stringify(formData),
      //});

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(name, email, phone, company, orgnr, message);
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="navn"
              className="block mb-2 text-sm font-medium text-gray-900 select-none"
            >
              Navn*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
              placeholder=""
              //required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 select-none"
            >
              Telefonnummer*
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="phone"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
              placeholder=""
              pattern="[0-9]{8}"
              //required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 select-none"
            >
              Firma
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              id="company"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="orgnr"
              className="block mb-2 text-sm font-medium text-gray-900 select-none"
            >
              Oganisasjonsnummer
            </label>
            <input
              type="number"
              value={orgnr}
              onChange={(e) => {
                setOrgnr(e.target.value);
              }}
              id="orgnr"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
              placeholder=""
              pattern="[0-9]{9}"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 select-none"
          >
            Epost-adresse*
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
            placeholder=""
            //required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 select-none"
          >
            Melding
          </label>
          <textarea
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE]"
            placeholder=""
            required
            rows="2"
          />
        </div>
        <div>
          <input
            type="number"
            id="hidden"
            className=" hidden w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#A29BFE] focus:border-[#A29BFE] "
            placeholder=""
            pattern="[7-9]{7}"
          />
        </div>

        {/*
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-700 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-white0 duration-300 transform bg-[#F5F5F5] -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Emne
              </label>
            </div> 
            */}
        <button
          type="submit"
          //disabled={true}
          className="text-white bg-[#A29BFE] hover:bg-[#A05BFE] focus:ring-4 focus:outline-none focus:ring-[#A05BFE] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {buttonText}
        </button>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="my-2 text-sm font-semibold text-green-500">
              Takk! Vi tar kontakt med deg.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Noe gikk galt, vennligst prøv igjen.
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
