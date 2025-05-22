import React from "react";

// PUBLIC_INTERFACE
function BarbieAvatar({ clothing, accessories, background, style }) {
  /**
   * Renders the Barbie avatar composed of base, clothing, and accessories.
   * Accepts background and style customizations for UI positioning.
   */
  return (
    <div
      className="barbie-avatar"
      style={{
        width: 260,
        height: 430,
        position: "relative",
        margin: "0 auto",
        boxShadow: "0 4px 18px #fdbce830, 0 1px 12px #aba9fa12",
        borderRadius: 32,
        overflow: "hidden",
        background: background?.color || "#FBF2FE",
        ...style,
      }}
      aria-label="Barbie avatar preview"
    >
      {/* Barbie Base (head + body) */}
      <img
        src="https://raw.githubusercontent.com/barbie-assets/barbie-base-silhouette/main/barbie-base-1.png"
        alt="Barbie base"
        draggable={false}
        style={{
          position: "absolute",
          top: 36,
          left: 45,
          width: 170,
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      {/* Clothing Overlay */}
      {clothing.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={`Clothing ${item.label}`}
          draggable={false}
          style={{
            ...item.avatarStyle,
            position: "absolute",
            top: 36,
            left: 45,
            width: 170,
            zIndex: 2 + idx,
            pointerEvents: "none",
            userSelect: "none",
            filter: item.selected ? undefined : "grayscale(60%) blur(1px)",
            opacity: item.selected ? 1 : 0.6,
            transition: "filter 0.3s, opacity 0.3s"
          }}
        />
      ))}
      {/* Accessories Overlay */}
      {accessories.map((item, idx) =>
        item.selected ? (
          <img
            key={idx}
            src={item.src}
            alt={`Accessory ${item.label}`}
            draggable={false}
            style={{
              ...item.avatarStyle,
              position: "absolute",
              top: 36,
              left: 45,
              width: 170,
              zIndex: 20 + idx,
              pointerEvents: "none",
              userSelect: "none",
              transition: "filter 0.3s, opacity 0.3s"
            }}
          />
        ) : null
      )}
      {/* Additional avatar decorations or background */}
      {background?.img && (
        <img
          src={background.img}
          alt="Background"
          draggable={false}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}

export default BarbieAvatar;
