import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicstripComponent } from './comicstrip.component';

describe('ComicstripComponent', () => {
  let component: ComicstripComponent;
  let fixture: ComponentFixture<ComicstripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicstripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
