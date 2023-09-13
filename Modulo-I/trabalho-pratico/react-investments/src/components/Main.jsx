import { sanitizedBackend } from "../api/api";
import {
  formatMoney,
  formatPercentage,
  getMonthDescription,
} from "../helpers/helpers";
import "./Main.css";

function getValueClassName(value) {
  if (value > 0) {
    return "text-green";
  }

  if (value < 0) {
    return "text-red";
  }

  return "text-bold";
}

export default function Main() {
  return (
    <main className="main-container">
      <ul>
        {sanitizedBackend.map((item) => {
          const { id, description, reports, balance, percentage } = item;

          const valueClassName = getValueClassName(percentage);

          return (
            <li key={id}>
              <h2>{description}</h2>
              <h3>
                <strong>Rendimento total:</strong>
                <span className={valueClassName}>
                  {formatMoney(balance)} ({formatPercentage(percentage, true)})
                </span>
              </h3>

              <ul>
                {reports.map((report) => {
                  const { id, value, percentage, year, month } = report;

                  const valueClassName = getValueClassName(percentage);

                  return (
                    <li key={id} className="li-2">
                      <span className="span-1">
                        {getMonthDescription(month)}/{year}
                      </span>
                      <span className={`span-2 ${valueClassName}`}>
                        {formatMoney(value)}
                      </span>
                      <span className={valueClassName}>
                        {formatPercentage(percentage, true)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
