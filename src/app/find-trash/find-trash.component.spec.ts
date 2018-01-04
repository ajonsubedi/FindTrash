import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTrashComponent } from './find-trash.component';

describe('FindTrashComponent', () => {
  let component: FindTrashComponent;
  let fixture: ComponentFixture<FindTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
