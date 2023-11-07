import styles from './Student.module.css'; // Import the CSS module

const Student = ({ student }) => {
  return (
    <li className={styles['student']}> {/* Apply the CSS class */}
      <strong className={styles['student-name']}>{student.firstName} {student.lastName}</strong> {/* Apply the CSS class */}
      <br />
      Date of Birth: {student.dateOfBirth}
      <br />
      Current Grade: {student.currentGrade}
    </li>
  );
};

export default Student;

