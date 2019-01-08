import { TestBed, async } from '@angular/core/testing';
import { AddClientComponent } from './add-client.component';

describe('AddClientComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddClientComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AddClientComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.added).toEqual(true);
  }));

});
