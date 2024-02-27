// Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  githubUrl: string;
  linkedinUrl: string;
}

const Footer: React.FC<FooterProps> = ({ githubUrl, linkedinUrl }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 footer-left">
            <p>© 2024 Madeleine Griffin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
