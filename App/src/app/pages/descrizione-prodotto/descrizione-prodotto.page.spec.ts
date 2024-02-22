import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrizioneProdottoPage } from './descrizione-prodotto.page';

describe('DescrizioneProdottoPage', () => {
  let component: DescrizioneProdottoPage;
  let fixture: ComponentFixture<DescrizioneProdottoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrizioneProdottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrizioneProdottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
