import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  mensagem: String = '';

  constructor() { }

  adicionarMensagem(mensagem: string) {
    this.mensagem = mensagem;

    setTimeout(() => {
      this.limparForm();
    }, 4000)
  }

  limparForm() {
    this.mensagem = '';
  }
}
