import React, { useState, useRef } from "react";
import BarbieAvatar from "./components/BarbieAvatar";
import WardrobePanel from "./components/WardrobePanel";
import SceneSelector from "./components/SceneSelector";
import InstructionsModal from "./components/InstructionsModal";

/**
 * Avatar, wardrobe, clothes, accessories, backgrounds for Barbie StyleQuest.
 * Assets are public URLs; in a real app, use in-project assets!
 */
const defaultScenes = [
  {
    id: "beach",
    label: "Sunny Beach",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=350&q=80",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=120&q=20",
    color: "#FFF7FC",
  },
  {
    id: "city",
    label: "Vibrant City",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=350&q=80",
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=120&q=20",
    color: "#E7FAFF",
  },
  {
    id: "garden",
    label: "Magic Garden",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a97b8?auto=format&fit=cover&w=370&q=80",
    thumbnail: "https://images.unsplash.com/photo-1465101178521-c1a9136a97b8?auto=format&fit=cover&w=120&q=20",
    color: "#E0F8EE",
  },
];

const wardrobeClothes = [
  {
    id: "dress-pink",
    label: "Pink Dress",
    type: "clothing",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-dress-pink/main/dress-pink.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-dress-pink/main/dress-pink-icon.png",
    avatarStyle: {},
    draggable: true,
    selected: true,
  },
  {
    id: "dress-blue",
    label: "Sky Dress",
    type: "clothing",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-dress-blue/main/dress-blue.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-dress-blue/main/dress-blue-icon.png",
    avatarStyle: {},
    draggable: true,
    selected: false,
  },
  {
    id: "top-jeans",
    label: "Denim Fun",
    type: "clothing",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-top-jean/main/top-jean.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-top-jean/main/top-jean-icon.png",
    avatarStyle: {},
    draggable: true,
    selected: false,
  },
];

const wardrobeAccessories = [
  {
    id: "necklace-star",
    label: "Star Necklace",
    type: "accessory",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-necklace-star/main/necklace-star.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-necklace-star/main/necklace-star-icon.png",
    avatarStyle: { left: 71, top: 112, width: 48 },
    draggable: false,
    selected: false,
  },
  {
    id: "bag-pink",
    label: "Pink Bag",
    type: "accessory",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-bag-pink/main/bag-pink.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-bag-pink/main/bag-pink-icon.png",
    avatarStyle: { left: 120, top: 220, width: 46 },
    draggable: false,
    selected: false,
  },
  {
    id: "sunglasses",
    label: "Sunglasses",
    type: "accessory",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-sunglasses/main/sunglasses.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-sunglasses/main/sunglasses-icon.png",
    avatarStyle: { left: 80, top: 58, width: 54 },
    draggable: false,
    selected: false,
  },
  {
    id: "shoes",
    label: "Shoes",
    type: "accessory",
    src: "https://raw.githubusercontent.com/barbie-assets/barbie-shoes/main/shoes.png",
    iconSrc: "https://raw.githubusercontent.com/barbie-assets/barbie-shoes/main/shoes-icon.png",
    avatarStyle: { left: 90, top: 355, width: 76 },
    draggable: false,
    selected: false,
  },
];


