import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosPage } from './dados-bancarios.page';

describe('DadosBancariosPage', () => {
  let component: DadosBancariosPage;
  let fixture: ComponentFixture<DadosBancariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosBancariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
