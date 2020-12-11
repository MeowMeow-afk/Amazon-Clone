import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner-image"
      />
      {/* product -> productid, title,  rating, image*/}
      <div className="home__row">
        <Product
          id="123456"
          title="Dan Brown : Angels & Demons"
          price={899}
          rating={5}
          image="https://www.thoughtco.com/thmb/-c8auZoJBMugNpxbqWP1nBUt3Oc=/735x0/angels_demons-56a095a45f9b58eba4b1c6d9.JPG"
        />
        <Product
          id="123457"
          title="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage) "
          price={22999}
          rating={4}
          image="https://my-techspace.com/wp-content/uploads/2010/03/Samsung-Galaxy-M51-price-specs.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123458"
          title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue "
          price={126000}
          rating={3}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021658000"
        />
        <Product
          id="123459"
          title="Naruto 01: Uzumaki Naruto: Volume 1"
          price={350}
          rating={5}
          image="https://m.media-amazon.com/images/I/61blY+DiS4L.jpg"
        />
        <Product
          id="123460"
          title="Death Note Black Edition, Vol. 2 (Volume 2) "
          price={549}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51bXSDV2gEL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123461"
          title="Black clover: Manga Set"
          price={5999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zfpGIa94L.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
