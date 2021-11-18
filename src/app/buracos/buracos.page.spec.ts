import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuracosPage } from './buracos.page';

describe('BuracosPage', () => {
  let component: BuracosPage;
  let fixture: ComponentFixture<BuracosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuracosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
