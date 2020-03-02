import React from "react";

const DeleteModal = ({
  id,
  setIsDeleteModalOpen,
  isDeleteModalOpen,
  handleClickDelete
}) => {
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <div className={`modal ${isDeleteModalOpen ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="columns is-mobile is-tablet is-desktop is-centered">
          <div className="modal-card">
            <div className="modal-header">
              <div className="modal-card-title has-text-white has-text-centered">
                Delete Budget Expense
              </div>
              <button
                className="modal-close is-large"
                onClick={handleCloseDeleteModal}
              ></button>
            </div>
            <section className="modal-body has-text-white has-text-centered">
              Are you sure you want to delete this?
            </section>
            <div className="modal-footer">
              <div className="column">
                <div className="level">
                  <div className="level-item">
                    <button
                      className="button is-white has-text-black"
                      onClick={() => handleClickDelete(id)}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
