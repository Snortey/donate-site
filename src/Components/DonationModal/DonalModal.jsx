import React, { useState } from "react";
import "./DonationModal.css";

const paymentOptiondata = [
  {
    id: "debitcard",
    actualname: "Debit Card",
    name: "paymentOption",
    valuetype: "debitcard",
  },
  {
    id: "mobilemoney",
    actualname: "Mobile Money",
    name: "paymentOption",
    valuetype: "mobilemoney",
  },
  {
    id: "applepay",
    actualname: "Apple Pay",
    name: "paymentOption",
    valuetype: "applepay",
  },
];

const DonalModal = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle changes in the selected payment option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Donation_modal">
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
  );
};

export default DonalModal;
