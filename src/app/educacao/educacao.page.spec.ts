import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducacaoPage } from './educacao.page';

describe('EducacaoPage', () => {
  let component: EducacaoPage;
  let fixture: ComponentFixture<EducacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
