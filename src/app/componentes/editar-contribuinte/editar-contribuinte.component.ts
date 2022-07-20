import { Contribuinte } from './../../models/Contribuinte.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-editar-contribuinte',
  templateUrl: './editar-contribuinte.component.html',
  styleUrls: ['./editar-contribuinte.component.css'],
})
export class EditarContribuinteComponent implements OnInit {
  btnText = 'edição';
  contribuinte!: Contribuinte;

  constructor(
    private actRoute: ActivatedRoute,
    private requestService: RequestService,
    private msgService: MensagemService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));

    this.requestService.buscarContribuinte(id).subscribe(
      (contribuinte) => {
        this.contribuinte = contribuinte;
      },
      () => {
        this.msgService.adicionarMensagem(
          'Houve um problema para resgatar as informações do usuário. Tente novamente mais tarde.'
        );
        this.route.navigateByUrl('/inicio');
      }
    );



  }

  editarContribuinte(contribuinte: Contribuinte) {
    const id = this.contribuinte.id;

    this.requestService.editarContribuinte(id!, contribuinte).subscribe(
      () => {
        this.msgService.adicionarMensagem('Edição realizada com sucesso');
        this.route.navigateByUrl('/inicio');
      },
      () => {
        this.msgService.adicionarMensagem(
          'Houve um problema na hora de realizar a edição. Tente novamente mais tarde.'
        );
      }
    );
  }
}
