import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";

export const dateTimeRangeState = 'dateTimeRange';

export interface DateTimeRangeState {
  dateTimeRangeModel: DateTimeRangeModel | null
};

export const initialDateTimeRangeState: DateTimeRangeState = {
  dateTimeRangeModel: null
};
