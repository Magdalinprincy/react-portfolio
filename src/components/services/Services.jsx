import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficiency in SAS fro analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to derive actionable insights from complex datasets.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong background in statistical analysis and hypothesis
                testing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in designing and implementing data visualization
                solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skilled in using SQL for data extraction and transformation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in building real-time monitoring dashboards with
                Power BI.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise in HTML5, CSS3, and JavaScript for building
                user-friendly websites.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in front-end frameworks like React.js and Next.js.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive web design to ensure compatibility across various
                devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of user authentication and payment gateways.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment and version control using GitHub and Vercel.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skill in creating engaging and informative content for websites
                and applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Content management and organization for improved user
                experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integration of multimedia elements, such as images and videos.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Regular content updates and maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong communication and collaboration skills for effective
                content development.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
