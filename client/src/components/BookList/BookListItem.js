const BookListItem = (props) => {
  return (
    <li onClick={props.onClick}>
      <h3>Name: {props.bookName} </h3>
      <h4>Genre: {props.bookGenre} </h4>
      <p>
        Author: {props.authorName} ({props.authorAge} years old)
      </p>
    </li>
  );
};

export default BookListItem;
