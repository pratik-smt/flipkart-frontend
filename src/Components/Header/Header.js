import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import Logo from "../../logo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "../Authentication/LoginT";
import MoreT from "../../MoreT";
import Modal from "../../Modal";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart"
        />
        <div className="first1">
          <span
            style={{
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second my-2">
        <input type="text" style={{ padding: "4px 15px" }} placeholder="Search for products,brands and more" />
        <SearchIcon />
      </div>
      <div className="third">
        <Tippy
          content={<LoginT></LoginT>}
          interactive={true}
          offset={[5, 20]}
          theme="light"
          animation="scale"
        >
          <button onClick={handleOpen} className=" bg-white" style={{ padding: "4px" }}>
            <span>Login</span>
          </button>
        </Tippy>

      </div>
      <div className="fourth">
        <Tippy
          content={<MoreT></MoreT>}
          interactive={true}
          theme="light"
          offset={[5, 18]}
          animation="perspective"
        >
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div onClick={() => history.push("/cart")} className="fifth">
        {/* <img src={Logo} alt="" /> */}
        <AddShoppingCartIcon style={{ color: "white", height: "20px", marginRight: "5px" }} />
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>
      <div className="modal"></div>
      <Modal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
