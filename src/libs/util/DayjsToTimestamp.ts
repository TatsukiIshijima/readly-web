import { Dayjs } from 'dayjs';
import { Timestamp } from '@bufbuild/protobuf/wkt';

export function dayjsToTimestamp(dayjs?: Dayjs): Timestamp | undefined {
  if (!dayjs) {
    return undefined;
  }
  return {
    $typeName: 'google.protobuf.Timestamp',
    seconds: BigInt(dayjs.unix()),
    nanos: dayjs.millisecond() * 1_000_000,
  };
}
