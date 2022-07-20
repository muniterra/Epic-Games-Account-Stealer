import { Contribuinte } from './../../models/Contribuinte.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Contribuinte>();
  @Input() btnText!: string;
  @Input() contribuinte?: Contribuinte;
  contribuinteForm!: FormGroup;
  enderecoForm = this.fb.group({
    rua: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.contribuinteForm = this.fb.group({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      enderecos: this.fb.array([])
    });

    this.adicionarEndereco();
  }

  get nome() {
    return this.contribuinteForm.get('nome')!;
  }
  get email() {
    return this.contribuinteForm.get('email')!;
  }
  get cpf() {
    return this.contribuinteForm.get('cpf')!;
  }
  get telefone() {
    return this.contribuinteForm.get('telefone')!;
  }
  get celular() {
    return this.contribuinteForm.get('celular')!;
  }
  get rua() {
    return this.contribuinteForm.get('rua')!;
  }
  get numero() {
    return this.contribuinteForm.get('numero')!;
  }
  get bairro() {
    return this.contribuinteForm.get('bairro')!;
  }
  get cidade() {
    return this.contribuinteForm.get('cidade')!;
  }
  get cep() {
    return this.contribuinteForm.get('cep')!;
  }
  get estado() {
    return this.contribuinteForm.get('estado')!;
  }
  get pais() {
    return this.contribuinteForm.get('pais')!;
  }
  get enderecos() {
    return this.contribuinteForm.controls['enderecos'] as FormArray;
  }

  submit() {
    if (this.contribuinteForm.invalid) return;

    let contribuinteInfo = this.contribuinteForm.value;
    contribuinteInfo = this.tratarInfo(contribuinteInfo);

    this.onSubmit.emit(contribuinteInfo);
  }

  adicionarEndereco(){
    this.enderecos.push(this.enderecoForm);
  }

  private tratarInfo(infoForm: any) {
    let contribuinte = {
      id: infoForm.id,
      nome: infoForm.nome.toUpperCase(),
      email: infoForm.email,
      cpf: infoForm.cpf,
      telefone: infoForm.telefone,
      celular: infoForm.celular,
      enderecos: infoForm.enderecos
    };

    return contribuinte;
  }
}
