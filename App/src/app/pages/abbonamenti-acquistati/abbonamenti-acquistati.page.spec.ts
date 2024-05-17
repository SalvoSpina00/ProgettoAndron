import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbbonamentiAcquistatiPage } from './abbonamenti-acquistati.page';

describe('AbbonamentiAcquistatiPage', () => {
  let component: AbbonamentiAcquistatiPage;
  let fixture: ComponentFixture<AbbonamentiAcquistatiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbonamentiAcquistatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbbonamentiAcquistatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
