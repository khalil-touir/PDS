import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fournisseur-connexion',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './fournisseur-connexion.component.html',
  styleUrl: './fournisseur-connexion.component.css'
})
export class FournisseurConnexionComponent {

}
