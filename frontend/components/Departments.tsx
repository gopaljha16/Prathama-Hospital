import { departments } from "./data";
import { Icon } from "./Icons";

export function Departments() {
  return (
    <section className="section compact-section" id="departments">
      <div className="container">
        <h2 className="section-title">Our Departments</h2>
        <div className="department-grid">
          {departments.map((department) => (
            <a className="department-item" href="#" key={department.name}>
              <span>
                <Icon name={department.icon} size={42} />
              </span>
              <strong>{department.name}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
