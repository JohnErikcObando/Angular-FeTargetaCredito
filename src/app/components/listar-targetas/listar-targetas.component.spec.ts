import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTargetasComponent } from './listar-targetas.component';

describe('ListarTargetasComponent', () => {
  let component: ListarTargetasComponent;
  let fixture: ComponentFixture<ListarTargetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTargetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTargetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
