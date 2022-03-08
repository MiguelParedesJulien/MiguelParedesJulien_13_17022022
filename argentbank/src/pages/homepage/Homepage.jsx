import Banner from "components/banner/Banner";
import { FEATURES_CARDS_CONTENT } from "services/dataProvider/data";
import FeatureItem from "components/featureItem/FeatureItem";
import React from "react";

function Homepage() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES_CARDS_CONTENT.map(({ id, imgSrc, imgAlt, title, description }) => (
          <FeatureItem key={id} imgSrc={imgSrc} imgAlt={imgAlt} title={title} description={description} />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
