import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState({
    Age: "",
    genre_era: "",
    author_actor: "",
    character: "",
    environment: "",
  });

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Input value:", input);
    }
  };
  return (
    <div>
      <div className="heading">
        <h1>AI Curated ReadWatch</h1>
        <p>
          Our AI-powered tool will guide you in choosing the perfect BOOKS/
          MOVIES when you're unsure about what to READ/WATCH. Simply fill out
          the form below with information about your Curiosity, and we'll
          suggest a curated list of BOOKS/MOVIES!
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form_details">
          <p>
            Age Group:
            <input
              type="number"
              name="Age"
              className="input"
              placeholder="enter your age"
              value={input.Age}
              onKeyDown={handleEnterKey}
              onChange={(event) => setInput(event.target.value)}
            />
          </p>
          <p>
            Genre Prefrences/Era Prefrences:
            <input
              type="text"
              name="genre_era"
              className="input"
              placeholder="enter your genre/era preference"
              value={input.genre_era}
              onKeyDown={handleEnterKey}
              onChange={(event) => setInput(event.target.value)}
            />
          </p>
          <p>
            Favourite Author/Actor:
            <input
              type="text"
              name="author_actor"
              className="input"
              placeholder=" enter your favourite author/actor"
              value={input.author_actor}
              onKeyDown={handleEnterKey}
              onChange={(event) => setInput(event.target.value)}
            />
          </p>
          <p>
            Character preferences:
            <input
              type="text"
              name="character"
              className="input"
              placeholder=" enter your character preference"
              value={input.character}
              onKeyDown={handleEnterKey}
              onChange={(event) => setInput(event.target.value)}
            />
          </p>
          <p>
            Reading/Watching Environment:
            <input
              type="text"
              name="environment"
              className="input"
              placeholder="enter environment you like to read/watch"
              value={input.environment}
              onKeyDown={handleEnterKey}
              onChange={(event) => setInput(event.target.value)}
            />
          </p>
        </div>
        <div>
          <button>BOOKS/MOVIES Suggestions</button>
        </div>
      </form>
    </div>
  );
}

export default App;