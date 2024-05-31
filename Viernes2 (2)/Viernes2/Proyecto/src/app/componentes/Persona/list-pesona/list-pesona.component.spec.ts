import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesonaComponent } from './list-pesona.component';

describe('ListPesonaComponent', () => {
  let component: ListPesonaComponent;
  let fixture: ComponentFixture<ListPesonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPesonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPesonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
