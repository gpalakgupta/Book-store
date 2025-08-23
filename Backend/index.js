import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoute from "./src/routes/authRoute.js";
import bookRoutes from "./src/routes/bookRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";



const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

const PORT = process.env.PORT || 3000;


app.use("/api/auth", authRoute);
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Store !!');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});