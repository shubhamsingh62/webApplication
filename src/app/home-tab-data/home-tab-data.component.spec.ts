import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabDataComponent } from './home-tab-data.component';

describe('HomeTabDataComponent', () => {
  let component: HomeTabDataComponent;
  let fixture: ComponentFixture<HomeTabDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTabDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTabDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
