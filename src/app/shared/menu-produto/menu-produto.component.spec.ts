import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProdutoComponent } from './menu-produto.component';

describe('MenuProdutoComponent', () => {
  let component: MenuProdutoComponent;
  let fixture: ComponentFixture<MenuProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
