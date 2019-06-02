import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { UserDetailsComponent } from './user-details.component';

import userDetails from '../../assets/users.json';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [UserDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should return country name for given code`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(component.getCountryName('IN')).toEqual('India');
  });

  it('should display "Miss Anna Schmitt" as default selected user name', fakeAsync(() => {
    component.user = userDetails[0];
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement.querySelector('h1').textContent.trim()).toEqual('Miss Anna Schmitt');
  }));
});
