import moment from "moment";

export const formatDate = (date, format) => moment(date).format(format);

export const fixedDecimals = (value, decimalPlace) =>
  Number(value)
    .toFixed(decimalPlace)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const addComma = (value) =>
  Number(value) > 1000 ? fixedDecimals(value, 0) : fixedDecimals(value, 3);
