'Use strict';

function leftJoin(table1, table2) {
  // if (table1 === null || table2 === null) return null;
  let result = [];

  for (let i = 0; i <= table1.table.length - 1; i++) {
    if (table1.table[i]) {
      let key = [Object.keys(table1.table[i].head.value)[0]][0];
      let value = [Object.values(table1.table[i].head.value)[0]][0];
      result.push([key, value]);

      if (table1.table[i].head.next) {
        let current = table1.table[i].head.next;

        while (current) {
          let key = Object.keys(current.value)[0];
          let value = Object.values(current.value)[0];
          result.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= result.length - 1; j++) {
    let join = table2.get(result[j][0]);
    result[j].push(join);
  }
  return result.length === 0 ? null : result;
}

module.exports = leftJoin;