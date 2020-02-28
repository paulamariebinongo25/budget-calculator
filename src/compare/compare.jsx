import React from "react";
import ExpenseItem from "../item/ExpenseItem";
// import { MdDelete } from "react-icons/md";
const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          {/* <MdDelete className="btn-icon" /> */}
        </button>
      )}
    </>
  );
};

export default ExpenseList;
import React from "react";
// import { MdEdit, MdDelete } from "react-icons/md";
const ExpenseItem = ({
  expense: { id, charge, amount },
  handleDelete,
  handleEdit
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          {/* <MdEdit /> */}
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          {/* <MdDelete /> */}
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
import React, { useState, useEffect } from "react";

import "./App.css";
import ExpenseForm from "./components/form/ExpensesForm";
import ExpenseList from "./components/list/ExpensesList";
import Alert from "./components/message/AlertNotifications";
// import uuid from "uuid/v4";
// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   {
//     id: uuid(),
//     charge: "credit card bill ",
//     amount: 1200
//   }
// ];
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // *********** functionality **************
  //add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // add amount
  const handleAmount = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: new Date().getDate(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        total spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
import React from "react";
// import { MdSend } from "react-icons/md";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
        {/* <MdSend className="btn-icon" /> */}
      </button>
    </form>
  );
};

export default ExpenseForm;
// @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
// :root {
//   --primaryColor: #f15025;
//   --mainWhite: #fff;
//   --mainBlack: #222;
//   --mainGrey: #9e9e9e;
//   --mainRed: #d50000;
//   --mainGreen: #4caf50;
// }
// * {
//   margin: 0;
//   box-sizing: border-box;
// }
// body {
//   background: var(--mainGrey);
//   color: var(--mainBlack);
//   font-family: "Roboto", sans-serif;
// }
// h1 {
//   text-align: center;
//   text-transform: capitalize;
//   margin: 2rem 0;
//   color: var(--mainWhite);
//   letter-spacing: 5px;
// }
// .App {
//   margin: 0 auto;
//   max-width: 1280px;
//   width: 90%;
//   background: var(--mainWhite);
//   padding-bottom: 2rem;
//   border-radius: 2px;
// }
// .form-center {
//   display: flex;
//   padding: 0 1rem;
// }
// .form-group {
//   padding: 1rem 0.75rem;
//   flex: 0 0 50%;
// }
// label {
//   display: block;
//   color: var(--mainGrey);
//   font-size: 1rem;
//   text-transform: capitalize;
// }

// .form-control {
//   background-color: transparent;
//   border: none;
//   border-bottom: 1px solid var(--mainGrey);
//   border-radius: 0;
//   outline: none;
//   height: 3rem;
//   width: 100%;
//   font-size: 16px;
//   margin: 0 0 8px 0;
//   padding: 0;
// }
// .btn {
//   text-decoration: none;
//   color: var(--mainWhite);
//   background-color: var(--primaryColor);
//   text-align: center;
//   letter-spacing: 0.5px;
//   font-size: 14px;
//   outline: 0;
//   border: none;
//   border-radius: 2px;
//   display: block;
//   height: 36px;
//   line-height: 36px;
//   padding: 0 16px;
//   text-transform: uppercase;
//   margin: 0 auto;
//   cursor: pointer;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   display: flex;
//   align-items: center;
// }
// .btn:hover {
//   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
// }
// .btn-icon {
//   margin-left: 0.75rem;
//   font-size: 1.2rem;
// }
// .list {
//   margin: 2rem 0.75rem 0 0.75rem;
//   list-style-type: none;
//   border: none;
//   padding: 0;
// }
// .item {
//   background-color: var(--mainWhite);
//   line-height: 1.5rem;
//   padding: 10px 20px;
//   margin-bottom: 1rem;
//   border: 1px solid #e0e0e0;
//   display: flex;
//   justify-content: space-between;
//   transition: all 0.3s linear;
// }
// .item:hover {
//   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//   transform: scale(1.05);
// }
// .info {
//   flex: 0 0 60%;
//   display: flex;
//   justify-content: space-between;
// }
// .expense {
//   margin-right: 2rem;
//   text-transform: capitalize;
// }
// .amount {
//   font-weight: 300;
//   font-size: 1rem;
//   color: var(--mainWhite);
//   background-color: var(--primaryColor);
//   border-radius: 2px;
//   padding: 1px 3px;
// }
// .clear-btn,
// .edit-btn {
//   background: none;
//   border: none;
//   font-size: 1.2rem;
//   outline: none;
//   cursor: pointer;
// }
// .clear-btn {
//   color: var(--mainRed);
// }
// .edit-btn {
//   color: var(--mainGreen);
// }
// .total {
//   font-weight: 300;
//   color: var(--mainWhite);
//   background-color: var(--primaryColor);
//   border-radius: 2px;
//   padding: 2px 5px;
// }
// .alert {
//   padding: 0.75rem 1.25rem;
//   color: var(--mainWhite);
//   text-align: center;
//   text-transform: capitalize;
//   width: 90%;
//   margin: 2rem auto 0 auto;
//   border-radius: 2px;
//   text-transform: capitalize;
// }
// .alert-danger {
//   background: var(--mainRed);
// }
// .alert-success {
//   background: var(--mainGreen);
// }
// @media screen and (min-width: 601px) {
//   .App,
//   .list,
//   .alert {
//     width: 85%;
//   }

//   .list {
//     margin: 2rem auto 0 auto;
//   }
// }
// @media screen and (min-width: 993px) {
//   .App,
//   .list,
//   .alert {
//     width: 70%;
//   }
//   .list {
//     margin: 2rem auto 0 auto;
//   }
//   .info {
//     flex: 0 0 50%;
//   }
// }
