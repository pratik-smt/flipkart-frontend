import { Favorite } from "@material-ui/icons";
import React from "react";
import { Data } from "../../Data";
import "./Card.css";

const Card = () => {

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>

      {Data.map((item) => (

        <div className="card" key={item.id}>
          <div className="card__heart">
            <Favorite />
          </div>

          <div className="card__image">
            <img
              src={item.image}
              alt="images"
            />
          </div>

          <div className="productDet">
            <div className="card__details">
              <p className="title">adidas</p>
              <p>running shoes</p>
              <span className="span1">₹{item.offerPrice}</span>
              <span className="span2">₹{item.actualPrice}</span>
              <span className="span3">56%</span>
            </div>
            <div className="card__size">
              <p>
                size <span>6,7,8,9</span>
              </p>
            </div>
          </div>
        </div>

      ))}
    </div >
  );
};

export default Card;
