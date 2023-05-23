import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunButtonComponent } from './fun-button.component';

describe('FunButtonComponent', () => {
  let component: FunButtonComponent;
  let fixture: ComponentFixture<FunButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
