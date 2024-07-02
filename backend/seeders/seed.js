const { Product, User } = require("../models");

const sampleData = [
  {
    id: 1,
    dataCategory: "Firmographic",
    recordCount: 5250,
    fields: "Company name, Company address, Website",
  },
  {
    id: 2,
    dataCategory: "Demographic",
    recordCount: 3200,
    fields: "Age, Gender, Income",
  },
  {
    id: 3,
    dataCategory: "Technographic",
    recordCount: 4200,
    fields: "Technology stack, Tools used",
  },
  {
    id: 4,
    dataCategory: "Behavioral",
    recordCount: 1800,
    fields: "Purchase history, Search queries",
  },
  {
    id: 5,
    dataCategory: "Intent",
    recordCount: 1200,
    fields: "Job postings, Company announcements",
  },
  {
    id: 6,
    dataCategory: "Firmographic",
    recordCount: 5250,
    fields: "Company name, Company address, Website",
  },
  {
    id: 7,
    dataCategory: "Demographic",
    recordCount: 3200,
    fields: "Age, Gender, Income",
  },
  {
    id: 8,
    dataCategory: "Technographic",
    recordCount: 4200,
    fields: "Technology stack, Tools used",
  },
  {
    id: 9,
    dataCategory: "Behavioral",
    recordCount: 1800,
    fields: "Purchase history, Search queries",
  },
  {
    id: 10,
    dataCategory: "Intent",
    recordCount: 1200,
    fields: "Job postings, Company announcements",
  },
  {
    id: 11,
    dataCategory: "Firmographic",
    recordCount: 5250,
    fields: "Company name, Company address, Website",
  },
  {
    id: 12,
    dataCategory: "Demographic",
    recordCount: 3200,
    fields: "Age, Gender, Income",
  },
  {
    id: 13,
    dataCategory: "Technographic",
    recordCount: 4200,
    fields: "Technology stack, Tools used",
  },
  {
    id: 14,
    dataCategory: "Behavioral",
    recordCount: 1800,
    fields: "Purchase history, Search queries",
  },
  {
    id: 15,
    dataCategory: "Intent",
    recordCount: 1200,
    fields: "Job postings, Company announcements",
  },
  {
    id: 16,
    dataCategory: "Firmographic",
    recordCount: 5250,
    fields: "Company name, Company address, Website",
  },
  {
    id: 17,
    dataCategory: "Demographic",
    recordCount: 3200,
    fields: "Age, Gender, Income",
  },
  {
    id: 18,
    dataCategory: "Technographic",
    recordCount: 4200,
    fields: "Technology stack, Tools used",
  },
  {
    id: 19,
    dataCategory: "Behavioral",
    recordCount: 1800,
    fields: "Purchase history, Search queries",
  },
  {
    id: 20,
    dataCategory: "Intent",
    recordCount: 1200,
    fields: "Job postings, Company announcements",
  },
];

const sampleUsers = [
  {
    id: 1,
    username: "tushar",
    password: "tushar",
  },
  // Add more sample users as needed
];

const seedDatabase = async () => {
  try {
    await Product.bulkCreate(sampleData);
    await User.bulkCreate(sampleUsers);
    console.log("Database seeded with sample data.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

module.exports = { seedDatabase };
