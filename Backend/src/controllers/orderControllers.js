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


// get my orders
export const getMyOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ user: userId }).populate("books.book", "title price").sort({ createdAt: -1 });
        res.status(200).json({ orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
}


// get all orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("books.book", "title price").sort({ createdAt: -1 });
        res.status(200).json({ orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
}


 
// update my order
export const updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const { books } = req.body;

    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Book IDs nikalo
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

        // Total amount calculate karo
        let totalAmount = 0;
        books.forEach(book => {
            const bookDoc = bookDocs.find(b => b._id.toString() === book.book);
            if (bookDoc) {
                totalAmount += bookDoc.price * book.quantity;
            }
        });

        // Update order books aur amount
        order.books = books.map(book => ({
            book: book.book,
            quantity: book.quantity
        }));
        order.totalAmount = totalAmount;

        await order.save();
        res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating order", error });
    }
};


// delete order

export const deleteOrder = async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await Order.findByIdAndDelete(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting order", error });
    }
};