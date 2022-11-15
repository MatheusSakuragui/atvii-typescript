import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class EditarNomeCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
    }

    processar(): void {
        console.log('Edição do nome do cliente...')
        let nome = this.entrada.receberTexto('Insira o nome: ')
        this.clientes[this.clienteIndex].Nome = nome 
    }
}