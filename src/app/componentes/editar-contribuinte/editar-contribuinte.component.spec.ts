import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContribuinteComponent } from './editar-contribuinte.component';

describe('EditarContribuinteComponent', () => {
  let component: EditarContribuinteComponent;
  let fixture: ComponentFixture<EditarContribuinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContribuinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
