import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id,title,price,rating,image  */}
      <div className="home__row">
        <Product
          id={12312}
          title="Dell Alienware 34 inch (86.36cm) Curved WQHD Gaming Monitor with HDMI and DP Ports, IPS Panel, 120Hz, 2ms, NVIDIA G-Sync, Tilt, Swivel, Height-Adjustable - AW3420DW (Black)"
          price={13200}
          rating={5}
          image="https://m.media-amazon.com/images/I/71NJAl4Jz0L._SL1500_.jpg"
        />

        <Product
          id={12312}
          title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
          price={4051.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={12312}
          title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
          price={883.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
        />

        <Product
          id={12312}
          title="Learning React: Functional Web Development with React and Redux Paperback – 1"
          price={950.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
        />
        <Product
          id={12312}
          title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
          price={140.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={12312}
          title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
          price={199.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
        />
      </div>

      {/* Product  */}
    </div>
  );
}

export default Home;
