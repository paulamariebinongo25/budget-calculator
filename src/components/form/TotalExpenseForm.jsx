import React from "react";

const TotalExpenseForm = ({ expenses, amount }) => {
  return (
    <form className="columns is-mobile is- desktop is-centered">
      <div className="box">
        <div className="level">
          <div className="level-item">
            <label className="title is-5">Total Expense:</label>
            <label className="footer-text">
              Php
              {expenses.reduce((acc, curr) => {
                return (acc += curr), amount;
              }, 0)}
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TotalExpenseForm;
