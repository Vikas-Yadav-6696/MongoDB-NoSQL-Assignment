// ==============================
// MongoDB Assignment - Vikas Yadav
// ==============================

// Use Database
use("Mongo_Assignment");

// ==============================
// COLLECTIONS
// ==============================

db.createCollection("students");
db.createCollection("faculty");
db.createCollection("courses");
db.createCollection("enrollments");
db.createCollection("activities");

// ==============================
// SAMPLE DATA INSERTION
// ==============================

// Students
db.students.insertMany([
{
  _id: "S1",
  name: "Amit",
  department: "Computer Science",
  attendance: 90,
  skills: ["MongoDB", "Python"],
  marks: [
    { course: "Web Development", score: 85 },
    { course: "DBMS", score: 78 }
  ]
},
{
  _id: "S2",
  name: "Rahul",
  department: "IT",
  attendance: 80,
  skills: ["Python"],
  marks: [
    { course: "Web Development", score: 70 }
  ]
},
{
  _id: "S3",
  name: "Neha",
  department: "Computer Science",
  attendance: 95,
  skills: ["MongoDB", "Python"],
  marks: [
    { course: "Web Development", score: 92 }
  ]
}
]);

// Faculty
db.faculty.insertMany([
{
  _id: "F1",
  name: "Dr. Sharma",
  courses: ["C101", "C102", "C103"]
},
{
  _id: "F2",
  name: "Prof. Singh",
  courses: ["C101"]
}
]);

// Courses
db.courses.insertMany([
{ _id: "C101", title: "Web Development", credits: 3 },
{ _id: "C102", title: "DBMS", credits: 4 },
{ _id: "C103", title: "AI", credits: 3 }
]);

// Enrollments
db.enrollments.insertMany([
{ studentId: "S1", courseId: "C101", marks: 85 },
{ studentId: "S1", courseId: "C102", marks: 78 },
{ studentId: "S3", courseId: "C101", marks: 92 }
]);

// Activities
db.activities.insertMany([
{ studentId: "S1", type: "Hackathon", year: 2023 },
{ studentId: "S1", type: "Seminar", year: 2023 },
{ studentId: "S3", type: "Hackathon", year: 2024 }
]);

// ==============================
// QUERIES
// ==============================

// Q1
db.students.find(
{
  attendance: { $gt: 85 },
  skills: { $all: ["MongoDB", "Python"] }
},
{ name: 1, department: 1, _id: 0 }
);

// Q2
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
]);

// Q3
db.enrollments.aggregate([
{
  $lookup: {
    from: "students",
    localField: "studentId",
    foreignField: "_id",
    as: "student"
  }
},
{ $unwind: "$student" },
{
  $lookup: {
    from: "courses",
    localField: "courseId",
    foreignField: "_id",
    as: "course"
  }
},
{ $unwind: "$course" },
{
  $project: {
    studentName: "$student.name",
    courseTitle: "$course.title"
  }
}
]);

// Q4
db.enrollments.aggregate([
{
  $group: {
    _id: "$courseId",
    totalStudents: { $sum: 1 },
    avgMarks: { $avg: "$marks" }
  }
},
{
  $lookup: {
    from: "courses",
    localField: "_id",
    foreignField: "_id",
    as: "course"
  }
},
{ $unwind: "$course" },
{
  $project: {
    courseTitle: "$course.title",
    totalStudents: 1,
    avgMarks: 1
  }
}
]);

// Q5
db.enrollments.aggregate([
{
  $group: {
    _id: "$studentId",
    avgMarks: { $avg: "$marks" }
  }
},
{ $sort: { avgMarks: -1 } },
{ $limit: 3 }
]);

// Q6
db.students.aggregate([
{
  $group: {
    _id: "$department",
    total: { $sum: 1 }
  }
},
{ $sort: { total: -1 } },
{ $limit: 1 }
]);

// Q7
db.students.updateMany(
{
  _id: {
    $in: db.activities.find({ type: "Hackathon" }).map(a => a.studentId)
  }
},
{ $set: { attendance: 100 } }
);

// Q8
db.activities.deleteMany({
  year: { $lt: 2022 }
});

// Q9
db.courses.updateOne(
{ _id: "C150" },
{
  $set: { title: "Advanced Data Structures", credits: 4 }
},
{ upsert: true }
);

// Q10
db.students.find({
  skills: "Python",
  skills: { $ne: "C++" }
});

// Q11
db.activities.aggregate([
{
  $match: { type: { $in: ["Seminar", "Hackathon"] } }
},
{
  $group: {
    _id: "$studentId",
    activities: { $addToSet: "$type" }
  }
},
{
  $match: {
    activities: { $all: ["Seminar", "Hackathon"] }
  }
}
]);

// Q12
db.students.find({
  department: "Computer Science",
  marks: {
    $elemMatch: {
      course: "Web Development",
      score: { $gt: 80 }
    }
  }
});

// Q13
db.faculty.aggregate([
{
  $lookup: {
    from: "courses",
    localField: "courses",
    foreignField: "_id",
    as: "courseDetails"
  }
},
{
  $lookup: {
    from: "enrollments",
    localField: "courses",
    foreignField: "courseId",
    as: "enrollments"
  }
}
]);

// Q14
db.activities.aggregate([
{
  $group: {
    _id: "$type",
    count: { $sum: 1 }
  }
},
{ $sort: { count: -1 } },
{ $limit: 1 }
]);
