import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material';

import { FilterUserPipe } from './../filter-user.pipe';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './../user-details/user-details.component';

import userDetails from '../../assets/users.json';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule, ScrollingModule],
      declarations: [FilterUserPipe, UsersComponent, UserDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    component.users = userDetails;
    fixture.detectChanges();
  });

  describe('initialisation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(`should have total 25 users'`, () => {
      expect(component.users.length).toEqual(25);
    });

    it('should display search box', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('input').length).toEqual(1);
    }));

    it('should bind app-user-details component to send selected user details', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('app-user-details').length).toEqual(1);
    }));

    it('should bind app-user-details component to send selected user details', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('app-user-details').length).toEqual(1);
    }));
  });
});
