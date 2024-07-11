import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCursoCentroComponent } from './selector-curso-centro.component';

describe('SelectorCursoCentroComponent', () => {
  let component: SelectorCursoCentroComponent;
  let fixture: ComponentFixture<SelectorCursoCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorCursoCentroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorCursoCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
