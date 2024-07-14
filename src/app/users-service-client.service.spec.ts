import { TestBed } from '@angular/core/testing';

import { UsersServiceClientService } from './users-service-client.service';

describe('UsersServiceClientService', () => {
  let service: UsersServiceClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiceClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
