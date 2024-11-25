import { hex_sha256 } from "./sha256-min.mjs";

const entrada = 'GLORIOSO'; // Substitua aqui pela entrada esperada
const incremento = 'GLORIOSO';

const novoTarget = hex_sha256(entrada + incremento);
console.log('Novo target:', novoTarget);
