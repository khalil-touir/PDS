import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurInscriptionComponent } from './fournisseur-inscription.component';

describe('FournisseurInscriptionComponent', () => {
  let component: FournisseurInscriptionComponent;
  let fixture: ComponentFixture<FournisseurInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournisseurInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
