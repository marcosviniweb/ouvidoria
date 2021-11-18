import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArvoresPage } from './arvores.page';

describe('ArvoresPage', () => {
  let component: ArvoresPage;
  let fixture: ComponentFixture<ArvoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArvoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArvoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
