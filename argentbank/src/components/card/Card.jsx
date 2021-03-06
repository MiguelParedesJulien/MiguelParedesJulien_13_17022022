import Button from "components/button/Button";
import "components/card/card.css";
import PropTypes from "prop-types";
import React from "react";

const Card = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="accountContentWrapper">
        <h3 className="accountTitle">{title}</h3>
        <p className="accountAmount">{amount}</p>
        <p className="accountAmountDescription">{description}</p>
      </div>
      <div className="accountContentWrapper cta">
        <Button className="transactionButton" text="View transactions" />
      </div>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
