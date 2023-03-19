import styles from "@/styles/Home.module.css";
import { useState } from "react";

const DrawResult = ({ drawOptions }) => {
  const [team, setTeam] = useState([]);
  let start = 1;
  const teamsPlayer = drawOptions && [...drawOptions.map((a) => a.value)];
  const teamNumber = Math.floor(drawOptions.length / 2);
  const handleDraw = () => {
    let array = [];
    while (start <= drawOptions.length) {
      const randomNumber = Math.floor(Math.random() * teamsPlayer.length);
      const player = teamsPlayer.splice(randomNumber, 1);
      array.push(player.toString());
      start++;
    }
    setTeam(array);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        disabled={drawOptions.length < 3 ? true : false}
        className={styles.addPeopleButton}
        onClick={handleDraw}
      >
        Çekiliş
      </button>

      {team.length > 0 && (
        <div className={styles.playersContainer}>
          {team?.map((p, index) => {
            return (
              <div key={index}>
                {" "}
                {index === 0 ||
                  (index % 2 !== 1 && (
                    <div
                      style={{ margin: "10px 0 ", border: "1px solid black" }}
                    />
                  ))}
                <p style={{ fontSize: "12px", margin: "0 auto" }}>
                  {p === "Muzaffer" && "Kazanan Takım"}{" "}
                </p>
                <p>{p}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DrawResult;
