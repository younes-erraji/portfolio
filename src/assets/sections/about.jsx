import Socials from "../components/Socials";

import Avatar from "../images/avatar.png";

import Resume from "../resume.pdf";

const about = () => {
  return (
    <section className="about" id="about">
      <h2 className="special-heading">about me</h2>
      <p className="name">## 🙋 Younes ERRAJI</p>
      <div className="container">
        <div className="developer">
          <h3>I am Younes ERRAJI</h3>
          <p>
            I'm a passionate Full Stack Developer from Morocco.
            <br />I like to write code, I like to dig into problems and solve
            them. I also enjoy UI, UX, and design in general. I am working on
            developing my skills, Enthusiastic and self-taugh.
          </p>
          <a
            className="button secondary resume"
            href={Resume}
            download="resume"
            target="_blank"
            rel="noreferrer"
          >
            Get Resume
          </a>
          <Socials />
        </div>
        <div className="picture">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default about;
