import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlagamentoPage } from './alagamento.page';

describe('AlagamentoPage', () => {
  let component: AlagamentoPage;
  let fixture: ComponentFixture<AlagamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlagamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
