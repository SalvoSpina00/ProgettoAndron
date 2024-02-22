import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RichiesteMieiServiziPage } from './richieste-miei-servizi.page';

describe('RichiesteMieiServiziPage', () => {
  let component: RichiesteMieiServiziPage;
  let fixture: ComponentFixture<RichiesteMieiServiziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiesteMieiServiziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RichiesteMieiServiziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
