const express = require("express");
const { sequelize } = require("./models");
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const { seedDatabase } = require("./seeders/seed");
const app = express();
const corsOptions = {
  origin: '*', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(async () => {
  await seedDatabase();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
