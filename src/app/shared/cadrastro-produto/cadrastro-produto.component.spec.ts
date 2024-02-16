import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadrastroProdutoComponent } from './cadrastro-produto.component';

describe('CadrastroProdutoComponent', () => {
  let component: CadrastroProdutoComponent;
  let fixture: ComponentFixture<CadrastroProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadrastroProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadrastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
