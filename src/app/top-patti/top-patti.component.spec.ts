import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPattiComponent } from './top-patti.component';

describe('TopPattiComponent', () => {
  let component: TopPattiComponent;
  let fixture: ComponentFixture<TopPattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
