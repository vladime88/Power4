import tableImport from 'table'
const { table } = tableImport
import readlineSync from 'readline-sync'

//let quest1 = readlineSync.question('Quel est votre équipe?: ')

let config, data, output

data = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

let choix = [
    'colonne 1',
    'colonne 2',
    'colonne 3',
    'colonne 4',
    'colonne 5',
    'colonne 6',
    'colonne 7',
]

let index = readlineSync.keyInSelect(choix, 'Choisis ta colonne: ')

switch (index) {
    case 0:
        console.log(
            /* if (quest1===X && data[0][0]='') {...} */ (data[0][0] = 'X')
        )

        break
    case 1:
        console.log((data[0][1] = '...'))
        break
    case 2:
        console.log((data[0][2] = '...'))
        break
    case 3:
        console.log((data[0][3] = '...'))
        break
    case 4:
        console.log((data[0][4] = '...'))
        break
    case 5:
        console.log((data[0][5] = '...'))
        break
    case 6:
        console.log((data[0][6] = 'X'))
        break
}

for (let i = 0; i < data.length; i++) {
    // console.log(tab[i])
    for (let j = 0; j < data[i].length; j++) {
        console.log(data[i][j])
    }
}

config = {
    border: {
        topBody: `─`,
        topJoin: `┬`,
        topLeft: `┌`,
        topRight: `┐`,

        bottomBody: `─`,
        bottomJoin: `┴`,
        bottomLeft: `└`,
        bottomRight: `┘`,

        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,

        joinBody: `─`,
        joinLeft: `├`,
        joinRight: `┤`,
        joinJoin: `┼`,
    },
}

output = table(data, config)

console.log(output)
