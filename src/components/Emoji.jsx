import React, { useState, useEffect } from "react";
import axios from "axios";

const EmojiSearch = () => {
  const [emojiData, setEmojiData] = useState([]); // API se data
  const [searchTerm, setSearchTerm] = useState(""); // User input
  const [searchedEmoji, setSearchedEmoji] = useState([]); // Filtered result
  const [selectedEmojis, setSelectedEmojis] = useState([]); //

  // API se emoji data fetch karna
  useEffect(() => {
    axios
      .get("https://unpkg.com/unicode-emoji-json@0.8.0/data-by-emoji.json")
      .then((response) => {
        const emojiArray = Object.keys(response.data).map((key) => ({
          emoji: key,
          ...response.data[key],
        }));
        setEmojiData(emojiArray);
      })
      .catch((error) => console.error("Error fetching emoji data:", error));
  }, []);

  // Search logic
  useEffect(() => {
    if (searchTerm === "") {
      setSearchedEmoji([]);
      return;
    }

    const filteredEmojis = emojiData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchedEmoji(filteredEmojis);
  }, [searchTerm, emojiData]);

 
  const handleEmojiSelect = (emoji) => {
    setSelectedEmojis((prev) => [...prev, emoji]); //  Purane emojis delete nahi honge
  };

  return (
    <div className="search-container" style={{ textAlign: "center" }}>
      <h2>Emoji Search 🔍</h2>

     
      <input
        type="text"
        placeholder="Search Emoji..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="inp"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

     
      <div
        className="emoji-box"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {searchedEmoji.length > 0 ? (
          searchedEmoji.map((emoji) => (
            <span
              key={emoji.slug}
              style={{
                fontSize: "30px",
                margin: "5px",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                background: "#f5f5f5",
              }}
              onClick={() => handleEmojiSelect(emoji.emoji)} // Click karne se store ho jayega
            >
              {emoji.emoji}
            </span>
          ))
        ) : (
          <p>No emoji found</p>
        )}
      </div>

      {/*  Selected Emojis Box */}
      {selectedEmojis.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
            background: "#e3f2fd",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            minHeight: "60px",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <h3 style={{ width: "100%", textAlign: "center", marginBottom: "5px" }}>Selected Emojis:</h3>
          <div style={{ fontSize: "35px" }}>
            {selectedEmojis.map((emoji, index) => (
              <span key={index} style={{ margin: "5px" }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiSearch;
