const fs = require("fs");

let data = fs.readFileSync('test.csv');
let stringData = data.toString();

const lines = stringData.split('\n')
const result = []
const headers = lines[0].split(',')

lines.map(l => {
  const obj = {}
  const line = l.split(',')

  headers.map((h, i) => {
    obj[h] = line[i]
  })

  result.push(obj)
})

let jArray = JSON.stringify(result)

fs.writeFile('test.json', jArray, function (err) {
  if (err) return console.log(err);
});

console.log(jArray);