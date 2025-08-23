import React, { useState } from "react";

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    image: "https://m.media-amazon.com/images/I/81pHQ1l9wUL.jpg",
    price: 16.99,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    price: 18.99,
  },
  {
    id: 3,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Romance",
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL.jpg",
    price: 15.99,
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
    price: 17.99,
  },
  {
    id: 5,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romance",
    image: "https://m.media-amazon.com/images/I/71pnQgc2F1L.jpg",
    price: 14.99,
  },
  {
    id: 6,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    genre: "Self-Help",
    image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
    price: 19.99,
  },
  {
    id: 7,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Memoir",
    image: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
    price: 20.99,
  },
];

const FeaturedBooks = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "All" || book.genre === genre;
    return matchesSearch && matchesGenre;
  });

  return (
    <section className="py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
        <p className="text-gray-500 mt-2">
          Discover our handpicked selection of bestsellers, new releases, and
          timeless classics
        </p>
      </div>

      {/* Search & Filter (Centered) */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-4 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search books by title or author..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="All">All Genres</option>
            <option value="Fiction">Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Romance">Romance</option>
            <option value="Memoir">Memoir</option>
          </select>
        </div>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden 
                       transform transition duration-300 hover:scale-105 
                       hover:shadow-2xl cursor-pointer"
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="h-60 w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                {book.genre}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
              <p className="text-orange-600 font-bold mb-3">${book.price}</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
