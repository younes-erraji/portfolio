const Resource = ({ resource }) => {
  return (
    <li>
      <a href={resource.resource.link} target="_blank" rel="noreferrer">
        <img
          src={`./assets/images/resources/${resource.resource.name}.svg`}
          alt=""
        />
      </a>
    </li>
  );
};

export default Resource;
