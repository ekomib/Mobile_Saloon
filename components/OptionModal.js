import React from "react";
import Modal from "react-modal";

const LoginModal = () => {
  return (
    <Modal contentLabel="Login" isOpen={false}>
      <h3>Create an account or Login</h3>
    </Modal>
  );
};

export default LoginModal;
