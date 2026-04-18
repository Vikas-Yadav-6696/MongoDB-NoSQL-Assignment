<!-- ================= HEADER BANNER ================= -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4CAF50,100:2196F3&height=200&section=header&text=MongoDB%20%2F%20NoSQL%20Project&fontSize=35&fontColor=ffffff" />
</p>

<!-- ================= TYPING ANIMATION ================= -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=36BCF7&size=25&center=true&vCenter=true&width=700&lines=MongoDB+Student+Management+System;NoSQL+Database+Project;Aggregation+%7C+CRUD+%7C+%24lookup;Built+by+Vikas+Yadav" />
</p>

<!-- ================= BADGES ================= -->
<p align="center">
  <img src="https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb&style=for-the-badge">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript&style=for-the-badge">
  <img src="https://img.shields.io/badge/Type-NoSQL-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Course-MCA%20DS%20%26%20AI-orange?style=for-the-badge">
</p>

---

# 📊 MongoDB / NoSQL Project

## 👨‍🎓 Student Details
- **Name:** Vikas Yadav  
- **Course:** MCA (Data Science & AI)  
- **Class:** MCADS11  
- **Roll No:** 1250259068  

---

## 🚀 Project Overview
This project demonstrates a **MongoDB-based Student Management System** using real-world NoSQL concepts.

### 🔍 Key Features
- ⚡ CRUD Operations  
- 📊 Aggregation Framework  
- 🔗 `$lookup` Joins  
- 🎯 Complex Filtering  
- 🧩 Array & Subdocument Queries  

---

## 🛠️ Tech Stack
<p align="center">
  <img src="https://skillicons.dev/icons?i=mongodb,js,nodejs,git,vscode" />
</p>

---

## 🗂️ Database Collections
- 👨‍🎓 students  
- 👨‍🏫 faculty  
- 📚 courses  
- 📝 enrollments  
- 🎯 activities  

---

## ⚙️ Setup Instructions

### 🔧 Connect MongoDB
```bash
mongodb://localhost:27017
```

### 🗄️ Database
- Name: **Mongo_Assignment**  
- File: `mongo_assignment.js`  

---

## 🧪 Sample Queries

### 🎯 Students with High Attendance & Skills
```js
db.students.find({
  attendance: { $gt: 85 },
  skills: { $all: ["MongoDB", "Python"] }
})
```

---

### 👨‍🏫 Faculty with More Than 2 Courses
```js
db.faculty.aggregate([
  {
    $project: {
      name: 1,
      totalCourses: { $size: "$courses" }
    }
  },
  {
    $match: { totalCourses: { $gt: 2 } }
  }
])
```

---

### 🧠 Students with Python but NOT C++
```js
db.students.find({
  skills: "Python",
  skills: { $ne: "C++" }
})
```

---

### 🔄 Upsert Example
```js
db.courses.updateOne(
  { _id: "C150" },
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

## 📁 Project Structure
```
MongoDB-Assignment/
│── mongo_assignment.js
│── README.md
│── NoSQL_Assignment_Vikas_Yadav.pdf
```

---


---

## 🎯 Learning Outcomes
- 📚 Practical understanding of NoSQL databases  
- 📊 Writing efficient MongoDB queries  
- 🔗 Using aggregation pipelines  
- ⚡ Handling real-world data relationships  

---

## 🚀 Future Scope
- 🌐 Node.js API Integration  
- ⚛️ React Dashboard  
- ☁️ MongoDB Atlas Deployment  
- 📊 Real-time Analytics  

---

## 📬 Connect With Me
<p align="center">
  <a href="https://github.com/Vikas-Yadav-6696">
    <img src="https://img.shields.io/badge/GitHub-Vikas%20Yadav-black?style=for-the-badge&logo=github">
  </a>
</p>

---

## ⭐ Support
If you like this project:

⭐ Star this repo  
🔗 Share with others  

---

<!-- ================= FOOTER ================= -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2196F3,100:4CAF50&height=120&section=footer"/>
</p>
