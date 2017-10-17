import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashedPostsComponent } from './trashed-posts.component';

describe('TrashedPostsComponent', () => {
  let component: TrashedPostsComponent;
  let fixture: ComponentFixture<TrashedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
