import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcquistaAbbonamentoPage } from './acquista-abbonamento.page';

describe('AcquistaAbbonamentoPage', () => {
  let component: AcquistaAbbonamentoPage;
  let fixture: ComponentFixture<AcquistaAbbonamentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistaAbbonamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcquistaAbbonamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
