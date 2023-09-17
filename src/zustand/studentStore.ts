import { create } from "zustand";
import { IStudent } from "../interfaces/IStudent";
import { IStudentStore } from "../interfaces/IStudentStore";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

export const useStudentStore = create<IStudentStore>((set: Function) => ({
  students: [],
  addStudent: (student: IStudent) => {
    set((state: IStudentStore) => ({ students: [...state.students, student] }));
    axios
      .post(BASE_URL, student)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  updateStudent: (updatedStudent: IStudent) => {
    set((state: IStudentStore) => ({
      students: state.students.map((student: IStudent) => (student.id === updatedStudent.id ? updatedStudent : student)),
    }));
    axios
      .put(`${BASE_URL}/${updatedStudent.id}`, updatedStudent)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  deleteStudent: (studentId: string) => {
    set((state: IStudentStore) => ({
      students: state.students.filter((student: IStudent) => student.id !== studentId),
    }));
    axios
      .delete(`${BASE_URL}/${studentId}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  readStudents: () => {
    axios
      .get(BASE_URL)
      .then(res => {
        set({ students: [...res.data] });
      })
      .catch(err => console.log(err));
  },
}));

export const addStudent = useStudentStore.getState().addStudent;
export const updateStudent = useStudentStore.getState().updateStudent;
export const deleteStudent = useStudentStore.getState().deleteStudent;
export const readStudents = useStudentStore.getState().readStudents;
