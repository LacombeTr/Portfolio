import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPhotosComponent } from './portfolio-photos.component';

describe('PortfolioPhotosComponent', () => {
  let component: PortfolioPhotosComponent;
  let fixture: ComponentFixture<PortfolioPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
