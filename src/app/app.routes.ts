import { Routes } from '@angular/router';
import { ClientInscriptionComponent } from './client-inscription/client-inscription.component';
import { FournisseurInscriptionComponent } from './fournisseur-inscription/fournisseur-inscription.component';
import { ClientConnexionComponent } from './client-connexion/client-connexion.component';
import { FournisseurConnexionComponent } from './fournisseur-connexion/fournisseur-connexion.component';

export const routes: Routes = [

  { path: 'client-inscription', component: ClientInscriptionComponent },
  { path: 'fournisseur-inscription', component: FournisseurInscriptionComponent },
  { path: 'client-connexion', component: ClientConnexionComponent },
  { path: 'fournisseur-connexion', component: FournisseurConnexionComponent },
];
