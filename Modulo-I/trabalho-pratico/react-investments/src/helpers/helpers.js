const MONTHS = [
  "",
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export function getMonthDescription(monthNumber) {
  return MONTHS[monthNumber];
}

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatMoney(value) {
  return moneyFormatter.format(value);
}

export function formatPercentage(value, putPlusSign = false) {
  return (
    (value > 0 && putPlusSign ? "+" : "") +
    value.toFixed(2).replace(".", ",") +
    "%"
  );
}
