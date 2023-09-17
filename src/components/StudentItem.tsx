import { IStudent } from "../interfaces/IStudent";
import { updateStudent, deleteStudent } from "../zustand/studentStore";

type Props = {
  student: IStudent;
};

export default function StudentItem(props: Props) {
  return (
    <tr>
      <td>{props.student.studentId}</td>
      <td>{props.student.name}</td>
      <td>{props.student.email}</td>
      <td>{props.student.phone}</td>
      <td class='row'>
        <button type='button' onClick={() => updateStudent} class='waves-effect waves-light btn red col s12 m12 l6'>
          Delete
        </button>
        <button
          type='button'
          onClick={() => {
            deleteStudent(props.student.id);
          }}
          class='waves-effect waves-light btn col s12 m12 l6'
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
