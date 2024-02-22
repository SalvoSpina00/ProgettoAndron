import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RichiesteMiePage } from './richieste-mie.page';

describe('RichiesteMiePage', () => {
  let component: RichiesteMiePage;
  let fixture: ComponentFixture<RichiesteMiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiesteMiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RichiesteMiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
