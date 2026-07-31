import ModalConstants from "../assets/constants/ModalConstants.json";
import EventConstants from "../assets/constants/EventConstants.json";
import { eventBus } from "../event/eventbus.js";

const LandingPage = () => {
  const openFontMenuModal = () => {
    eventBus.emit(ModalConstants.OpenModal, {
      event: EventConstants.FontMenu,
      modalId: ModalConstants.ModalIDs.FontMenu,
    });
  };

  return (
    <div className="content-padding">
      <button onClick={openFontMenuModal}>Open Font Menu</button>
    </div>
  );
};

export default LandingPage;
