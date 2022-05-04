const Resource = ({
  resource: {
    resource: { link, name },
  },
}) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={`./assets/images/resources/${name}.svg`} alt="" />
      </a>
    </li>
  );
};

export default Resource;
