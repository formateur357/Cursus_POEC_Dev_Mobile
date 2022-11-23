/*
 * ex02_ListerProprietes.js
 */

function ex02_Lister(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}
