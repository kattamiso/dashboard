import React, { useState } from "react";
import "./Home.css";
import "../App";
import UniversalCard from "../img/univeresal.jpg";
import GoldenCard from "../img/goldCard.png";
import PlatinumCard from "../img/platinum.jpg";

export function Home() {
  const [cardImage, setCardImage] = useState(UniversalCard);

  const changeImage = (imageName) => {
    setCardImage(imageName);
  };

  const [data, setData] = useState({
    universal: {
      available: { july: "$31", august: "$82" },
      creditLimit: { july: "$12", august: "$20" },
      creditUsed: { july: "$10", august: "$0" },
    },
    golden: {
      available: { july: "$25", august: "$90" },
      creditLimit: { july: "$15", august: "$25" },
      creditUsed: { july: "$5", august: "$2" },
    },
    platinum: {
      available: { july: "$40", august: "$75" },
      creditLimit: { july: "$10", august: "$15" },
      creditUsed: { july: "$8", august: "$3" },
    },
  });

  const currentData =
    data[
      cardImage === UniversalCard
        ? "universal"
        : cardImage === GoldenCard
        ? "golden"
        : "platinum"
    ];

  return (
    <div className="Home">
      {" "}
      <div className="card">
        <header>
          <nav className="headContainer">
            <ul>
              <li onClick={() => changeImage(UniversalCard)}>Universal Card</li>
              <li onClick={() => changeImage(GoldenCard)}>Golden Card</li>
              <li onClick={() => changeImage(PlatinumCard)}>Platinum Card</li>
            </ul>
          </nav>
        </header>
        <img src={cardImage} alt="Card" className="cardImg" />
        <div className="information">
          <h1>$1260,50</h1>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>July</th>
                <th>August</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Available</td>
                <td>{currentData.available.july}</td>
                <td>{currentData.available.august}</td>
              </tr>
              <tr>
                <td>Credit Limit</td>
                <td>{currentData.creditLimit.july}</td>
                <td>{currentData.creditLimit.august}</td>
              </tr>
              <tr>
                <td>Credit Used</td>
                <td>{currentData.creditUsed.july}</td>
                <td>{currentData.creditUsed.august}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
