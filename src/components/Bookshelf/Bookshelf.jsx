import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    //   const [newBook, setNewBook] = useState({ title: "", author: "" });
    const [formData, setFormData] = useState({ title: "", author: "" });


    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(event.target);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = { ...formData };
        setBooks([...books, newBook]);
        setFormData({ title: "", author: "" });
    };


    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author: </label>
                    <input
                        id="author"
                        type="text"
                        name="author"
                        placeholder="Author Name"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book) => (
                    <div className="bookCard" key={book.id}>
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;














