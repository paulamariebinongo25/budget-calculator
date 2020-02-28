import React, { useState, useEffect } from "react";

import "./App.css";

import ExpenseForm from "./components/form/ExpensesForm";
import ExpenseList from "./components/list/ExpensesList";
import AlertNotifications from "./components/message/AlertNotifications";

const App = () => {
  const initialExpenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // const handleInputChange = e => {
  //   setInputValue({ ...inputValue, [e.target.id]: e.target.value });
  // };
  const handleChargeInputChange = e => {
    setCharge(e.target.value);
  };

  const handleAmountInputChange = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  const handleClickAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let allExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(allExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: new Date().getTime(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleClickAlert({ type: "success", text: "Item was added!" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleClickAlert({
        type: "danger",
        text: `Don't leave the field empty`
      });
    }
  };

  const handleClickDelete = id => {
    let allExpenses = expenses.filter(item => item.id !== id);
    setExpenses(allExpenses);
    handleClickAlert({ type: "danger", text: "Item was deleted" });
  };

  const clearItems = () => {
    setExpenses([]);
  };

  const handleClickEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  return (
    <div>
      {alert.show && <AlertNotifications type={alert.type} text={alert.text} />}
      <div className="square column">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <ExpenseForm
                handleSubmit={handleSubmit}
                charge={charge}
                amount={amount}
                edit={edit}
                handleChargeInputChange={handleChargeInputChange}
                handleAmountInputChange={handleAmountInputChange}
              />
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <ExpenseList
                expenses={expenses}
                handleClickEdit={handleClickEdit}
                handleClickDelete={handleClickDelete}
                clearItems={clearItems}
              />
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="box">
            <div className="level">
              <div className="level-item">
                <label className="title is-5">Total Expense:</label>
                <label className="footer-text">Php</label>
                {expenses.reduce((old, curr) => {
                  return (old += curr.amount);
                }, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
