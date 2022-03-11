export const dateTimeRangeState = 'dateTimeRange';

export interface DateTimeRangeState {
  firstDateTime: Date | null;
  secondDateTime: Date | null;
};

export const initialDateTimeRangeState: DateTimeRangeState = {
  firstDateTime: null,
  secondDateTime: null
};
