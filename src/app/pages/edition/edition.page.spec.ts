import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPage } from './edition.page';

describe('EditionPage', () => {
  let component: EditionPage;
  let fixture: ComponentFixture<EditionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
