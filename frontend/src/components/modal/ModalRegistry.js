import FontMenuModal from "./FontMenuModal.jsx";
import ModalConstants from "../../assets/constants/ModalConstants.json";
import ContactModal from "./ContactModal.jsx";

export const modalRegistry = {
  [ModalConstants.ModalIDs.FontMenu]: FontMenuModal,
  [ModalConstants.ModalIDs.ContactModal]: ContactModal,
};
