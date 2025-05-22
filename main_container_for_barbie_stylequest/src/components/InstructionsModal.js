import React from "react";

// PUBLIC_INTERFACE
function InstructionsModal({ open, onClose }) {
  /**
   * Playful modal-style component to guide kids through the dress-up game.
   * Shows when the game starts, or via Help button.
   */
  if (!open) return null;
  return (
    <div
      className="instructions-modal"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1200,
        background: "rgba(251,170,255,0.21)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="instructions-content"
        style={{
          background:
            "linear-gradient(106deg, #FFF9F1 40%, #FFE4F7 84%, #C2F2FF 100%)",
          borderRadius: 28,
          boxShadow: "0 2px 38px #F653B288, 0 8px 22px #ffddee",
          minWidth: 350,
          maxWidth: 420,
          padding: "32px 32px 26px",
          position: "relative",
        }}
      >
        <button
          className="btn"
          style={{
            position: "absolute",
            right: 18,
            top: 15,
            background: "#fff",
            color: "#F653B2",
            border: "none",
            fontWeight: 700,
            fontSize: 18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            cursor: "pointer",
          }}
          aria-label="Close instructions"
          onClick={onClose}
        >
          ×
        </button>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "cursive",
              fontSize: "2rem",
              color: "#fc92d7",
              marginBottom: 8,
            }}
          >
            How to Play
            <span role="img" aria-label="sparkles" style={{ marginLeft: 7 }}>
              ✨
            </span>
          </div>
          <div style={{ fontSize: "1.11rem", color: "#BE4DC0", margin: "10px 0 17px" }}>
            <strong>1.</strong> Select a scene or background<br />
            <strong>2.</strong> Drag and drop clothing onto Barbie<br />
            <strong>3.</strong> Click or drag to add fun accessories<br />
            <strong>4.</strong> Mix, match, and get creative!<br />
            <br />
            <span role="img" aria-label="dress" style={{ fontSize: 38 }}>
              👗
            </span>
            <span role="img" aria-label="star" style={{ fontSize: 26 }}>
              ✨
            </span>
            <span role="img" aria-label="smile" style={{ fontSize: 25 }}>
              😊
            </span>
          </div>
          <div style={{ color: "#EB64CE", fontWeight: 600 }}>
            Tap <span role="img" aria-label="close">×</span> to begin your StyleQuest!
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsModal;
