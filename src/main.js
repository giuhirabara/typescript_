"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const name = prompt('Nome:');
const num1Str = prompt('Insira um valor:');
;
const num2Str = prompt('Insira outro valor:');
const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const mult = num1 * num2;
console.log(`Olá: ${name}. O valor da multiplicação é: ${mult}`);
