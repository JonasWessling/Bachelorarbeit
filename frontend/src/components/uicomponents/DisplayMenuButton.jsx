import { eventBus } from "../../event/eventbus.js";
import ModalConstants from "../../assets/constants/ModalConstants.json";
import EventConstants from "../../assets/constants/EventConstants.json";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useTranslation } from "react-i18next";

const DisplayMenuButton = () => {
  const { t } = useTranslation();

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
      aria-label={t("changeDisplaySettings")}
      title={t("changeDisplaySettings")}
    >
      <AccessibilityNewIcon />
    </button>
  );
};

export default DisplayMenuButton;
