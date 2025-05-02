import { Dayjs } from 'dayjs';
import { Date as ProtoDate } from '@/libs/pb/date_pb';

export function dayjsToProtoDate(dayjs: Dayjs): ProtoDate {
  const date = dayjs.toDate();
  return {
    $typeName: 'pb.Date',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}
