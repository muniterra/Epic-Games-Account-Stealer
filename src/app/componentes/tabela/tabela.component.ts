import { MensagemService } from './../../services/mensagem.service';
import { RequestService } from '../../services/request.service';
import { Contribuinte } from '../../models/Contribuinte.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  contribuintes!: Contribuinte[];
  serverOn = true;

  constructor(
    private requestService: RequestService,
    private route: Router,
    private msgService: MensagemService
  ) {}

  ngOnInit(): void {
    this.requestService.buscarContribuintes().subscribe(
      (dados) => {
        this.ordenarContribuintes(dados);
        this.contribuintes = dados;
      },
      (erro) => {
        this.serverOn = false;
      }
    );
  }

  excluirContribuinte(contribuinte: Contribuinte) {
    this.requestService.excluirContribuinte(contribuinte).subscribe(
      () => {
        this.contribuintes = this.contribuintes.filter(
          (contribuinteFiltro) => contribuinteFiltro !== contribuinte
        );
        this.msgService.adicionarMensagem('Exclusão realizada com sucesso');
      },
      () => {
        this.msgService.adicionarMensagem(
          'Houve um problema na hora de realizar exclusão. Tente novamente mais tarde.'
        );
      }
    );
  }

  private ordenarContribuintes(dados: Contribuinte[]) {
    dados.sort((dado1, dados2) => {
      return dado1.nome < dados2.nome ? -1 : dado1.nome > dados2.nome ? 1 : 0;
    });
  }
}
