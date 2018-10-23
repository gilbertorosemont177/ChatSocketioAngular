import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginchatComponent } from './loginchat.component';

describe('LoginchatComponent', () => {
  let component: LoginchatComponent;
  let fixture: ComponentFixture<LoginchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
