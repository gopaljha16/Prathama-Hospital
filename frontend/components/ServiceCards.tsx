import { serviceCards } from "./data";
import { Icon } from "./Icons";

export function ServiceCards() {
  return (
    <section className="section services-section">
      <div className="container service-grid">
        {serviceCards.map((card) => (
          <article className="service-card" key={card.title}>
            <span className="service-icon">
              <Icon name={card.icon} size={42} />
            </span>
            <div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
            <a href="#appointment" aria-label={card.title}>
              <Icon name="arrowRight" size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
