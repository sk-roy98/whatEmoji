import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😍": "Heart Popping From Eyes",
  "😁": "Super Happy",
  "🤣": "Rolling and Laughing",
  "🥰": "Feeling Loved",
  "😏": "Smirking Face",
  "😫": "tired",
  "😋": "Yummy",
  "🥱": "Yawning Face",
  "🤗": "Hugging Face",
  "🤦‍♂️": "Man Face Slapping",
  "💩": "Pile Of Poop",
  "🎃": "Halloween Pumpkin",
  "🍑": "Peach",
  "👺": "Goblin",
  "🖖": "Vulcan Salute",
  "❤": "Heart",
  "☮": "Peace Symbol",
  "🎉": "Party Poppers"
};
var emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoj) {
    var meaning = emojiDictionary[emoj];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "crimson",
          color: "white",
          padding: "0.1rem",
          marginBottom: "2rem"
        }}
      >
        <h1>Emoji Interpreter</h1>
      </nav>
      <input
        placeholder="enter emoji here.. "
        style={{ padding: "1rem", width: "155px", fontSize: "1.2rem" }}
        onChange={inputHandler}
      />
      <h3 style={{ margin: "1rem" }}> -{meaning}- </h3>
      <div className="container">
        <h2>Emojis We Know</h2>
        <div className="emojis">
          {emojiKeys.map((emoji) => {
            return (
              <span
                style={{
                  display: "inline-block",
                  padding: "0.7rem",
                  fontSize: "1.7rem",
                  width: "50px",
                  border: "2px outset ",
                  cursor: "pointer"
                }}
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer style={{ position: "fixed", bottom: "10px" }}>©skroy</footer>
    </div>
  );
}
