import React from "react";

const ExpensesForm = ({
  charge,
  amount,
  handleChargeInputChange,
  handleAmountInputChange,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container is-fluid">
        <div className="columns">
          <div className="level">
            <div className="column">
              <div className="level-left">
                <div className="level-item">
                  <div className="field">
                    <div className="control">
                      <label className="label">Item</label>
                      <input
                        className="input-field"
                        type="text"
                        id="charge"
                        name="charge"
                        value={charge}
                        onChange={handleChargeInputChange}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-item"></div>
            </div>
            <div className="column">
              <div className="level-right">
                <div className="level-item">
                  <div className="field">
                    <label className="label">Amount</label>
                    <input
                      className="input-field"
                      type="number"
                      id="amount"
                      name="amount"
                      value={amount}
                      onChange={handleAmountInputChange}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container">
            <div className="level">
              <button
                className="button is-success is-rounded is-fullwidth"
                type="submit"
              >
                {edit ? "Edit" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;
