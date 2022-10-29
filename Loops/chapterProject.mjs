const multiplyTable = [];
const numValues = 11;
for (let i = 0; i < numValues; i++) {
  const temporary = [];
  for (let j = 0; j < numValues; j++) {
    temporary.push(i * j);
  }
  multiplyTable.push(temporary);
}

console.table(multiplyTable)