const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>User Details</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Salary:</strong> ${user.salary}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;