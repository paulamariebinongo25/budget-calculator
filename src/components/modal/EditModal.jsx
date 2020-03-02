import React from "react";

const EditModal = ({
  id,
  setIsEditModalOpen,
  isEditModalOpen,
  handleClickEdit
}) => {
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div className={`modal ${isEditModalOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="columns is-mobile is-tablet is-desktop">
        <div className="modal-card">
          <header className="modal-header">
            <p className="modal-card-title has-text-centered has-text-white">
              Edit Modal
            </p>
          </header>
          <section className="modal-body">
            <div className="field has-text-centered">
              <label className="subtitle is-6 has-text-centered has-text-white">
                Are you sure you want to edit this?
              </label>
            </div>
          </section>
          <footer className="modal-footer">
            <div className="container">
              <div className="level">
                <div className="level-item">
                  <div className="buttons">
                    <div
                      className="button"
                      onClick={() => {
                        handleClickEdit(id);
                        handleCloseEditModal();
                      }}
                    >
                      Yes
                    </div>
                    <div className="button" onClick={handleCloseEditModal}>
                      No
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
