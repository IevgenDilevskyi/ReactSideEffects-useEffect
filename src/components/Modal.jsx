import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  //Using useEffect here for Syncing with browser API. Otherwise, 'dialog' doesn't exist before jsx is rendered
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    //Need onClose prop here because when closing modal by pressyng Esc we can't open it again as the modalIsOpen state in the App component is still true
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
