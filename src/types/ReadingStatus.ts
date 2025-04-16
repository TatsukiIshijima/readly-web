export const ReadingStatusList = ['unread', 'reading', 'done'] as const;
export type ReadingStatus = (typeof ReadingStatusList)[number];
