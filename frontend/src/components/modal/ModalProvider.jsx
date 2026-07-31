import { createContext, useEffect, useState } from "react";
import { eventBus } from "../../event/eventbus.js";
import ModalConstants from "../../assets/constants/ModalConstants.json";
import { modalRegistry } from "./ModalRegistry.js";

const ModalContext = createContext(null);

const resolveModalComponent = (modalId) => {
  if (!modalId) {
    return null;
  }

  if (modalRegistry[modalId]) {
    return modalRegistry[modalId];
  }

  const normalizedModalId = String(modalId).toLowerCase();
  if (modalRegistry[normalizedModalId]) {
    return modalRegistry[normalizedModalId];
  }

  const matchingEntry = Object.entries(modalRegistry).find(
    ([registeredId]) =>
      String(registeredId).toLowerCase() === normalizedModalId,
  );

  return matchingEntry?.[1] ?? null;
};

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const openHandler = (payload = {}) => {
      const { event, modalId, props } =
        typeof payload === "string" ? { modalId: payload } : payload;

      const ModalComponent = resolveModalComponent(modalId);

      if (!ModalComponent) {
        console.warn(`No modal registered for id: ${modalId}`);
        return;
      }
      setModal({ event, modalId, ModalComponent, props });
    };

    const closeHandler = (payload = {}) => {
      const { event, modalId } =
        typeof payload === "string" ? { modalId: payload } : payload;

      setModal((currentModal) => {
        if (!currentModal) {
          return null;
        }

        if (event && currentModal.event && currentModal.event !== event) {
          return currentModal;
        }

        if (
          modalId &&
          currentModal.modalId &&
          currentModal.modalId !== modalId
        ) {
          return currentModal;
        }

        return null;
      });
    };

    eventBus.on(ModalConstants.OpenModal, openHandler);
    eventBus.on(ModalConstants.CloseModal, closeHandler);

    return () => {
      eventBus.off(ModalConstants.OpenModal, openHandler);
      eventBus.off(ModalConstants.CloseModal, closeHandler);
    };
  }, []);

  const closeModal = () => {
    eventBus.emit(ModalConstants.CloseModal, {
      event: modal?.event,
      modalId: modal?.modalId,
    });
  };

  const ModalContent = modal?.ModalComponent;

  return (
    <ModalContext.Provider value={modal}>
      {children}
      {modal && ModalContent && (
        <div className="modal">
          <div className="modal-backdrop" onClick={closeModal} />
          <div className="modal-content">
            <ModalContent {...modal.props} onClose={closeModal} />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;
