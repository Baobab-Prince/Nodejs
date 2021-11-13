const chalk = require('chalk');

console.log(
  chalk.green('Congratulations! You are ') +
    chalk.hex('#ff0000').underline('FIRED!') +
    chalk.bgRed('GET OUT NOW!!!')
);
