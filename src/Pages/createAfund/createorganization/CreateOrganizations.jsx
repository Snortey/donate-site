import React, { useState } from "react";
import "./CreateOrganizations.css";
import { Link } from "react-router-dom";

const CreateOrganizations = () => {
  const [validAmount, setValidAmount] = useState("");

  return (
    <section className="create_organizations">
      <div className="create_organizations-left">
        <h5>Set your Goal</h5>
        <h2>How much would you like to raise?</h2>
      </div>

      <div className="create_organizations-right">
        <form
          action=""
          className="create_organizations_form"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="create_organizations-set-Goals">
            <h3>Set your goal</h3>
            <div className="create_organizations-amount_field">
              <small>GHS</small>
              <input
                type="text"
                placeholder="5.00"
                value={validAmount}
                onClick={(event) => event.stopPropagation()}
                onInput={(event) => {
                  const inputValue = event.target.value;
                  // Use a regular expression to keep only numeric values and a single period
                  const numericInput = inputValue.replace(/[^0-9.]/g, "");
                  setValidAmount(numericInput);
                }}
                className="create_organizations-amount-input"
              />
            </div>
            <p>
              Please note that transaction fees, taxes and all other charges are
              deducted from each donation.
            </p>
          </div>

          <div className="create_organizations-button">
            <Link to={"/uploadpic"} className="btn btn-primary">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateOrganizations;
