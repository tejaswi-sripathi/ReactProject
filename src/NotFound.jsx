import React from "react";

function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        backgroundColor: "#fff",
      }}
    >
      {/* Image Section */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          src="/Images/404notFound.webp"
          alt="Not Found"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Text Section */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <h3 style={{ fontSize: "2rem", color: "#333" }}>
          Page Not Found <br /> 404 Error
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
