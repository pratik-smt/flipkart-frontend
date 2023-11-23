import { Favorite } from "@material-ui/icons";
import React from "react";
import { Data } from "../../Data";
import "./Card.css";

const Card = () => {

  return (
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    <div className="bg-blue-600">
      <div className="grid grid-cols-2 mx-20">

        {Data.map((item) => (

          <div className="card mx-4 my-4 rounded-lg bg-white" key={item.id}>
            <div className="">
              {/* <div className="card__heart"> */}
              <div className="card__heart flex justify-end">
                <Favorite />
              </div>

              {/* <div className="card__image"> */}
              <div className="flex justify-center">
                <img
                  style={{ width: "20rem" }}
                  src={item.image}
                  alt="images"
                />
              </div>

              {/* <div className="productDet"> */}
              <div className="">
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
          </div>

        ))}
      </div >
    </div>
  );
};

export default Card;
