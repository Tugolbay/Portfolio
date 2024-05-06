import { PortfolioItem } from "../../components/PortfolioItem";
import { portfolio, portfolio2 } from "../../data";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <h2 className="title">Commercial projects</h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>

      <h2 className="title2">Educational projects</h2>

      <div className="portfolio__container container grid">
        {portfolio2.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
