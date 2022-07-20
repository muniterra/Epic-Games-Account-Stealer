import { MensagemService } from './../../services/mensagem.service';
import { Router } from '@angular/router';
import { Contribuinte } from './../../models/Contribuinte.model';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-novo-contribuinte',
  templateUrl: './novo-contribuinte.component.html',
  styleUrls: ['./novo-contribuinte.component.css'],
})
export class NovoContribuinteComponent implements OnInit {
  btnText = 'cadastro';

  constructor(
    private requestService: RequestService,
    private route: Router,
    private msgService: MensagemService
  ) {}

  ngOnInit(): void {}

  submit(contribuinte: Contribuinte) {
    this.requestService.novoContribuinte(contribuinte).subscribe(
      () => {
        this.msgService.adicionarMensagem('Cadastro realizado com sucesso');
        this.route.navigateByUrl('/inicio');
      },
      () => {
        this.msgService.adicionarMensagem(
          'Houve um problema na hora de realizar o cadastro. Tente novamente mais tarde.'
        );
      }
    );
  }
}
