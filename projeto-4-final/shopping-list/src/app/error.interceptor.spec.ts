import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ErrorInterceptor } from './error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

describe('ErrorInterceptor', () => {
  let interceptor: ErrorInterceptor;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.inject(ErrorInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should handle error', () => {
    const testRequest = httpMock.expectOne('/test-endpoint');
    testRequest.flush('Error occurred', { status: 500, statusText: 'Server Error' });

    interceptor.intercept(testRequest.request, {
      handle: () => throwError({ status: 500, message: 'Server Error' })
    }).subscribe(
      () => fail('Expected an error, not data'),
      (error) => {
        expect(error).toEqual(jasmine.objectContaining({ status: 500, message: 'Server Error' }));
      }
    );
  });
});