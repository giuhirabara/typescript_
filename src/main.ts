import PromptSync, * as promptSync from 'prompt-sync'

const prompt = PromptSync();

const name = prompt('Nome:');
const num1Str = prompt('Insira um valor:');;
const num2Str = prompt('Insira outro valor:');

const num1: number = parseInt(num1Str);
const num2: number = parseInt(num2Str);

const mult = num1 * num2;

console.log(`Olá: ${name}. O valor da multiplicação é: ${mult}`)