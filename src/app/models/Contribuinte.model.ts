export interface Contribuinte {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  telefone: string;
  enderecos: [
    {
      bairro: string;
      cidade: string;
      cep: string;
      estado: string;
      numero: string;
      pais: string;
      rua: string;
    }
  ];
}
