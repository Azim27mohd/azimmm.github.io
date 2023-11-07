import Student from './Student';
import styles from './StudentList.module.css'; // Import the CSS module

const StudentList = ({ students }) => {
  return (
    <div className={styles['student-list']}> {/* Apply the CSS class */}
      <h2 className={styles['list-title']}>Student List</h2> {/* Apply the CSS class */}
      <ul>
        {students.map((student) => (
          <li className={styles['student-item']} key={student.id}> {/* Apply the CSS class */}
            <Student student={student} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
