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