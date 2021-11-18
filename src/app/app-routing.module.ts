import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'home', loadChildren: './home/home.module#HomePageModule',canActivate: [AuthGuard]  },
   { path: 'home/:id', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard]  },
  { path: 'senha', loadChildren: () => import('./senha/senha.module').then( m => m.SenhaPageModule) },
  { path: 'registrog',loadChildren: () => import('./registrog/registrog.module').then( m => m.RegistrogPageModule)},
  {path: 'meusregistros',loadChildren: () => import('./meusregistros/meusregistros.module').then( m => m.MeusregistrosPageModule)},
  {path: 'meusregistros/:id',loadChildren: () => import('./meusregistros/meusregistros.module').then( m => m.MeusregistrosPageModule)},
  {path: 'remocao', loadChildren: () => import('./remocao/remocao.module').then( m => m.RemocaoPageModule)},
  {path: 'detalhes',loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)},
  {path: 'detalhes/:id',loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)},
  {path: 'mapa',loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)},
  {path: 'mapa/:id',loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)},
  {
    path: 'problemasaude',
    loadChildren: () => import('./problemasaude/problemasaude.module').then( m => m.ProblemasaudePageModule)
  },
  {
    path: 'focodoenca',
    loadChildren: () => import('./focodoenca/focodoenca.module').then( m => m.FocodoencaPageModule)
  },
  {
    path: 'saneamento',
    loadChildren: () => import('./saneamento/saneamento.module').then( m => m.SaneamentoPageModule)
  },
  {
    path: 'alagamento',
    loadChildren: () => import('./alagamento/alagamento.module').then( m => m.AlagamentoPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./seguranca/seguranca.module').then( m => m.SegurancaPageModule)
  },
  {
    path: 'buracos',
    loadChildren: () => import('./buracos/buracos.module').then( m => m.BuracosPageModule)
  },
  {
    path: 'iluminacao',
    loadChildren: () => import('./iluminacao/iluminacao.module').then( m => m.IluminacaoPageModule)
  },
  {
    path: 'limpeza',
    loadChildren: () => import('./limpeza/limpeza.module').then( m => m.LimpezaPageModule)
  },
  {
    path: 'fiscalizacao',
    loadChildren: () => import('./fiscalizacao/fiscalizacao.module').then( m => m.FiscalizacaoPageModule)
  },
  {
    path: 'arvores',
    loadChildren: () => import('./arvores/arvores.module').then( m => m.ArvoresPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'educacao',
    loadChildren: () => import('./educacao/educacao.module').then( m => m.EducacaoPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'anuncios',
    loadChildren: () => import('./anuncios/anuncios.module').then( m => m.AnunciosPageModule)
  },
  {
    path: 'contracheque',
    loadChildren: () => import('./contracheque/contracheque.module').then( m => m.ContrachequePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
