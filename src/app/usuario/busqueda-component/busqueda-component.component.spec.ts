import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaComponentComponent } from './busqueda-component.component';

describe('BusquedaComponentComponent', () => {
  let component: BusquedaComponentComponent;
  let fixture: ComponentFixture<BusquedaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
