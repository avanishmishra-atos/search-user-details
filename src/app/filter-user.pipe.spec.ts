import { FilterUserPipe } from './filter-user.pipe';
import userDetails from '../assets/users.json';

describe('FilterUserPipe', () => {
  let pipe: FilterUserPipe;

  beforeEach(() => {
    pipe = new FilterUserPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing no value returns original data', () => {
    expect(pipe.transform(userDetails, '')).toBe(userDetails);
  });

  it('filter users with input as anna', () => {
    expect(pipe.transform(userDetails, 'anna')).toContain(userDetails[0]);
  });
});
