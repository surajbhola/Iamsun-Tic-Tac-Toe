import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const onClickButtonHandler = () => {
    // you should always pass a function to change the state when changing state depends on previous state and always use function to update state it give you guarantee that you will use latest state from that point of changing
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName} </span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickButtonHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
