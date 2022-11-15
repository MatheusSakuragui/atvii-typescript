import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class EditarNomeSocialCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
    }

    processar(): void {
        console.log('Edição do nome social do cliente...')
        let nomeSocial = this.entrada.receberTexto('Insira o nome social: ')
        this.clientes[this.clienteIndex].NomeSocial = nomeSocial 
        
    }
}