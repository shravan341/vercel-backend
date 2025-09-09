const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./conn/conn");

const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
const allowedOrigins = [
  "https://vercel-frontend-azure-sigma.vercel.app", // Your Vercel frontend URL
  // Add more URLs as needed
];

// CORS configuration with dynamic origin check
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // If the origin is in the allowed list or there is no origin (e.g., local dev)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials (cookies, headers)
}));
app.use(express.json());
//routes


app.use("/api/v1", User);
app.use("/api/v1",Books);
app.use("/api/v1",Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1",Order);
//creating port
app.listen(process.env.PORT , ()=>{
    console.log(`Serve statrted ${process.env.PORT}`);
});
