import React from "react";

// PUBLIC_INTERFACE
function WardrobePanel({
  wardrobeItems,
  onDragStart,
  onAccessoryClick,
  selectedType,
  section,
}) {
  /**
   * Renders a grid of draggable wardrobe items (clothing/accessories).
   * Highlight currently selected/active items.
   * - onDragStart: drag event handler to initiate drag.
   * - onAccessoryClick: (for accessories, toggle click select/active).
   */
  return (
    <div className="wardrobe-panel">
      <div className="wardrobe-grid">
        {wardrobeItems
          .filter((item) => item.type === section)
          .map((item, idx) => (
            <div
              key={item.id || `${item.label}-${idx}`}
              className={`wardrobe-item${item.selected ? " selected" : ""}${
                selectedType === "accessory" ? " accessory" : ""
              }`}
              draggable={item.draggable}
              onDragStart={(e) => onDragStart(e, item)}
              tabIndex={0}
              aria-label={item.label}
              style={{
                cursor: item.draggable ? "grab" : "pointer",
                outline: item.selected ? "3px solid #F653B2" : "none",
                margin: 6,
                borderRadius: 16,
                padding: 0,
                background:
                  item.selected && section === "accessory"
                    ? "#FFE2F6"
                    : "transparent",
                boxShadow: item.selected
                  ? "0 1px 12px #fbc64755"
                  : "0 1px 8px #fbc64722",
              }}
              onClick={() =>
                section === "accessory" &&
                onAccessoryClick &&
                onAccessoryClick(item)
              }
            >
              <img
                src={item.iconSrc || item.src}
                alt={item.label}
                draggable={false}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  boxShadow: item.selected
                    ? "0 0 12px #fbc64766"
                    : "0 0 3px #ffe1e833",
                  border: item.selected
                    ? "2px solid #F653B2"
                    : "2px solid transparent",
                  background: item.selected
                    ? "#FFD2EF"
                    : "linear-gradient(120deg, #fff8ee 50%, #fbf7fd 100%)",
                  objectFit: "cover",
                  transition: "box-shadow 0.2s, border 0.2s, background 0.25s",
                }}
              />
              <span
                style={{
                  fontSize: "0.89rem",
                  fontWeight: 500,
                  marginTop: 4,
                  display: "block",
                  color: "#C048A1",
                  textShadow: "0 1px 6px #fff8",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WardrobePanel;
