import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdTableComponent } from './bird-table.component';

describe('BirdTableComponent', () => {
  let component: BirdTableComponent;
  let fixture: ComponentFixture<BirdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
