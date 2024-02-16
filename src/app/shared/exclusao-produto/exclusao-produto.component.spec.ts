import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoProdutoComponent } from './exclusao-produto.component';

describe('ExclusaoProdutoComponent', () => {
  let component: ExclusaoProdutoComponent;
  let fixture: ComponentFixture<ExclusaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusaoProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
