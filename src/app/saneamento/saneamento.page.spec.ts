import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaneamentoPage } from './saneamento.page';

describe('SaneamentoPage', () => {
  let component: SaneamentoPage;
  let fixture: ComponentFixture<SaneamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaneamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaneamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
