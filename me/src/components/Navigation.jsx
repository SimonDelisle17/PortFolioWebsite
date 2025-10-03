import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../store/slices/navigationSlice';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.navigation.activeSection);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'resume', label: 'RESUME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (sectionId) => {
    dispatch(setActiveSection(sectionId));
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">SD</span>
          <span className="logo-text">Simon Delisle</span>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-contact">
          <span className="phone-icon">📞</span>
          <span className="phone-number">Contact Me</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
