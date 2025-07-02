import icons from "./sprite.svg";

export const Icon = ({
  name,
  className = "",
  stroke = "currentColor",
  fill = "none",
}) => {
  return (
    <svg className={className} stroke={stroke} fill={fill} aria-hidden="true">
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
