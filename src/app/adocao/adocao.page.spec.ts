import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocaoPage } from './adocao.page';

describe('AdocaoPage', () => {
  let component: AdocaoPage;
  let fixture: ComponentFixture<AdocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdocaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
