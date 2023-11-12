import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentOrganization.css";
import visa from "../../Assets/logos/visa logo colored.png";
import mastercard from "../../Assets/logos/mastercard logo colored.png";
import vodafone from "../../Assets/logos/vodafone logo.png";
import MTN from "../../Assets/logos/mtnlogo yellow.png";
import apple from "../../Assets/logos/applepay logo.png";

const paymentOptiondata = [
  {
    id: "debitcards",
    actualname: "Debit Card",
    name: "paymentOption",
    valuetype: "debitcards",
    inputFields: [
      { placeholder: "Card Number", type: "text" },
      { placeholder: "MM /YY", type: "text" },
      { placeholder: "CVV", type: "text" },
      { placeholder: "Cardholder Name", type: "text" },
    ],
    logo: (
      <>
        <img src={mastercard} alt="Mastercard Logo" />
        <img src={visa} alt="Visa Logo" />
      </>
    ),
  },
  {
    id: "mobilemoney",
    actualname: "Mobile Money",
    name: "paymentOption",
    valuetype: "mobilemoney",
    inputFields: [
      { placeholder: "Phone Number", type: "text" },
      { placeholder: "Name", type: "text" },
      { placeholder: "Provider", type: "text" },
    ],
    logo: (
      <>
        <img src={vodafone} className="voda" alt="Vodafone Logo" />
        <img src={MTN} className="mtn" alt="MTN Logo" />
      </>
    ),
  },
  {
    id: "applepay",
    actualname: "Apple Pay",
    name: "paymentOption",
    valuetype: "applepay",
    inputFields: [
      { placeholder: "Apple ID", type: "text" },
      { placeholder: "Authentication Code", type: "password" },
      { placeholder: "Device Name", type: "text" },
      //   { placeholder: "Face ID/Touch ID", type: "checkbox" },
    ],
    logo: <img src={apple} className="applepay" alt="Apple Pay Logo" />,
  },
];

const PaymentOrganization = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputFields, setInputFields] = useState([]);
  const [selectedLogo, setSelectedLogo] = useState(null);

  // Function to handle changes in the selected payment option
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Find the input fields for the selected payment option
    const selectedOptionData = paymentOptiondata.find(
      (option) => option.valuetype === selectedValue
    );
    if (selectedOptionData) {
      setInputFields(selectedOptionData.inputFields);
      setSelectedLogo(selectedOptionData.logo);
    } else {
      setInputFields([]); // Reset input fields if no matching option is found
      setSelectedLogo(null);
    }

    // Remove all class names from input fields
    const inputFieldDivs = document.querySelectorAll(".input-field");
    inputFieldDivs.forEach((inputFieldDiv) => {
      inputFieldDiv.classList.remove("active");
    });

    // Add the appropriate class name to the selected input fields
    const selectedInputFields = document.querySelectorAll(
      `.input-field.${selectedValue}`
    );
    selectedInputFields.forEach((inputField) => {
      inputField.classList.add("active");
    });
  };
  return (
    <section className="PaymentOrganizations">
      <div className="PaymentOrganizations-left">
        <h5>Almost there</h5>
        <h2>Set your organization’s payment account</h2>
      </div>

      <div className="PaymentOrganizations-right">
        <form
          action=""
          className="PaymentOrganizations_form"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="PaymentOrganizations-select-Payment">
            <h3>Select your organizations mode of receiving payment</h3>
            <div
              className="PaymentOrganizations-payment_radio"
              onClick={(event) => event.stopPropagation()}
            >
              {paymentOptiondata.map(({ id, actualname, name, valuetype }) => (
                <label key={id} className="PaymentOrganizations-custom-radio">
                  <div className="PaymentOrganizations-radio-label-container">
                    <input
                      id={id}
                      type="radio"
                      name={name}
                      onClick={(event) => event.stopPropagation()}
                      value={valuetype}
                      checked={selectedOption === valuetype}
                      onChange={handleOptionChange}
                    />
                    <span className="PaymentOrganizations-radio-button"></span>
                    {actualname}
                    {selectedOption === valuetype && (
                      <div className="PaymentOrganizations-payment-logo">
                        {selectedLogo}
                      </div>
                    )}
                  </div>
                  {/* Conditionally render input fields */}
                  <div className="PaymentOrganizations-input-fields">
                    {selectedOption === valuetype && (
                      <div className={valuetype}>
                        {inputFields.map((field, index) => (
                          <div
                            key={index}
                            className={`PaymentOrganizations-input-field ${field.placeholder}`}
                          >
                            {field.type === "checkbox" ? (
                              <input type="checkbox" />
                            ) : (
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="PaymentOrganizations-custom-input"
                                onClick={(event) => event.stopPropagation()}
                                onKeyDown={(event) => {
                                  if (
                                    (field.placeholder === "Card Number" ||
                                      field.placeholder === "CVV") &&
                                    !/^[0-9]$/.test(event.key) &&
                                    event.key !== "Backspace"
                                  ) {
                                    event.preventDefault();
                                  }

                                  if (
                                    field.placeholder === "Phone Number" &&
                                    event.key !== "+" && // Allow "+" character
                                    !/^[0-9]$/.test(event.key) &&
                                    event.key !== "Backspace"
                                  ) {
                                    event.preventDefault();
                                  }

                                  // Limit the length to 3 for CVV
                                  if (
                                    field.placeholder === "CVV" &&
                                    event.target.value.length >= 3 &&
                                    event.key !== "Backspace"
                                  ) {
                                    event.preventDefault();
                                  }

                                  // Limit the length to 16 for Card Number
                                  if (
                                    field.placeholder === "Card Number" &&
                                    event.target.value.length >= 16 &&
                                    event.key !== "Backspace"
                                  ) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="PaymentOrganizations-button">
            <p>
              By clicking on complete, you agree to our{" "}
              <span>Terms and Conditions</span> and{" "}
              <span>Privacy Policies</span> .
            </p>
            <Link to={"/"} className="btn btn-primary">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentOrganization;
