import Book from "../models/bookModel.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Create a new book
export const createBook = async (req, res) => {
  const { title, author, description, price } = req.body;

  try {
    if (!title || !author || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newBook = new Book({
      title,
      author,
      description,
      price,
    });

    await newBook.save();
    res.status(201).json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};


// get all books

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// get a single book by ID

export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

// update a book

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, price } = req.body;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.price = price || book.price;

    await book.save();
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};


// delete a book

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Error deleting book", error });
  }
};