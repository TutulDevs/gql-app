// apollo client
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../../queries/queries";

import Loader from "../Loader/Loader";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p className="text-centered">Error :(</p>;

  const DisplayBookDetail = () => {
    const { book } = data;

    if (book) {
      return (
        <>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>
            {book.author.name} <small>({book.author.age} years old)</small>
          </p>
          <p>All books by the author:</p>

          <ul className="other-books">
            {book.author.books.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return <p className="text-centered">No book is selected yet...</p>;
    }
  };

  return (
    <div id="book-details">
      <div className="book-details__container">{DisplayBookDetail()}</div>
      <footer>
        Made by{" "}
        <a
          href="http://github.com/tutuldevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutul
        </a>{" "}
        with the help of The Net Ninja's{" "}
        <a
          href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f"
          target="_blank"
          rel="noopener noreferrer"
        >
          Playlist
        </a>
        .
      </footer>
    </div>
  );
};

export default BookDetails;
