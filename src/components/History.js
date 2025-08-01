import React from "react";
import "./History.css";

function History({ history }) {
  return (
    <div className="container">
      <h2>Uploaded Image History</h2>
      {history.length === 0 ? (
        <p>No uploads yet.</p>
      ) : (
        <div className="history-grid">
          {history.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.imageUrl} alt="Uploaded" />
              <div className="info">
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Status:</strong> 
                  <span className={`status ${item.status.toLowerCase()}`}> {item.status}</span>
                </p>
                <p><strong>Time:</strong> {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
