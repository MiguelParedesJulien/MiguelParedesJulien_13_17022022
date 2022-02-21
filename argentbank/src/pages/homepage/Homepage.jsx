import Banner from "components/banner/Banner";
import { FEATURES_CARDS_CONTENT } from "data/data";
import FeatureItem from "components/featureItem/FeatureItem";
import React, { Fragment } from "react";

function Homepage() {
  return (
    <Fragment>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES_CARDS_CONTENT.map(({ id, imgSrc, imgAlt, title, description }) => (
          <FeatureItem key={id} imgSrc={imgSrc} imgAlt={imgAlt} title={title} description={description} />
        ))}
      </section>
    </Fragment>
  );
}

export default Homepage;
