import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimpezaPage } from './limpeza.page';

describe('LimpezaPage', () => {
  let component: LimpezaPage;
  let fixture: ComponentFixture<LimpezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimpezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
