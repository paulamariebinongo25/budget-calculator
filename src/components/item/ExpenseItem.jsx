import React from "react";

const ExpenseItem = ({
  expense: { id, charge, amount },
  handleClickDelete,
  handleClickEdit
}) => {
  return (
    <div className="container">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="list-item">
            <label className="text">{charge}</label>
            <label>P {amount}</label>
          </div>
        </div>

        <div className="level-right">
          <div className="list-item">
            <div className="buttons">
              <button
                className="button is-info"
                onClick={() => handleClickEdit(id)}
              >
                <span className="icons">
                  <i className="fas fa-pen"></i>
                </span>
              </button>
              <button
                className="button is-danger"
                onClick={() => handleClickDelete(id)}
              >
                <span className="icons">
                  <i className="fas fa-trash"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
