import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFactsComponent } from './movie-facts.component';

describe('MovieFactsComponent', () => {
  let component: MovieFactsComponent;
  let fixture: ComponentFixture<MovieFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
