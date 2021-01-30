import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeursComponent } from './distributeurs.component';

describe('DistributeursComponent', () => {
  let component: DistributeursComponent;
  let fixture: ComponentFixture<DistributeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
