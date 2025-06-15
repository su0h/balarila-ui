import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruptionPageComponent } from './corruption-page.component';

describe('CorruptionPageComponent', () => {
  let component: CorruptionPageComponent;
  let fixture: ComponentFixture<CorruptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorruptionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorruptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
