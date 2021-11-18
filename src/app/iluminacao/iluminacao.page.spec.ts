import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IluminacaoPage } from './iluminacao.page';

describe('IluminacaoPage', () => {
  let component: IluminacaoPage;
  let fixture: ComponentFixture<IluminacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IluminacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
