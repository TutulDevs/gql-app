import { useState } from "react";
// apollo client
import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../../queries/queries";

const AddBook = (props) => {
  // states
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  // get data
  const { loading, error, data } = useQuery(getAuthorsQuery);
  // send data
  const [addBookMut, { dataMutation }] = useMutation(addBookMutation);

  if (error)
    return <p className="text-centered">Error fetching authors data :(</p>;

  let optionTag;
  if (loading) optionTag = <option>No Options</option>;
  if (!loading && !error)
    optionTag = data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));

  // send data
  const handleSubmit = (e) => {
    e.preventDefault();

    // send
    addBookMut({
      variables: {
        name: bookName,
        genre: bookGenre,
        authorId: authorId,
      },
      // refetch will do the work of useEffect to run getBooksQuery again
      refetchQueries: [
        {
          query: getBooksQuery,
        },
      ],
    });

    // close modal
    props.onClose();
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>

      <div className="field">
        <label htmlFor="bookName">Book name:</label>
        <input
          type="text"
          id="bookName"
          required
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          required
          onChange={(e) => setBookGenre(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {optionTag}
        </select>
      </div>

      <div className="field">
        <button onClick={props.onClose}>Close</button>
        <button>Add Book</button>
      </div>
    </form>
  );
};

export default AddBook;
