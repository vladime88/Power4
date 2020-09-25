import tableImport from 'table'
import readlineSync from 'readline-sync'

const { table } = tableImport
let config, data, output

let quest1 = readlineSync.question('Quel est votre équipe?: ')
let quest2 = readlineSync.question('Quelle colone?: ')

data = [
    [`${quest1}`, 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'],
]

config = {
    border: {
        topBody: `─`,
        topJoin: `+`,
        topLeft: `+`,
        topRight: `+`,

        bottomBody: `─`,
        bottomJoin: `+`,
        bottomLeft: `+`,
        bottomRight: `+`,

        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,

        joinBody: `─`,
        joinLeft: `+`,
        joinRight: `+`,
        joinJoin: `+`,
    },
}

output = table(data, config)

console.log(output)
const newData = (data) => data.splice('')
console.log(newData(data))
