import { IStudent } from "./IStudent";

export interface IStudentStore {
  students: IStudent[];
  addStudent: (student: IStudent) => void;
  updateStudent: (updatedStudent: IStudent) => void;
  deleteStudent: (studentId: string) => void;
  readStudents: () => void;
}
