import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import du CommonModule
import { Router, RouterModule } from '@angular/router'; // Importer RouterModule
@Component({
  selector: 'app-client-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule], // Ajouter CommonModule ici
  templateUrl: './client-inscription.component.html',
  styleUrls: ['./client-inscription.component.css']
})
export class ClientInscriptionComponent {
  clientForm: any; // Déclaration de clientForm

  constructor(private router: Router, private fb: FormBuilder) {
    // Initialisation de clientForm dans le constructeur
    this.clientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      telephone: ['', [Validators.required, Validators.pattern('^\\d{8}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Méthode pour rediriger vers la page de connexion
  navigateToConnexion(): void {
    this.router.navigate(['/client-connexion']);
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Form Submitted', this.clientForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
