import { useState } from "react";
import type { CardItem } from "../types/types";
import "./cardsView.css";
import { Picture } from "astro:assets";

interface CardsViewProps {
  cards: CardItem[];
}

export default function CardsView({ cards }: CardsViewProps) {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
      <div className="cardsView">
        {cards.map((card, index) => {
          return index < 3 ? <CardView key={index} {...card} /> : null;
        })}
      </div>
    </div>
  );
}

function CardView({ title, description, image }: CardItem) {
    return (
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <img src="/assets/game-info-frame-a.webp" alt={title} />
        </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }