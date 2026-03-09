import { Link } from "react-router";

function StudentList({ student }) {
  return (
    <div>
      <p>
        {student.name} - {student.course} 
        <Link to={`/students/${student.id}`}> View Details</Link>
      </p>
    </div>
  );
}

export default StudentList;