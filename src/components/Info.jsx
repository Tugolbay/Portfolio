import { personalInfo } from "../data";

export const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="description">{description}</span>
          </li>
        );
      })}
    </>
  );
};
