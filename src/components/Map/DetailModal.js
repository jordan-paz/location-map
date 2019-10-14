import React from "react";
import { Modal, ModalDetails, ModalTitle } from "./styles";

export default ({ location, show }) => {
  const { name, nickname, website, address, phone } = location;
  return (
    <Modal show={show}>
      <ModalTitle>{nickname ? nickname : name}</ModalTitle>
      <ModalDetails>
        <li>
          <a href={website}>Website</a>
        </li>
        <li>{address}</li>
        <li>{phone}</li>
      </ModalDetails>
    </Modal>
  );
};
