import React, { useState } from "react";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";

const ExpenseItem = ({
  expense: { id, charge, amount },
  handleClickDelete,
  handleClickEdit
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

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
                // onClick={() => handleClickEdit(id)}
                onClick={handleOpenEditModal}
              >
                <span className="icons">
                  <i className="fas fa-pen"></i>
                </span>
              </button>
              <button
                className="button is-danger"
                // onClick={() => handleClickDelete(id)}
                onClick={handleOpenDeleteModal}
              >
                <span className="icons">
                  <i className="fas fa-trash"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        handleClickDelete={handleClickDelete}
        id={id}
      />
      <EditModal
        setIsEditModalOpen={setIsEditModalOpen}
        isEditModalOpen={isEditModalOpen}
        handleClickEdit={handleClickEdit}
        id={id}
      />
    </div>
  );
};

export default ExpenseItem;
