// Header.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

interface HeaderProps {
  githubUrl: string;
  linkedinUrl: string;
}

const Header: React.FC<HeaderProps> = ({ githubUrl, linkedinUrl }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <nav>
            <ul className="nav-links">
              <h1><a href="/">Madeleine Griffin</a></h1>
              <ul className="right-links">
                <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                <li><a href={githubUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a></li>
              </ul>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

