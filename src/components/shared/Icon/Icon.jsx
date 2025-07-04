import icons from "./sprite.svg";

export const Icon = ({ name, classname }) => {
  return (
    <svg className={classname}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
