import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NovoContribuinteComponent } from './componentes/novo-contribuinte/novo-contribuinte.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import { EditarContribuinteComponent } from './componentes/editar-contribuinte/editar-contribuinte.component';
import { MensagensComponent } from './componentes/mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    DetalhesComponent,
    NovoContribuinteComponent,
    FormularioComponent,
    EditarContribuinteComponent,
    MensagensComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule , HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
