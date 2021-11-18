import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemocaoPage } from './remocao.page';

describe('RemocaoPage', () => {
  let component: RemocaoPage;
  let fixture: ComponentFixture<RemocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemocaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
