import { Dayjs } from 'dayjs';
import { Date as ProtoDate } from '@/libs/pb/readly/v1/date_pb';

export function dayjsToProtoDate(dayjs: Dayjs): ProtoDate {
  const date = dayjs.toDate();
  return {
    $typeName: 'readly.v1.Date',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}
