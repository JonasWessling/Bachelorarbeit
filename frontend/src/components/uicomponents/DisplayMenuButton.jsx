import { eventBus } from "../../event/eventbus.js";
import ModalConstants from "../../assets/constants/ModalConstants.json";
import EventConstants from "../../assets/constants/EventConstants.json";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const DisplayMenuButton = () => {
  const openFontMenuModal = () => {
    eventBus.emit(ModalConstants.OpenModal, {
      event: EventConstants.FontMenu,
      modalId: ModalConstants.ModalIDs.FontMenu,
    });
  };

  return (
    <button
      type="button"
      onClick={openFontMenuModal}
      className="navbar-icon-button"
      aria-label="Display Settings"
    >
      <AccessibilityNewIcon />
    </button>
  );
};

export default DisplayMenuButton;
