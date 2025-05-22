import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for Barbie StyleQuest: Vivid, playful, and welcoming for kids.
   * Features lively branding, cheerful Barbie theme, and signals interactive dress-up fun.
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
        <div
          className="container"
          style={{ maxWidth: 1080, marginTop: 40, paddingBottom: 64 }}
        >
          <div
            className="hero"
            style={{
              paddingTop: 130,
              paddingBottom: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 32,
            }}
          >
            <div
              className="subtitle"
              style={{
                color: '#F653B2',
                fontWeight: 700,
                fontSize: '1.35rem',
                letterSpacing: 1.2,
                textShadow: '0 1px 8px #ffbbee',
                marginBottom: 0,
              }}
            >
              Welcome to a World of Dress-Up Fun!
            </div>
            <h1
              className="title"
              style={{
                fontSize: '3.3rem',
                fontWeight: 900,
                color: '#FC92D7',
                fontFamily: "'Pacifico', cursive, sans-serif",
                margin: '12px 0 10px',
                letterSpacing: 2,
                lineHeight: 1.06,
                textShadow: '0 2px 16px #fbc64788',
              }}
            >
              Barbie StyleQuest
            </h1>
            <div
              className="description"
              style={{
                fontSize: '1.25rem',
                color: '#AB2CCC',
                background: 'rgba(255,255,255,0.70)',
                padding: '18px 30px',
                borderRadius: 20,
                maxWidth: 540,
                boxShadow: '0 6px 22px #FFF3F8',
                fontWeight: 600,
              }}
            >
              Explore fashion, get creative, and express yourself! Drag and drop outfits, mix &amp; match styles, and complete fun Barbie dress-up quests. Ready for a sparkling adventure?
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  animation: 'bounce 1s infinite alternate',
                }}
                role="img"
                aria-label="dress"
              >
                👗
              </span>
              <span role="img" aria-label="stars" style={{ marginLeft: 3 }}>
                ✨
              </span>
            </div>
            <button
              className="btn btn-large"
              style={{
                background: 'linear-gradient(90deg, #FBC647 10%, #F653B2 100%)',
                color: '#fff',
                borderRadius: 26,
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: 1.2,
                marginTop: 12,
                padding: '16px 50px',
                boxShadow: '0 4px 10px #fbc64730',
                border: 'none',
              }}
            >
              Start Your Quest!
            </button>
            <div
              style={{
                display: 'flex',
                gap: 22,
                marginTop: '32px',
              }}
            >
              <span role="img" aria-label="Barbie" style={{ fontSize: 42 }}>👱‍♀️</span>
              <span role="img" aria-label="dress" style={{ fontSize: 46 }}>👗</span>
              <span role="img" aria-label="sparkle" style={{ fontSize: 38 }}>✨</span>
              <span role="img" aria-label="shoes" style={{ fontSize: 36 }}>👠</span>
              <span role="img" aria-label="rainbow" style={{ fontSize: 36 }}>🌈</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;