import Processo from "../abstracoes/processo";
import Principal from "../processos/principal";
import GerarScript from "../script/script";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let script = new GerarScript()
script.gerar()
console.log("--- O SISTEMA JÁ POSSUI CLIENTES CADASTRADOS PREVIAMENTE ---")

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}