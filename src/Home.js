import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_GreatPrentender_drop_Hero_JULY2022_2000x.jpg?v=1657811207"
        alt=""
      />

      {/* Product id,title,price,rating,image  */}
      <div className="home__row">
        <Product
          id={12312}
          title="Shenron Bomber Jacket"
          price={120}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM29LLDBH_1_282x.png?v=1656437823"
        />

        <Product
          id={12312}
          title="Toei Animation Satin Jacket"
          price={120.0}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/OWM29XYTAM_1_282x.png?v=1657031005"
        />
      </div>

      <div className="home__row">
        <Product
          id={12312}
          title="Hunter X Hunter Throw"
          price={46}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/BZ9W14HXH_1_1000x.jpg?v=1618635360"
        />

        <Product
          id={12312}
          title="Gohan Snapback Hat"
          price={25}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/SBA29RZDBH_2_600x.jpg?v=1656437577"
        />
        <Product
          id={12312}
          title="Itadori & Megumi Slides"
          price={38.99}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/MSA1F6DCRU_2_600x.jpg?v=1653674713"
        />
      </div>

      <div className="home__row">
        <Product
          id={12312}
          title="Dragon Ball Z Black Tee"
          price={30.0}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TS796NDBZ_large.png?v=1618615917"
        />
      </div>

      {/* Product  */}
    </div>
  );
}

export default Home;
