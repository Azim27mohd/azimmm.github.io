import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentList from '../components/StudentList';
import AddStudentForm from '../components/AddStudentForm';
import studentData from '../students.json';
import styles from './Home.module.css'; // Import the CSS file

const Home = () => {
  const [students, setStudents] = useState(studentData.students);

  const addStudent = (newStudent) => {
    // Generate a unique ID for the new student (in a real application, you'd use a database)
    const newId = Math.max(...students.map((s) => s.id)) + 1;

    const updatedStudents = [...students, { id: newId, ...newStudent }];
    setStudents(updatedStudents);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}> {/* Apply the CSS class */}
        <h1 className={styles.title}>New Generation High School</h1> {/* Apply the CSS class */}
        <StudentList students={students} />
        <AddStudentForm onAddStudent={addStudent} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
