import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwanBikeComponent } from './taiwan-bike.component';

describe('TaiwanBikeComponent', () => {
  let component: TaiwanBikeComponent;
  let fixture: ComponentFixture<TaiwanBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiwanBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiwanBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
