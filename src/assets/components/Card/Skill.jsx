import styled from "styled-components";

const SkillBar = styled.div`
  width: ${(props) => props.width};
`;

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
      <SkillBar className="skill-bar" width={skill.skill.percentage}></SkillBar>
      <div>
        <span className="skills-percentage">{skill.skill.percentage}</span>
      </div>
    </div>
  );
};

export default Skill;
