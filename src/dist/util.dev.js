"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currencyFormatter = void 0;
var currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0
});
exports.currencyFormatter = currencyFormatter;