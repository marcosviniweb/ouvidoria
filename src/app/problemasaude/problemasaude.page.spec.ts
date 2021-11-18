import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemasaudePage } from './problemasaude.page';

describe('ProblemasaudePage', () => {
  let component: ProblemasaudePage;
  let fixture: ComponentFixture<ProblemasaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemasaudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemasaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
