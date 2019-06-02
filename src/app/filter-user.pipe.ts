import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: any, selectedText?: any): any {
    if (selectedText) {
      return users.filter(user => (user.name.first + user.name.last).trim().includes(selectedText.trim().toLowerCase()));
    } else {
      return users;
    }
  }
}
