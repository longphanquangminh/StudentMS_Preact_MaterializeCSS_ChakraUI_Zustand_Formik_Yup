import StudentItem from "./StudentItem";
import { useStudentStore } from "../zustand/studentStore";
import { IStudent } from "../interfaces/IStudent";
import { useEffect } from "preact/hooks";

export default function StudentList() {
  useEffect(() => {
    useStudentStore.getState().readStudents();
  }, []);
  const students = useStudentStore(state => state.students);
  return (
    <table class='highlight'>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Full name</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student: IStudent, index: number) => (
          <StudentItem key={index} student={student} />
        ))}
      </tbody>
    </table>
  );
}
