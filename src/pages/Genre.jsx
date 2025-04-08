import React, { useState } from "react";
import styles from "./Genre.module.css";
import actionImage from "../assets/action.jpg";
import dramaImage from "../assets/drama.jpg";
import romanceImage from "../assets/romance.jpg";
import thrillerImage from "../assets/thriller.jpg";
import westernImage from "../assets/western.jpg";
import horrorImage from "../assets/horror.jpg";
import fantasyImage from "../assets/fantasy.jpg";
import musicImage from "../assets/music.jpg";
import fictionImage from "../assets/fiction.jpg";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const CARDS = [
  {
    id: 1,
    title: "Action",
    image: actionImage,
    bg: "#FF5209",
  },
  {
    id: 2,
    title: "Drama",
    image: dramaImage,
    bg: "#D7A4FF",
  },
  {
    id: 3,
    title: "Romance",
    image: romanceImage,
    bg: "#148A08",
  },
  {
    id: 4,
    title: "Thriller",
    image: thrillerImage,
    bg: "#84C2FF",
  },
  {
    id: 5,
    title: "Western",
    image: westernImage,
    bg: "#902500",
  },
  {
    id: 6,
    title: "Horror",
    image: horrorImage,
    bg: "#7358FF",
  },
  {
    id: 7,
    title: "Fantasy",
    image: fantasyImage,
    bg: "#FF4ADE",
  },
  {
    id: 8,
    title: "Music",
    image: musicImage,
    bg: "#E61E32",
  },
  {
    id: 9,
    title: "Fiction",
    image: fictionImage,
    bg: "#6CD061",
  },
];

const errorMessage = "Please select at least three genres";

const Genre = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);

  const handleSelect = (card) => {
    if (selected.includes(card)) {
      setSelected(selected.filter((item) => item.id !== card.id));
    } else {
      setSelected([...selected, card]);
    }

    console.log(selected);
  };

  const goNext = () => {
    if (selected.length < 3) {
      toast.error(errorMessage);
    } else {
      navigate("/weather");
    }
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

          {selected.length < 3 && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
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
              <h3>{card.title}</h3>
              <img
                src={card.image}
                alt={card.title}
                className={styles.genrePoster}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={styles.nextButton} onClick={goNext}>
        Next
      </button>
    </div>
  );
};

export default Genre;
