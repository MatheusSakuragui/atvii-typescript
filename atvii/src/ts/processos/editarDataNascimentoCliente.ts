import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class EditarDataNascimentoCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
    }

    processar(): void {
        console.log('Edição da data de nascimento do cliente...')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        this.clientes[this.clienteIndex].DataNascimento = dataNascimento 
        
    }
}