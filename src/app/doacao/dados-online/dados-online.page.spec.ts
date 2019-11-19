import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosOnlinePage } from './dados-online.page';

describe('DadosOnlinePage', () => {
  let component: DadosOnlinePage;
  let fixture: ComponentFixture<DadosOnlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosOnlinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosOnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
