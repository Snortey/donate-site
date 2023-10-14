import React, { useState } from "react";
import "./DonationModal.css";
import { IoClose } from "react-icons/io5";
import visa from "../../Assets/logos/visa logo colored.png";
import mastercard from "../../Assets/logos/mastercard logo colored.png";
import vodafone from "../../Assets/logos/vodafone logo.png";
import MTN from "../../Assets/logos/mtnlogo yellow.png";
import apple from "../../Assets/logos/applepay logo.png";

const paymentOptiondata = [
  {
    id: "debitcard",
    actualname: "Debit Card",
    name: "paymentOption",
    valuetype: "debitcard",
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

const DonalModal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputFields, setInputFields] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="Donation_modal">
        <span className="donal-icon" onClick={closeModal}>
          <IoClose className="donal_modal-close" />
        </span>
        <div className="donal_modal-header">
          <h4>
            Donate to fund{" "}
            <span className="foundationGroup">Christmas for Children</span>
          </h4>
          <p>
            This donation is organized by{" "}
            <span className="foundationName">Ashakale Foundation</span>.
          </p>
        </div>
        <form action="" className="money_form">
          <div className="donal_modal-amount">
            <small>Enter amount</small>
            <div className="donal_modal-amount_field">
              <small>GHS</small>
              <input
                type="text"
                placeholder="5.00"
                pattern="\d+\.\d{2}"
                title="Please enter a valid amount with two decimal places (e.g., 5.00)"
                inputMode="numeric"
                step="0.01"
                className="amount-input"
              />
            </div>
          </div>
          <div className="donal_modal-payment">
            <small className="paymentheading">Select payment method</small>
            <div className="payment_radio">
              {paymentOptiondata.map(({ id, actualname, name, valuetype }) => (
                <label key={id} className="custom-radio">
                  <div className="radio-label-container">
                    <input
                      id={id}
                      type="radio"
                      name={name}
                      value={valuetype}
                      checked={selectedOption === valuetype}
                      onChange={handleOptionChange}
                    />
                    <span className="radio-button"></span>
                    {actualname}
                    {selectedOption === valuetype && (
                      <div className="payment-logo">{selectedLogo}</div>
                    )}
                  </div>
                  {/* Conditionally render input fields */}
                  <div className="input-fields">
                    {selectedOption === valuetype && (
                      <div className={valuetype}>
                        {inputFields.map((field, index) => (
                          <div
                            key={index}
                            className={`input-field ${field.placeholder}`}
                          >
                            {field.type === "checkbox" ? (
                              <input type="checkbox" />
                            ) : (
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="custom-input"
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
          <div className="donal_modal-footer">
            <button className="btn btn-primary">Donate now</button>
            <p>
              By continuing, you agree with our <span>terms</span> and{" "}
              <span>privacy policy</span>.
            </p>
          </div>
        </form>
      </div>
    )
  );
};

export default DonalModal;
