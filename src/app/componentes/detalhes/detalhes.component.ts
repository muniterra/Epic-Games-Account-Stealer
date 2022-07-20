import { MensagemService } from './../../services/mensagem.service';
import { RequestService } from 'src/app/services/request.service';
import { Contribuinte } from './../../models/Contribuinte.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
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


}
