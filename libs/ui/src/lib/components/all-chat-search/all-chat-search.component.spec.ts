import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChatSearchComponent } from './all-chat-search.component';

describe('AllChatSearchComponent', () => {
  let component: AllChatSearchComponent;
  let fixture: ComponentFixture<AllChatSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChatSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
