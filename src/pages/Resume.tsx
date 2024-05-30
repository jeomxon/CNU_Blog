const Resume = () => {
  return (
    <div>
      <style jsx>{`
        .resume-container {
          width: 80%;
          margin: auto;
          overflow: hidden;
          padding: 20px;
          background: #fff;
          margin-top: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
          color: #333;
        }
        .contact-info, .education, .skills, .projects, .extracurricular, .activities {
          margin-bottom: 20px;
        }
        .contact-info p, .education p, .skills p, .projects p, .extracurricular p, .activities p {
          margin: 5px 0;
        }
        a {
          color: #007BFF;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="resume-container">
        <h1>Jeonghun Yu</h1>
        <div className="contact-info">
          <p>99, Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea</p>
          <p>+82-10-3213-7304</p>
          <p><a href="mailto:jeomxon@gmail.com">jeomxon@gmail.com</a></p>
          <p><a href="https://github.com/jeomxon" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/jeonghun-yu" target="_blank">LinkedIn</a></p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <p><strong>Bachelor of Science: Division of Computer Convergence</strong></p>
          <p>Chungnam National University – Daejeon, Republic of Korea</p>
          <p>03/2019 to 02/2026 (expected)</p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <p><strong>Frameworks:</strong> Spring-boot, Spring</p>
          <p><strong>Programming:</strong> Java, Python</p>
          <p><strong>Infrastructure:</strong> Docker, Jenkins, Github</p>
          <p><strong>Database:</strong> JPA, Query-DSL, Mysql, H2, Redis</p>
        </div>

        <div className="projects">
          <h2>Projects</h2>

          <h3>Votogether – Server Developer (06/2023 to Current)</h3>
          <p><a href="https://votogether.com/" target="_blank">Site URL</a></p>
          <p><a href="https://github.com/woowacourse-teams/2023-votogether/" target="_blank">Github Repository</a></p>
          <ul>
            <li>Implemented a comment and report notification function using Spring Event.</li>
            <li>Implemented object-oriented login function using OAuth2.0, JWT.</li>
            <li>Configured Redis test environment with TestContainers.</li>
            <li>Designed and applied nondisruptive deployment environments.</li>
            <li>Contributed to open source (Spring-Data-Jpa) - <a href="https://github.com/spring-projects/spring-data-jpa/pull/3120" target="_blank">Pull Request URL</a></li>
          </ul>

          <h3>Sikcal – Food Recommendation Service (06/2015 to 05/2018)</h3>
          <p><a href="https://github.com/sikcal/back-end-sikcal" target="_blank">Github Repository</a></p>
          <ul>
            <li>Processed public data of food using Python.</li>
            <li>Implemented essential nutrient statistical ratio logic.</li>
            <li>Configured infrastructure environment, including deployment scripts.</li>
            <li>Worked in a flexible environment for change through the Agile Process.</li>
          </ul>
        </div>

        <div className="extracurricular">
          <h2>Extracurricular Activities</h2>

          <h3>Woowacourse – Seoul (02/2023 ~ 11/2023)</h3>
          <p>Backend Course</p>
          <p><a href="https://github.com/jeomxon/woowacourse-record" target="_blank">Activity Record</a> | <a href="https://github.com/woowacourse/happypeople" target="_blank">Internal Work</a></p>
          <ul>
            <li>Experienced programming by learning the core concepts of Java programming.</li>
            <li>Experienced unit testing and refactoring for the implemented code.</li>
            <li>Developed web applications using Spring frameworks.</li>
            <li>Planned a meeting with junior developers for around a hundred people gathering (in Happypeople).</li>
          </ul>
        </div>

        <div className="activities">
          <h2>Activities – Knowledge Sharing</h2>

          <h3>Cache & Redis Presentation (08/2023)</h3>
          <p><a href="[youtube]" target="_blank">Youtube</a></p>
          <ul>
            <li>Announced cache with caching strategy patterns.</li>
            <li>Directed better choices for cache deployment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
