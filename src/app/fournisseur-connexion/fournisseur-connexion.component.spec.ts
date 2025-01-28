import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurConnexionComponent } from './fournisseur-connexion.component';

describe('FournisseurConnexionComponent', () => {
  let component: FournisseurConnexionComponent;
  let fixture: ComponentFixture<FournisseurConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournisseurConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
