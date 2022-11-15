import Processo from "../abstracoes/processo";
import MenuEditarCliente from "../menus/menuAtualizarCliente";
import MenuAtualizarCliente from "../menus/menuAtualizarCliente";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import EditarDataNascimentoCliente from "./editarDataNascimentoCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";
import EditarNomeCliente from "./editarNomeCliente";
import EditarCliente from "./editarNomeCliente";
import EditarNomeSocialCliente from "./editarNomeSocialCliente";
import ListagemDependentes from "./listagemDependente";
import ListagemTitular from "./listagemTitular";
import ListagemTitulares from "./listagemTitulares";

export default class TipoEditarCliente extends Processo {
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clienteIndex = clienteIndex
        this.menu = new MenuEditarCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new EditarNomeCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 2:
                this.processo = new EditarNomeSocialCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 3:
                this.processo = new EditarDataNascimentoCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 4:
                this.processo = new EditarEnderecoCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 5:
                this.processo = new EditarCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 6:
                this.processo = new EditarCliente(this.clienteIndex)
                this.processo.processar()
                break;
            case 7:
                this.processo = new EditarCliente(this.clienteIndex)
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}