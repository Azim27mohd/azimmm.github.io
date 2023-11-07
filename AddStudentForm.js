import React, { useState } from 'react';
import styles from './AddStudentForm.module.css'; // Import the CSS module

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    currentGrade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      currentGrade: '',
    });
  };

  return (
    <div className={styles['form-container']}>
      <h2 className={styles['form-title']}>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={styles['form-input']}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={styles['form-input']}
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={styles['form-input']}
          required
        />
        <input
          type="number"
          name="currentGrade"
          placeholder="Current Grade"
          value={formData.currentGrade}
          onChange={handleChange}
          className={styles['form-input']}
          required
        />
        <button type="submit" className={styles['form-submit']}>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
