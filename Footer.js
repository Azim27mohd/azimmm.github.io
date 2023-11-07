import styles from './footer.module.css'; // Import the CSS module

const Footer = () => {
  return <footer className={styles.footer}> {/* Apply the CSS class */}
    &copy; New Generation High School
  </footer>;
};

export default Footer;

