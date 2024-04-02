/* eslint-disable react/prop-types */
export const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className="theme__img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};
