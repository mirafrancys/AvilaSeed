import { TestBed } from '@angular/core/testing';

import { AuthGateway } from './auth.gateway';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

describe('AuthGateway', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let routerSpy: jasmine.SpyObj<Router>;
  let service: AuthGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    service = new AuthGateway(httpClientSpy, routerSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
