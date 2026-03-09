import { useState, useEffect } from "react";
import StudentList from "../components/StudentList";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentData = [
      { id: 1, name: "John Doe", course: "BSIT" },
      { id: 2, name: "Jane Smith", course: "BSCS" },
      { id: 3, name: "Mark Lee", course: "BSIT" },
      { id: 4, name: "Anna Cruz", course: "ACT" },
      { id: 5, name: "Paul Kim", course: "BSCS" },
      { id: 6, name: "Lisa Park", course: "BSIT" },
      { id: 7, name: "Tom White", course: "ACT" },
      { id: 8, name: "Mary Blue", course: "BSIT" },
      { id: 9, name: "James Black", course: "BSCS" },
      { id: 10, name: "Sarah Green", course: "BSIT" }
    ];

    setStudents(studentData);
  }, []);

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentList key={student.id} student={student} />
      ))}
    </div>
  );
}

export default Students;