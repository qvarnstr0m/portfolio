import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const changeBg = () => {
      const secretArea = document.getElementById("secret");
    
      secretArea.onclick = () => {
        document.body.style.backgroundImage = "url('../src/assets/newbg.png')";
      };
    };
  
    changeBg();
  }, []);

  return (
    <main>
      <div>
        <h1>About me 👨‍💻</h1>
      </div>
      <div className="row">
        <div className="two-columns">
          <p>
            Writing about oneself is always hard, so I asked chatGPT to write a
            little story about me, and we are quite happy with the result, even
            though chatGPT insisted on speculating on my future after my current
            situation:
            <br />
            <br />
            Once upon a time, there was a man who dabbled in building web pages
            as a hobby in his spare time. He enjoyed tinkering with code and
            designing websites, but he never considered pursuing it as a career.
            Instead, he followed a different path, one that led him to a job he
            didn't love and left him feeling unfulfilled.
            <br />
            <br />
            Years later, while browsing the internet, he stumbled upon an
            article about the latest advancements in software development.
            Intrigued, he began to read more and realized that his passion for
            programming had never really gone away. He decided to pursue it
            seriously this time and make it his mission to work in software
            development.
            <br />
            <br />
            He enrolled in an intensive two-year program in development, where
            he studied everything from basic programming concepts to advanced
            software engineering practices. He spent countless hours working on
            assignments, building projects, and collaborating with other
            students. It wasn't always easy, but he was determined to succeed.
            <br />
            <br />
            After completing the program, he landed a job at a startup company
            where he worked alongside a team of talented developers. Together,
            they built innovative applications that changed the way people lived
            their lives. He felt a sense of fulfillment that he had never
            experienced before. He was excited to wake up every day and work on
            projects that made a difference in the world.
            <br />
            <br />
            As time passed, he gained a reputation as a skilled developer. He
            received job offers from some of the biggest tech companies in the
            industry, but he wasn't interested in chasing fame or fortune. He
            had found his passion, and that was all that mattered. He continued
            to work in software development, always striving to improve his
            skills and make a difference in the world. He mentored young
            developers, volunteered his time to teach coding to underprivileged
            children, and even started his own software development company.
            <br />
            <br />
            Looking back, he realized that his years away from programming had
            actually helped him become a better developer. He had gained
            valuable experience and skills in other areas that he could now
            apply to his work. He had found his way back to programming, and he
            was grateful for the journey that had brought him there.
            <br />
            <br />
            me and chat.openai.com, 2023
          </p>
        </div>
        <div className="two-columns">
          <p>
            Through my educations, own projects and contributions to open source
            projects I have experience with:
          </p>
          <h4>Languages</h4>
          <ul className="experience-list">
            <li>C#</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h4>Frameworks & platforms</h4>
          <ul className="experience-list">
            <li>.NET</li>
            <li>Entity Framework</li>
            <li>React / Next.js</li>
            <li>Node.js</li>
          </ul>
          <h4>Tools and misc.</h4>
          <ul className="experience-list">
            <li id="secret">Jetbrains Rider</li>
            <li>Jetbrains DataGrip</li>
            <li>Visual Studio Code</li>
            <li>Visual Studio 2022</li>
            <li>Microsoft SQL Server</li>
            <li>Git / Github</li>
            <li>Scrum, Kanban & agile work methods</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
