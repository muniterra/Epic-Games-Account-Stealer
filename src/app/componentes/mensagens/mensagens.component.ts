import { MensagemService } from './../../services/mensagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor(public msgService: MensagemService) { }

  ngOnInit(): void {
  }

}
