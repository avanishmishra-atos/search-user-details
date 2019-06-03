import { Component } from '@angular/core';
import { async, ComponentFixture, flush, fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  let emptyUserList = false;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have total 25 users'`, () => {
    expect(component.users.length).toEqual(25);
  });

  it('should display search box', async(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('input').length).toEqual(1);
  }));

  it('should display virtual scroll list', fakeAsync(() => {
    fixture.autoDetectChanges();
    tick(500);
    expect(fixture.debugElement.nativeElement.querySelectorAll('cdk-virtual-scroll-viewport').length).toBeGreaterThanOrEqual(1);
  }));

  it('should bind app-user-details component to send selected user details', async(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('app-user-details').length).toEqual(1);
  }));

  it('should bind app-user-details component to send selected user details', async(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('app-user-details').length).toEqual(1);
  }));

  it('should display "User Details Not Available!!!" message', fakeAsync(() => {
    component.users = [];
    emptyUserList = true;
    component.ngOnInit();
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement.querySelector('h1').textContent.trim()).toEqual('User Details Not Available!!!');
  }));

  it('should display all the users in scroll list', fakeAsync(() => {
    component.users = userDetails;
    component.ngOnInit();
    fixture.autoDetectChanges();
    flush();
    tick(300);
    const listElements = document.getElementsByTagName('li');
    expect(listElements.length).toBeGreaterThan(0);
  }));
});
