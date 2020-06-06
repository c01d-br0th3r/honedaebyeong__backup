import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import allActions from "../store/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SDropdown = styled(Dropdown)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const UserDropdown = ({ id, nickname }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("id");
    dispatch(allActions.loginActions.logOutUser());
  };
  return (
    <SDropdown text={<Icon name="user" />} icon={""}>
      <Dropdown.Menu>
        <Link to={`user/${id}`}>
          <Dropdown.Item text={`#${nickname}`} />
        </Link>
        <Dropdown.Divider />
        <Dropdown.Item text="로그아웃" onClick={handleLogout} />
      </Dropdown.Menu>
    </SDropdown>
  );
};

export default UserDropdown;
