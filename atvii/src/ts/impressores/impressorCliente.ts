import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDependentes from "./impressorDependentes";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressaorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(index?: number): string { 
        let impressao = `**********************************************************************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        if(index != undefined ){
            impressao = `************* INDEX DO CLIENTE: ${index.toString()} *************` + impressao
        }

        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        //this.impressor = new ImpressorDependentes(this.cliente.Dependentes)
        //impressao = impressao + `\n${this.impressor.imprimir()}`

        if(this.cliente.Titular != undefined){
            impressao = impressao + `----------------- Titular -------------\n` 
            this.impressor = new ImpressaorCliente(this.cliente.Titular)
            impressao = impressao + `\n${this.impressor.imprimir()}`
            impressao = impressao + `\n-------------------------------------------------------------`
        }


        impressao = impressao + `\n**********************************************************************************`
        return impressao
    }

}