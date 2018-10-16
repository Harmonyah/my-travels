import React from "react";
import Quote from "./Quote"
// src/Quotes.js
const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Tokyo, Japon",
    image:
      "https://images4.alphacoders.com/312/thumb-1920-31288.jpg"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Amsterdam, Pays bas",
    image:
      "https://images.wallpaperscraft.com/image/amsterdam_night_city_netherlands_113322_1280x1024.jpg"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Rio de Janeiro, Mexique",
    image:
      "http://s1.1zoom.me/b5050/341/320917-alexfas01_1280x1024.jpg"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Moscou, Russie",
    image:
      "https://images.wallpaperscraft.com/image/moscow_russia_red_square_light_evening_69285_1280x1024.jpg"
  }
];

const Quotes = () => (
  <div>
    {quotes.map(quote => (
      <Quote image={quote.image} character={quote.character} quote={quote.quote} />
    ))}
  </div>
);

export default Quotes;