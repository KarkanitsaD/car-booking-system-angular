export interface TimeViewModel {
  val: number;
  view: string;
};

export const hoursViewsValues: TimeViewModel[] = [
  {val: 1, view: '01'},
  {val: 2, view: '02'},
  {val: 3, view: '03'},
  {val: 4, view: '04'},
  {val: 5, view: '05'},
  {val: 6, view: '06'},
  {val: 7, view: '07'},
  {val: 8, view: '08'},
  {val: 9, view: '09'},{
  val: 10, view: '10'},
  {val: 11, view: '11'},
  {val: 12, view: '12'},
  {val: 13, view: '13'},
  {val: 14, view: '14'},
  {val: 15, view: '15'},
  {val: 16, view: '16'},
  {val: 17, view: '17'},
  {val: 18, view: '18'},
  {val: 19, view: '19'},
  {val: 20, view: '20'},
  {val: 21, view: '21'},
  {val: 22, view: '22'},
  {val: 23, view: '23'}];

export const minutesViewsValues: TimeViewModel[] = [
  {val: 0, view: '00'},
  {val: 15, view: '15'},
  {val: 30, view: '30'},
  {val: 45, view: '45'},
]
