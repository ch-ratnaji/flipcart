import "./RemoveItemModal.css";

const RemoveItemModal = ({ open, onClose, onDelete }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Remove Item</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to remove this item?</p>
        </div>
        <div className="modal-actions">
          <button className="remove-button" onClick={onDelete}>
            REMOVE
          </button>
          <button className="cancel-button" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveItemModal;
