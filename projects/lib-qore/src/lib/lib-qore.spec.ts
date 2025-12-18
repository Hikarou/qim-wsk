import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibQore } from './lib-qore';

describe('LibQore', () => {
  let component: LibQore;
  let fixture: ComponentFixture<LibQore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibQore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibQore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
