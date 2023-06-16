var Filter = require("bad-words");

const filter = new Filter();

export function clean(obj) {
  const str = JSON.stringify(obj);
  const cleaned = filter.clean(str);
  return JSON.parse(cleaned);
}
