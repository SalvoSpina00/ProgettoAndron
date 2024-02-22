import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrizioneTransazionePage } from './descrizione-transazione.page';

describe('DescrizioneTransazionePage', () => {
  let component: DescrizioneTransazionePage;
  let fixture: ComponentFixture<DescrizioneTransazionePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrizioneTransazionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrizioneTransazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
