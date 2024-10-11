// ProfileCard.tsx
import React from 'react';
import './ProfileCard.css';

const ProfileCard: React.FC = () => {
  return (
    <div className="component row profile-card">
      <div className="row">        
        <div className="col-md-12">        
          <p>
            Hi, I'm a senior software engineer based in Chicago, IL. I write sleek, user-oriented code primarily using React, Typescipt, and C#, but I'm always interested in learning something new. 
          </p>
          <p>
            Check out my resume below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

