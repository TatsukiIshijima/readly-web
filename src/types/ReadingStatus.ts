import { ReadingStatus as ReadingStatusProto } from '@/libs/pb/readly/v1/reading_status_pb';

export const ReadingStatusList = ['unread', 'reading', 'done'] as const;
export type ReadingStatus = (typeof ReadingStatusList)[number];

export function readingStatusProtoToDomain(
  proto: ReadingStatusProto
): ReadingStatus {
  switch (proto) {
    case ReadingStatusProto.UNREAD:
      return 'unread';
    case ReadingStatusProto.READING:
      return 'reading';
    case ReadingStatusProto.DONE:
      return 'done';
    default:
      throw new Error('UnSupport reading status: ' + proto);
  }
}

export function readingStatusDomainToProto(
  domain: ReadingStatus
): ReadingStatusProto {
  switch (domain) {
    case 'unread':
      return ReadingStatusProto.UNREAD;
    case 'reading':
      return ReadingStatusProto.READING;
    case 'done':
      return ReadingStatusProto.DONE;
    default:
      throw new Error('UnSupport reading status: ' + domain);
  }
}
