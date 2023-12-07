export type CalendarType = {
  rows: CalendarWeek[];
}

export type CalendarWeek = {
  rowNumber: number;
  days: CalendarDay[];
}

export type CalendarDay = {
  cMonth: boolean;
  id: any;
  number: number;
}