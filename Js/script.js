import { hex_sha256 } from "./sha256-min.mjs";

const target = 'b0d5d63bf95baa0b4a3528208ea2b883d3178657c0a8bd4469ae753041f2f5de';
const incremento = 'GLORIOSO';
const mensagem =  document.getElementById('mensagem')

document.getElementById('loginBtn').onclick = () =>{
    const entrada = document.getElementById('senha').value;
    if (hex_sha256(entrada + incremento) === target){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'jogadores.html';
    }
    
    else{
        mensagem.innerHTML = 'Senha incorreta';
    }
}
