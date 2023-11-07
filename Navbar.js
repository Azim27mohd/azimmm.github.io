import Link from 'next/link';
import styles from './navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
