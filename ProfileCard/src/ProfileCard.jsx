function ProfileCard({ name, role }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "200px",
      textAlign: "center",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
