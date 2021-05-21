import React, { useState } from "react";
import { connect } from "react-redux";

//CSS
import * as s from "./Header.styles";

import { setTooglerWork } from "../../store/header/actions";
import { setIsSidebarOpen } from "../../store/sidebar/actions";

function Header(props) {
  const { setTooglerWork, setIsSidebarOpen, isTooglerPush } = props;

  const isTooglePushOnClick = () => {
    setTooglerWork(!isTooglerPush);
    setIsSidebarOpen(!isTooglerPush);
  };

  return (
    <s.HeaderContainer>
      <s.HeaderElement>
        <s.ToggleContainer>
          <s.Toggle
            className="icon-bars"
            onClick={() => {
              isTooglePushOnClick();
            }}
            click={isTooglerPush}
          ></s.Toggle>
        </s.ToggleContainer>
      </s.HeaderElement>
    </s.HeaderContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isTooglerPush: state.header.isTooglerPush,
  };
};

const mapDispatchToProps = {
  setIsSidebarOpen,
  setTooglerWork,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
