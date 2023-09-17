import StudentItem from "./StudentItem";

export default function StudentList() {
  return (
    <table class='highlight'>
      <thead>
        <tr>
          <th>Mã SV</th>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <StudentItem />
      </tbody>
    </table>
  );
}
