const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('QUAL SEU NOME:  ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`BEM VINDO: ${answer}`);

    rl.close();
});