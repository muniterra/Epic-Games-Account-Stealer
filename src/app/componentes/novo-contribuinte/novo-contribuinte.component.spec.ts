import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoContribuinteComponent } from './novo-contribuinte.component';

describe('NovoContribuinteComponent', () => {
  let component: NovoContribuinteComponent;
  let fixture: ComponentFixture<NovoContribuinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoContribuinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
