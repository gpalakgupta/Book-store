import express from "express"
import dotenv from "dotenv";
import cors from "cors";



const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;
 

app.get('/',(req,res)=>{
    res.send('Welcome to the Book Store');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});