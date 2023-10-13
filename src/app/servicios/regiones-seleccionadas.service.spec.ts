import { TestBed } from '@angular/core/testing';

import { RegionesSeleccionadasService } from './regiones-seleccionadas.service';

describe('RegionesSeleccionadasService', () => {
  let service: RegionesSeleccionadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionesSeleccionadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
