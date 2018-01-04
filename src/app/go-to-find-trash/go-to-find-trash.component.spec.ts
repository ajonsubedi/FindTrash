import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToFindTrashComponent } from './go-to-find-trash.component';

describe('GoToFindTrashComponent', () => {
  let component: GoToFindTrashComponent;
  let fixture: ComponentFixture<GoToFindTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToFindTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToFindTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
