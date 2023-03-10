import React from "react";

const Portfolio = () => {
  return (
    <main>
      <div className="header-text">
        <h1>Portfolio 💼</h1>
      </div>
      <div className="rox">
        <div className="two-columns">
          <p>
            Here you can find a few of my projects. A few are school projects,
            most are personal. To see all of my projects, check out
            <a
              href="https://www.github.com/qvarnstr0m"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/qvarnstr0m
            </a>
          </p>
        </div>
        <div className="two-columns"></div>
      </div>
      <div className="row">
        <label for="notbot-modal">
          <div className="project-container" id="discord-project">
            <p className="project-header">NotBot</p>
            <p className="project-text">
              Discord bot with Notion and Trello interactions.
            </p>
          </div>
        </label>
        <label for="gittyup-modal">
          <div className="project-container" id="gittyup-project">
            <p className="project-header">GittyUp</p>
            <p className="project-text">
              List your latest Github events with this lightweight plugin.
            </p>
          </div>
        </label>
        <label for="usingef-modal">
          <div className="project-container" id="usingef-project">
            <p className="project-header">Using EF</p>
            <p className="project-text">
              Console app connected to a DB using Entity Framework.
            </p>
          </div>
        </label>
        <label for="kattis-modal">
          <div className="project-container" id="kattis-project">
            <p className="project-header">Kattis solutions</p>
            <p className="project-text">
              C# solutions to open.kattis.com coding challenges.
            </p>
          </div>
        </label>
        <label for="sut22-modal">
          <div className="project-container" id="discord-project">
            <p className="project-header">SUT22 Discord bot</p>
            <p className="project-text">
              Discord bot with webscraping function.
            </p>
          </div>
        </label>
        <label for="react-modal">
          <div className="project-container" id="react-project">
            <p className="project-header">React portfolio</p>
            <p className="project-text">
              Personal portfolio using Next.js and tailwind css.
            </p>
          </div>
        </label>
      </div>

      <input className="modal-state" id="notbot-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="notbot-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="notbot-modal"></label>
          <h2>NotBot</h2>
          <p>
            A Discord bot with integrations to Notion and Trello and other
            features. The bot is written in C# using the Discord.Net library.
          </p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/NotBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>

      <input className="modal-state" id="gittyup-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="gittyup-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="gittyup-modal"></label>
          <h2>GittyUp</h2>
          <p>
            A lightweight plugin made in JavaScript that lists a users latest
            Github events.
          </p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/GittyUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>

      <input className="modal-state" id="usingef-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="usingef-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="usingef-modal"></label>
          <h2>Using Entity Framework</h2>
          <p>
            A console app that connects to a database using Entity Framework.
            The app is written in C# and implements the Repository pattern and
            Unit of Work pattern.
          </p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/UsingEntityFramework"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>

      <input className="modal-state" id="kattis-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="kattis-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="kattis-modal"></label>
          <h2>Kattis Solutions</h2>
          <p>
            C# solutions to open.kattis.com coding challenges. The solutions are
            written in C# and are implemented using the .NET Core framework.
          </p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/KattisSolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>

      <input className="modal-state" id="sut22-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="sut22-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="sut22-modal"></label>
          <h2>SUT22 Discord Bot</h2>
          <p>
            A Discord bot with webscraping function. The bot is written in C#
            using the Discord.Net library.
          </p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/DiscordBotSUT22"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>

      <input className="modal-state" id="react-modal" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" for="react-modal"></label>
        <div className="modal__inner">
          <label className="modal__close" for="react-modal"></label>
          <h2>React Portfolio</h2>
          <p>Personal portfolio using Next.js and tailwind css.</p>
          <p>
            Visit the
            <a
              href="https://www.github.com/qvarnstr0m/NextJsTailwindPortfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
            for more information.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
