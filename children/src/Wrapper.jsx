// Wrapper.jsx
import React from "react";

function Wrapper({ children }) {
  return (
    <div style={styles.wrapper}>
      {children}
    </div>
  );
}

const styles = {
  wrapper: {
    border: "2px solid #007bff",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default Wrapper;
