import icons from "./sprite.svg";

export const Icon = ({ name, className }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
