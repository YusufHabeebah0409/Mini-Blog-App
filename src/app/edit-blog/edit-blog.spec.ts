import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlog } from './edit-blog';

describe('EditBlog', () => {
  let component: EditBlog;
  let fixture: ComponentFixture<EditBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
