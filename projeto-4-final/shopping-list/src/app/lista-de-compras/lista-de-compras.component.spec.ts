import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; 
import { ListaDeComprasComponent } from './lista-de-compras.component';

describe('ListaDeCompras', () => {
  let component: ListaDeComprasComponent;
  let fixture: ComponentFixture<ListaDeComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeComprasComponent], 
      imports: [CommonModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});