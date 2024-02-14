import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.green.italic("servidor iniciado"));

console.log(logSymbols.error, chalk.red.italic("servidor com problema"));
