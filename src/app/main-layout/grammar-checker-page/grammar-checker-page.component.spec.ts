import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCheckerPageComponent } from './grammar-checker-page.component';

describe('GrammarCheckerPageComponent', () => {
  let component: GrammarCheckerPageComponent;
  let fixture: ComponentFixture<GrammarCheckerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarCheckerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarCheckerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
