import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrashbinsComponent } from './list-of-trashbins.component';

describe('ListOfTrashbinsComponent', () => {
  let component: ListOfTrashbinsComponent;
  let fixture: ComponentFixture<ListOfTrashbinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTrashbinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTrashbinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
