import { useState } from "react";

// apollo client
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../../queries/queries";

import BookListItem from "./BookListItem";
import BookDetails from "./BookDetails";
import Loader from "../Loader/Loader";

const BookList = () => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <Loader />;
  if (error) return <p className="text-centered">Error :(</p>;

  return (
    <>
      <ul id="book-list">
        {data.books.map((el) => (
          <BookListItem
            key={el.id}
            bookId={el.id}
            bookName={el.name}
            bookGenre={el.genre}
            authorName={el.author.name}
            authorAge={el.author.age}
            authorId={el.author.id}
            onClick={(e) => setSelectedBookId(el.id)}
          />
        ))}
      </ul>

      <BookDetails bookId={selectedBookId} />
    </>
  );
};

export default BookList;
