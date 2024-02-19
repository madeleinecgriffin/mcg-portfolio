// ProfileCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ProfileCard.css';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  githubUrl: string;
  linkedinUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title, githubUrl, linkedinUrl }) => {
  return (
    <div className="component profile-card">
      <div className="profile-image">
        <img src={imageUrl} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{title}</p>
        <div className="social-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-button github">
            <FontAwesomeIcon icon={faGithub} />
            <span className="button-text">GitHub</span>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="button-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

