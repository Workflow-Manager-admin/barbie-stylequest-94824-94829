import React from "react";

// PUBLIC_INTERFACE
function SceneSelector({ scenes, onSelectScene, selectedScene }) {
  /**
   * Renders a horizontal carousel of scene/background options for the avatar.
   */
  return (
    <div
      className="scene-selector"
      style={{
        display: "flex",
        gap: 18,
        margin: "24px 0",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {scenes.map((scene) => (
        <button
          key={scene.id || scene.label}
          className="scene-btn"
          aria-label={`Choose scene: ${scene.label}`}
          onClick={() => onSelectScene(scene)}
          style={{
            border: selectedScene?.id === scene.id ? "2px solid #F653B2" : "2px solid #fff3",
            padding: 0,
            background: "#fff7 38%",
            boxShadow: selectedScene?.id === scene.id ? "0 0 18px #fbc64769" : "0 1px 8px #FFF2",
            borderRadius: 16,
            outline: "none",
            cursor: "pointer",
            transition: "box-shadow 0.18s, border 0.15s"
          }}
        >
          <img
            src={scene.thumbnail || scene.img}
            alt={scene.label}
            style={{
              width: 64,
              height: 42,
              borderRadius: 14,
              display: "block",
              objectFit: "cover",
              opacity: selectedScene?.id === scene.id ? 1 : 0.77,
            }}
          />
          <div
            style={{
              fontSize: "0.83rem",
              color: "#9c46d8",
              background: selectedScene?.id === scene.id ? "#FFECF2" : "none",
              fontWeight: 600,
              borderRadius: 9,
              padding: "2px 7px",
              marginTop: 2,
            }}
          >
            {scene.label}
          </div>
        </button>
      ))}
    </div>
  );
}

export default SceneSelector;
