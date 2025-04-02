import React, { useState } from "react";
import styles from "./Genre.module.css";
const CARDS = [
  {
    id: 1,
    title: "Action",
    image: "https://via.placeholder.com/150",
    bg: "#FF5209",
  },
  {
    id: 2,
    title: "Drama",
    image: "https://via.placholder.com/150",
    bg: "#D7A4FF",
  },
  {
    id: 3,
    title: "Romance",
    image: "https://via.placholder.com/150",
    bg: "#148A08",
  },
  {
    id: 4,
    title: "Thriller",
    image: "https://via.placholder.com/150",
    bg: "#84C2FF",
  },
  {
    id: 5,
    title: "Western",
    image: "https://via.placholder.com/150",
    bg: "#902500",
  },
  {
    id: 6,
    title: "Horror",
    image: "https://via.placholder.com/150",
    bg: "#7358FF",
  },
  {
    id: 7,
    title: "Fantasy",
    image: "https://via.placholder.com/150",
    bg: "#FF4ADE",
  },
  {
    id: 8,
    title: "Music",
    image: "https://via.placholder.com/150",
    bg: "#E61E32",
  },
  {
    id: 9,
    title: "Fiction",
    image: "https://via.placholder.com/150",
    bg: "#6CD061",
  },
];

const Genre = () => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (card) => {
    if (selected.includes(card)) {
      setSelected(selected.filter((item) => item.id !== card.id));
    } else {
      setSelected([...selected, card]);
    }

    console.log(selected);
  };
  return (
    <div className={styles.overContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>SuperApp</h1>
          <h2>
            Choose your <br />
            entertainment
            <br /> category
          </h2>
          <div className={styles.selectedChips}>
            {selected.map((item) => (
              <div className={styles.chip}>
                <span key={item.key} className={styles.name}>
                  {item.title}{" "}
                  <span
                    onClick={() => handleSelect(item)}
                    className={styles.chipClose}
                  >
                    X
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {CARDS.map((card) => (
            <div
              className={styles.card}
              key={card.id}
              style={{
                backgroundColor: card.bg,
                border: selected.includes(card) ? "6px solid #11B800" : "none",
              }}
              onClick={() => {
                handleSelect(card);
              }}
            >
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;
