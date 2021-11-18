import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusregistrosPage } from './meusregistros.page';

describe('MeusregistrosPage', () => {
  let component: MeusregistrosPage;
  let fixture: ComponentFixture<MeusregistrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusregistrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusregistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