// PUBLIC_INTERFACE
function StyleQuestGame() {
  /**
   * Main Barbie dress-up game logic and UI for children.
   */
  const [scenes, setScenes] = useState(defaultScenes);
  const [selectedScene, setSelectedScene] = useState(defaultScenes[0]);
  const [clothes, setClothes] = useState([...wardrobeClothes]);
  const [accessories, setAccessories] = useState([...wardrobeAccessories]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [activeSection, setActiveSection] = useState("clothing"); // "clothing"|"accessory"
  const dropAreaRef = useRef(null);

  // Drag and drop handlers for clothing
  function onDragStart(e, item) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
    setActiveSection(item.type);
  }
  function onDropClothing(e) {
    e.preventDefault();
    let data;
    try {
      data = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    if (data.type === "clothing") {
      setClothes((clothes) =>
        clothes.map((c) =>
          c.id === data.id
            ? { ...c, selected: true }
            : { ...c, selected: false }
        )
      );
    }
  }
  function onDragOverClothing(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  // Accessory select/click (toggle ON/OFF, max 3 at once)
  function handleAccessoryClick(item) {
    setAccessories((accs) => {
      // Max 3 selected
      const numSelected = accs.filter((a) => a.selected).length;
      return accs.map((a) =>
        a.id === item.id
          ? { ...a, selected: !a.selected && numSelected < 3 }
          : a
      );
    });
  }
  // Show section (clothes or accessories)
  function switchWardrobe(section) {
    setActiveSection(section);
  }

  function handleSceneSelect(scene) {
    setSelectedScene(scene);
  }

  // "Reset" or clean-up could be added for extra fun/learning

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#FDEDEE 0%,#cce9ff 100%)",
        borderRadius: 26,
        boxShadow: "0 2px 16px #ffddef55, 0 1px 18px #dfebff33",
        maxWidth: 1120,
        margin: "32px auto 0",
        padding: "24px 15px 60px",
      }}
    >
      <InstructionsModal
        open={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Wardrobe area */}
        <div>
          <div
            style={{
              fontFamily: "cursive",
              color: "#F653B2",
              fontWeight: 900,
              fontSize: "1.2rem",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Dress-Up Wardrobe
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 8,
              justifyContent: "center",
            }}
          >
            <button
              className={`btn${activeSection === "clothing" ? " btn-large" : ""}`}
              style={{
                background:
                  activeSection === "clothing"
                    ? "linear-gradient(90deg,#FBC647,#F653B2)"
                    : "#FDBDF1",
                color: activeSection === "clothing" ? "#fff" : "#fc92d7",
                borderRadius: 18,
                fontWeight: 600,
                border: "none",
                fontSize: activeSection === "clothing" ? "1.01rem" : "0.97rem",
                boxShadow:
                  activeSection === "clothing"
                    ? "0 2px 10px #fbc647aa"
                    : "none",
                cursor: "pointer",
              }}
              onClick={() => switchWardrobe("clothing")}
              aria-label="Show clothing"
            >
              Clothes
            </button>
            <button
              className={`btn${activeSection === "accessory" ? " btn-large" : ""}`}
              style={{
                background:
                  activeSection === "accessory"
                    ? "linear-gradient(90deg,#F653B2,#FBC647)"
                    : "#FDBDF1",
                color: activeSection === "accessory" ? "#fff" : "#fc92d7",
                borderRadius: 18,
                fontWeight: 600,
                border: "none",
                fontSize: activeSection === "accessory" ? "1.01rem" : "0.97rem",
                boxShadow:
                  activeSection === "accessory"
                    ? "0 2px 10px #fbc647aa"
                    : "none",
                cursor: "pointer",
              }}
              onClick={() => switchWardrobe("accessory")}
              aria-label="Show accessories"
            >
              Accessories
            </button>
          </div>
          <WardrobePanel
            wardrobeItems={[
              ...clothes.map((c) => ({ ...c, draggable: true })),
              ...accessories,
            ]}
            onDragStart={onDragStart}
            onAccessoryClick={handleAccessoryClick}
            section={activeSection}
            selectedType={activeSection}
          />
        </div>
        {/* Avatar and drop area */}
        <div
          style={{
            minWidth: 320,
            minHeight: 480,
            background: "#F3E9FF",
            borderRadius: 24,
            boxShadow: "0 2px 8px #fbc64733",
            padding: "16px 10px 10px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 10, fontWeight: 600, color: "#f653b2" }}>
            Your Barbie
          </div>
          <div
            ref={dropAreaRef}
            onDrop={onDropClothing}
            onDragOver={onDragOverClothing}
            style={{
              width: 260,
              height: 430,
              margin: "0 auto",
              border:
                "3px dashed #FBC647" +
                (activeSection === "clothing" ? "" : "22"),
              background: "#fff5fa",
              borderRadius: 30,
              position: "relative",
            }}
            aria-label="Dress up area"
          >
            <BarbieAvatar
              clothing={clothes.filter((c) => c.selected)}
              accessories={accessories}
              background={selectedScene}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 87px)",
                bottom: 18,
                fontSize: "1.01rem",
                color: "#8C57DE",
                fontWeight: 500,
                textShadow: "0 0 2px #fff7ee",
              }}
            >
              Drag a dress or top onto Barbie!
            </div>
          </div>
          <SceneSelector
            scenes={scenes}
            onSelectScene={handleSceneSelect}
            selectedScene={selectedScene}
          />
          <button
            className="btn"
            style={{
              background: "#fc92d7",
              color: "#fff",
              marginTop: 18,
              borderRadius: 18,
              fontWeight: 700,
              boxShadow: "0 1px 10px #ffc64033",
              border: "none",
              padding: "7px 18px",
              fontSize: "1rem",
            }}
            onClick={() => setShowInstructions(true)}
          >
            <span role="img" aria-label="info">
              ℹ️
            </span>{" "}
            How to Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default StyleQuestGame;
