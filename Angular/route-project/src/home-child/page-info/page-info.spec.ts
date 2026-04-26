import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfo } from './page-info';

describe('PageInfo', () => {
  let component: PageInfo;
  let fixture: ComponentFixture<PageInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PageInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
