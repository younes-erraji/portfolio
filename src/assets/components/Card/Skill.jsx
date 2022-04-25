const Skill = ({ skill }) => {
  return (
    <div className="skills-data">
      <div className="skills-names">
        <img
          className="skill-icon"
          src={`./assets/icons/skills/${skill.skill.icon}`}
          alt=""
        />
        <span className="skill-name">{skill.skill.name}</span>
      </div>
      <div
        className="skill-bar"
        style={{ width: skill.skill.percentage }}
      ></div>
      <div>
        <span className="skills-percentage">{skill.skill.percentage}</span>
      </div>
    </div>
  );
};

export default Skill;
