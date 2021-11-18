import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FocodoencaPage } from './focodoenca.page';

describe('FocodoencaPage', () => {
  let component: FocodoencaPage;
  let fixture: ComponentFixture<FocodoencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocodoencaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FocodoencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
