import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import ModalDialog from "./ModalDialog";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("Modal Dialog");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen &&
        createPortal(
          <ModalDialog title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
            Art is silent poetry, painting what words cannot say, a dance of soul and color. It’s where truth and emotion merge beyond reality, a conversation between the artist’s heart and the world’s soul, washing life’s dust away to reveal the infinite beauty within us all.          </ModalDialog>,
          document.body,
        )}
    </div>
  );
}
