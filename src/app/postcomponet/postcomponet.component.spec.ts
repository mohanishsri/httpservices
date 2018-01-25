import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcomponetComponent } from './postcomponet.component';

describe('PostcomponetComponent', () => {
  let component: PostcomponetComponent;
  let fixture: ComponentFixture<PostcomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
