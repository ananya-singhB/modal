export default function ModalDialog({
    children,
    title,
    isOpen,
    setIsOpen,
}: {
    children: string;
    title: string;
    isOpen: boolean;
    setIsOpen: (_: boolean) => void;
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <header className="modal-header">
                    <h1>{title}</h1>
                    <button onClick={() => setIsOpen(false)}> x </button>
                </header>
                <p className="modal-body">{children}</p>
            </div>
        </div>
    );
}
