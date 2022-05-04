import styled from "styled-components";

const SkillBar = styled.div`
  width: ${(props) => props.width};
`;

const Skill = ({
  skill: {
    skill: { icon, name, percentage },
  },
}) => {
  return (
    <div className="skills-data">
      <div className="skills-names">
        <img
          className="skill-icon"
          src={`./assets/icons/skills/${icon}`}
          alt=""
        />
        <span className="skill-name">{name}</span>
      </div>
      <SkillBar className="skill-bar" width={percentage}></SkillBar>
      <div>
        <span className="skills-percentage">{percentage}</span>
      </div>
    </div>
  );
};

export default Skill;
