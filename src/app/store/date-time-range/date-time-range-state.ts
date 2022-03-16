import {DateTimeRangeModel} from "../../domain/models/date-time-range/date-time-range.model";

export const dateTimeRangeState = 'dateTimeRange';

export interface DateTimeRangeState {
  dateTimeRangeModel: DateTimeRangeModel
};

export const initialDateTimeRangeState: DateTimeRangeState = {
  dateTimeRangeModel: getDefaultDateTimeRange()
};

function getDefaultDateTimeRange(): DateTimeRangeModel {
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setUTCDate(today.getUTCDate() + 1);
  tomorrow.setUTCHours(0);
  tomorrow.setUTCMinutes(0);
  tomorrow.setUTCSeconds(0);

  let dayAfterTomorrow = new Date();
  dayAfterTomorrow.setUTCDate(today.getUTCDate() + 2);
  dayAfterTomorrow.setUTCHours(0);
  dayAfterTomorrow.setUTCMinutes(0);
  dayAfterTomorrow.setUTCSeconds(0);

  return {
    firstDate: tomorrow,
    firstHours: 10,
    firstMinutes: 0,
    secondDate: dayAfterTomorrow,
    secondHours: 20,
    secondMinutes: 0
  };
}
