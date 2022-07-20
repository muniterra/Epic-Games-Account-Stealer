import { EditarContribuinteComponent } from './componentes/editar-contribuinte/editar-contribuinte.component';
import { NovoContribuinteComponent } from './componentes/novo-contribuinte/novo-contribuinte.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './componentes/tabela/tabela.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: TabelaComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'novo-contribuinte', component: NovoContribuinteComponent },
  { path: 'editar/:id', component: EditarContribuinteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
