import React from 'react';
import './App.css';
import StyleQuestGame from "./StyleQuestGame";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for Barbie StyleQuest: Runs the full interactive dress-up game.
   */
  return (
    <div
      className="app"
      style={{
        background:
          'linear-gradient(135deg, #FFDDEE 0%, #FFE4F7 60%, #C2F2FF 100%)',
        minHeight: '100vh',
        fontFamily: `'Comic Sans MS', 'Inter', 'Roboto', sans-serif`,
      }}
    >
      <nav
        className="navbar"
        style={{
          background: 'linear-gradient(90deg, #FC92D7 0, #FBC647 100%)',
          borderBottom: 'none',
          boxShadow: '0 2px 8px rgba(246,83,178,0.08)',
        }}
      >
        <div className="container" style={{ maxWidth: 1080 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div className="logo" style={{ fontSize: '2rem', fontFamily: 'cursive' }}>
              <span
                className="logo-symbol"
                style={{
                  color: '#F653B2',
                  fontSize: '2.8rem',
                  marginRight: 10,
                  textShadow: '0 1px 8px #fff8',
                }}
                aria-label="Barbie logo"
              >
                <span role="img" aria-label="sparkle">✨</span>
              </span>
              Barbie <span style={{ color: '#4169E1', margin: '0 0.3em' }}>Style</span>
              <span style={{ color: '#F653B2' }}>Quest</span>
            </div>
            <button
              className="btn"
              style={{
                background: 'linear-gradient(90deg, #F653B2 60%, #FBC647 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.08rem',
                borderRadius: 28,
                padding: '12px 30px',
                boxShadow: '0 2px 6px #FBC64780',
                letterSpacing: 1.5,
                border: '2px solid #fff3',
                transition: 'background 0.2s',
              }}
              tabIndex={0}
            >
              Dress Up!
            </button>
          </div>
        </div>
      </nav>
      <main>
        <StyleQuestGame />
      </main>
    </div>
  );
}

export default App;