import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Book from "../models/bookModel.js";

// Create a new order
export const createOrder = async (req, res) => {
    const userId = req.user._id;
    const { books } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const bookIds = books.map(book => book.book);
        const bookDocs = await Book.find({ _id: { $in: bookIds } });

        // Stock check
        for (let book of books) {
            const bookDoc = bookDocs.find(b => b._id.toString() === book.book);
            if (!bookDoc) {
                return res.status(404).json({ message: `Book not found: ${book.book}` });
            }
            if (bookDoc.stock < book.quantity) {
                return res.status(400).json({ message: `Book out of stock: ${bookDoc.title}` });
            }
        }

        // Total amount calculate
        let totalAmount = 0;
        books.forEach(book => {
            const bookDoc = bookDocs.find(b => b._id.toString() === book.book);
            if (bookDoc) {
                totalAmount += bookDoc.price * book.quantity;
            }
        });

        // Order ke liye books prepare
        const orderBooks = books.map(book => ({
            book: book.book,   // yahan book ka ObjectId hoga
            quantity: book.quantity
        }));

        const newOrder = new Order({
            user: userId,
            books: orderBooks,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating order", error });
    }
};
