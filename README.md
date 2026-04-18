# 📊 MongoDB / NoSQL Assignment

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![NoSQL](https://img.shields.io/badge/Type-NoSQL-blue)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Course](https://img.shields.io/badge/Course-MCA%20DS%20%26%20AI-orange)

---

## 👨‍🎓 Student Details
- **Name:** Vikas Yadav  
- **Course:** MCA (Data Science & AI)  
- **Class:** MCADS11  
- **Roll No:** 1250259068  

---

## 📌 Project Overview
This repository contains a **MongoDB (NoSQL) Project** demonstrating practical database operations and real-world query handling.

### 🔍 Key Concepts Covered:
- CRUD Operations
- Aggregation Framework
- Joins using `$lookup`
- Complex Filters & Projections
- Array & Subdocument Queries

---

## 🗂️ Database Collections

students  
faculty  
courses  
enrollments  
activities  

---

## ⚙️ Setup Instructions

### 🔧 Connect MongoDB
mongodb://localhost:27017

### 🗄️ Create Database
- Database Name: Mongo_Assignment  
- Collection Name: students  

---

## 🧪 Sample MongoDB Queries

### 🔹 Students with >85% Attendance & Skills
```js
db.students.find(
  {
    attendance: { $gt: 85 },
    skills: { $all: ["MongoDB", "Python"] }
  },
  {
    name: 1,
    department: 1,
    _id: 0
  }
)
```

---

### 🔹 Faculty Teaching More Than 2 Courses
```js
db.faculty.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "_id",
      foreignField: "faculty_id",
      as: "courses"
    }
  },
  {
    $project: {
      name: 1,
      totalCourses: { $size: "$courses" }
    }
  },
  {
    $match: {
      totalCourses: { $gt: 2 }
    }
  }
])
```

---

### 🔹 Students with Python but NOT C++
```js
db.students.find({
  skills: "Python",
  skills: { $ne: "C++" }
})
```

---

### 🔹 Upsert Course Example
```js
db.courses.updateOne(
  { course_id: "C150" },
  {
    $set: {
      title: "Advanced Data Structures",
      credits: 4
    }
  },
  { upsert: true }
)
```

---

## 📄 Assignment File
NoSQL_Assignment_Vikas_Yadav.pdf  

---

## 🎯 Learning Outcomes
- Practical understanding of NoSQL databases  
- Writing efficient MongoDB queries  
- Using aggregation pipelines  
- Handling real-world data relationships  

---

## 🚀 Future Scope
- Build REST API using Node.js + MongoDB  
- Create dashboard using Streamlit  
- Add real-time data integration  

---

## 📬 Contact
GitHub: https://github.com/Vikas-Yadav-6696  

---

## ⭐ Support
If you found this useful, give it a star ⭐
