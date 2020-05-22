const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};

const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

export default { openModal, closeModal };
