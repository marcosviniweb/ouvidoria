import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrogPage } from './registrog.page';

describe('RegistrogPage', () => {
  let component: RegistrogPage;
  let fixture: ComponentFixture<RegistrogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
