import 'dotenv/config';
import express from 'express';
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: "ok"});

});

app.get("/",(req, res) =>{
    res.status(200).json({ message: "Welcome to uber"});

})
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server runnning on http://localhost:${PORT}`);
  
  
});

