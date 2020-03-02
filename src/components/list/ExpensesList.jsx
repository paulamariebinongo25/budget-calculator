import React from "react";

import ExpenseItem from "../item/ExpenseItem";

const ExpenseList = ({
  expenses,
  handleClickDelete,
  handleClickEdit,
  clearItems
}) => {
  return (
    <>
      <div className="level is-block">
        <div className="level is-mobile is-tablet is-desktop">
          <div className="level-item">
            <div className="column">
              {expenses.map(expense => {
                return (
                  <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    handleClickEdit={handleClickEdit}
                    handleClickDelete={handleClickDelete}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {expenses.length > 0 && (
          <div className="column">
            <button className="button is-black is-fullwidth" onClick={clearItems}>
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
