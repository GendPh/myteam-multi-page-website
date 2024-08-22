import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsSectionComponent } from './directors-section.component';

describe('DirectorsSectionComponent', () => {
  let component: DirectorsSectionComponent;
  let fixture: ComponentFixture<DirectorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
