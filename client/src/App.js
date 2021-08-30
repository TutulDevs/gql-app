import { useState } from "react";
import AddBook from "./components/AddBook/AddBook";
import BookList from "./components/BookList/BookList";
import Modal from "./components/UI/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      {showModal && (
        <Modal onConfirm={showModal}>
          <AddBook onClose={handleToggleModal} />
        </Modal>
      )}

      <button className="addBookButton" onClick={handleToggleModal}>
        +
      </button>

      <div id="main">
        <h1>GraphQL Books Application</h1>

        <BookList />
      </div>
    </>
  );
};

export default App;
