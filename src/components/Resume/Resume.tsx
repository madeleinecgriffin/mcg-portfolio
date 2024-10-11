// Projects.tsx
import React from 'react';
import './Resume.css';
import data from './../../resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Resume: React.FC = () => {
  return (
    <div className="component resume">
      <div className="row">
        <div className="col-md-12">
          <h2>Work Experience</h2>
        </div>
      </div>
      {data.map(section => (
        <div className="row resume-experience">
          <div className="col-md-4 col-sm-12">
            <span className="faded-half">{section.dates}</span>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="row resume-details">
              <div className="col-md-12">
                <span className="semi-bold">{section.title}</span>
                <span className="dash">–</span>
                <span>
                  <a href={section.website} target="_blank" rel="noopener noreferrer">
                    <span>{section.business} </span>
                    <FontAwesomeIcon className= "bullet-icon" icon={faExternalLinkAlt} />
                  </a>
                </span>
              </div>
            </div>
            <div className="row resume-details">
              <div className="col-md-12">
              {section.bullets.map(bullet => (
                  <p className="resume-bullet">• {bullet}</p>
              ))}
              </div>
            </div>
            <div className="row resume-details">
              <div className="col-md-12">
                <span className="faded-half">{section.stack}</span>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Resume;