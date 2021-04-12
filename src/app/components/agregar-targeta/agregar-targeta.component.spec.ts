import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTargetaComponent } from './agregar-targeta.component';

describe('AgregarTargetaComponent', () => {
  let component: AgregarTargetaComponent;
  let fixture: ComponentFixture<AgregarTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
