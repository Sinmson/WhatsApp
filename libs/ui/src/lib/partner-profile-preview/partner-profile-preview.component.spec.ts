import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProfilePreviewComponent } from './partner-profile-preview.component';

describe('PartnerProfilePreviewComponent', () => {
  let component: PartnerProfilePreviewComponent;
  let fixture: ComponentFixture<PartnerProfilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerProfilePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProfilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
