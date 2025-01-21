import logo from "../assets/logo.jpg"
import { useState } from "react"


export const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
  
    const toggleDropdown = (menu) => {
      setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
      <div className="header">
        <nav style={styles.nav}>
          <ul style={styles.navList}>
        <li style={styles.navItem}>
          <button style={styles.navButton} onClick={() => toggleDropdown('menu1')}>
            Menu 1
          </button>

          {openDropdown === 'menu1' && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}>Option 1</li>
              <li style={styles.dropdownItem}>Option 2</li>
              <li style={styles.dropdownItem}>Option 3</li>
            </ul>
          )}
        </li>
        <li style={styles.navItem}>
          <button style={styles.navButton}onClick={() => toggleDropdown('menu2')}>
            Menu 2
          </button>
          {openDropdown === 'menu2' && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}>Option A</li>
              <li style={styles.dropdownItem}>Option B</li>
              <li style={styles.dropdownItem}>Option C</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
        {/* <img className="logo" src={logo}/> */}
      </div>
    )

    
  }

  const styles = {
    nav: { backgroundColor: '#333', padding: '10px' },
    navList: { listStyle: 'none', margin: 0, padding: 0, display: 'flex' },
    navItem: { position: 'relative', marginRight: '20px' },
    navButton: { background: 'none', border: 'none', color: 'white', cursor: 'pointer' },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      listStyle: 'none',
      margin: 0,
      padding: '10px',
      border: '1px solid #ccc',
    },
    dropdownItem: { marginBottom: '10px', cursor: 'pointer' },
  };
  