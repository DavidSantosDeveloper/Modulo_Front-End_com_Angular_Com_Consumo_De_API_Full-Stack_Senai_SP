import { TestBed } from '@angular/core/testing';

import { ControleGuard } from './controle.guard';

describe('ControleGuard', () => {
  let guard: ControleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
