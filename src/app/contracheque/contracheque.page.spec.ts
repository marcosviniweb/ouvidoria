import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContrachequePage } from './contracheque.page';

describe('ContrachequePage', () => {
  let component: ContrachequePage;
  let fixture: ComponentFixture<ContrachequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrachequePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrachequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
