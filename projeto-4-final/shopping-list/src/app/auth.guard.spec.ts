import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const authServiceMock = {
    isAuthenticated$: jasmine.createSpy('isAuthenticated$').and.returnValue(true), 
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: {} }, 
      ],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});