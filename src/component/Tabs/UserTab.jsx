const UserTab = ({ icon, title, content }) => {
  return (
    <div className="user-tabs">
      <div>{icon}</div>
      <b>{title}</b>
      <p>{content}</p>
    </div>
  );
};

export default UserTab;
