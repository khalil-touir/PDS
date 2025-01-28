import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';



@Component({
  selector: 'app-fournisseur-inscription',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './fournisseur-inscription.component.html',
  styleUrls: ['./fournisseur-inscription.component.css']
})
export class FournisseurInscriptionComponent {
  fournisseurForm: FormGroup;

  constructor(private fb: FormBuilder,private router :Router) {
    this.fournisseurForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Méthode pour rediriger vers la page de connexion
  navigateToConnexion(): void {
    this.router.navigate(['/client-connexion']);
  }
  onSubmit() {
    if (this.fournisseurForm.valid) {
      console.log('Form Submitted', this.fournisseurForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
