import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegurancaPage } from './seguranca.page';

describe('SegurancaPage', () => {
  let component: SegurancaPage;
  let fixture: ComponentFixture<SegurancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegurancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
