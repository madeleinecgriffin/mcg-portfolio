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
          <h2>Skills</h2>
        </div>
      </div>
      <div className="row resume-skills">
        <div className="col-md-4 col-sm-12">
          <span className="faded-half">Languages & Frameworks:</span>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row resume-details">
            <div className="col-md-12">
              <span>C# (.NET, ASP.NET), Javascript (React, Angular, Node.js, Express), Typescript, Python, HTML5, CSS, SQL, GraphQL, JSON</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row resume-skills">
        <div className="col-md-4 col-sm-12">
          <span className="faded-half">Databases:</span>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row resume-details">
            <div className="col-md-12">
              <span>MySQL, Microsoft SQL Server, MongoDB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row resume-skills">
        <div className="col-md-4 col-sm-12">
          <span className="faded-half">Development Tools & Practices:</span>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row resume-details">
            <div className="col-md-12">
              <span>Git, Object-Oriented Programming, Agile Methodologies, Docker, Visual Studio, Visual Studio Code, Jira, Azure, Scrum, Full-Stack Development, ADA Compliance, MVC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row resume-section">
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
      <div className="row resume-section">
        <div className="col-md-12">
          <h2>Education</h2>
        </div>
      </div>
      <div className="row resume-skills">
        <div className="col-md-4 col-sm-12">
          <span className="faded-half">May 2016</span>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row resume-details">
            <div className="col-md-12">
              <span className="semi-bold">Purdue University, West Lafayette, IN</span>
              <br/>
              <span>B.S. Biomedical Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;