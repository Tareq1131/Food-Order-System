import React from "react";

import { services } from "../data/Item";
import { useParams } from "react-router-dom";

console.log("hh", services);

export default function DetailsPage() {
  const { id } = useParams();
  console.log("ID from URL:", id);
  const service = services.find((item) => item.id === parseInt(id));

  if (!service) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Service not found
      </div>
    );
  }
  console.log(service);
  const containerStyle = {
    marginTop: "50px",
    padding: "20px",
    // backgroundColor: "#007bff",
    borderRadius: "10px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff",
  };

  const iconStyle = {
    // fontSize: "3rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="my-4" style={iconStyle}>
        {service.icon}
      </div>
      <h2 style={headerStyle}>{service.name}</h2>
      <p style={paragraphStyle}>{service.discription}</p>
    </div>
  );
}
