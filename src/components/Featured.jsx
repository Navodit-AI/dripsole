
import React from "react";
import "./Featured.css";

const featuredShoes = [
  {
    name: "Air Max 90",
    price: "$130",
    image: "https://image.goxip.com/uE35jDT3d5M-lD_eGI4XGMqinTc=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FNike-Air-Max-90-Surplus-Wolf-Grey-Pink-Salt-Product.jpg"
  },
  {
    name: "Yeezy Boost 350",
    price: "$220",
    image: "https://www.forstepstyle.com/wp-content/uploads/2021/07/Yeezy-Boost-350-V2-Yecheil-Non-Reflective-300x300.png"
  },
  {
    name: "Nike Dunk Low",
    price: "$110",
    image: "https://crepdogcrew.com/cdn/shop/products/image_1db0a88b-92b2-40c3-a33f-8fbc8d90edb4.jpg?v=1746035516"
  },
  {
    name: "Puma RS-X",
    price: "$100",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369579/13/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers"
  }
];

const Featured = () => {
  return (
    <section className="featured">
      <h2>🔥 Featured Drops</h2>
      <div className="shoe-row">
        {featuredShoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
