import {
  BooKRegisterPageState,
  initialBookRegisterPageState,
} from '@/app/book/register/state/BookRegisterPageState';
import { BookRegisterActionType } from '@/app/book/register/action/BookRegisterPageAction';

export function bookRegisterPageReducer(
  state: BooKRegisterPageState = initialBookRegisterPageState,
  action: BookRegisterActionType
): BooKRegisterPageState {
  switch (action.key) {
    case 'INPUT_TITLE':
      return { ...state, title: action.value };
    case 'INPUT_AUTHOR':
      return { ...state, author: action.value };
    case 'INPUT_PUBLISHER':
      return { ...state, publisher: action.value };
    case 'INPUT_ISBN':
      return { ...state, isbn: action.value };
    case 'INPUT_PUBLISH_DATE':
      return { ...state, publishDate: action.value };
    case 'INPUT_URL':
      return { ...state, url: action.value };
    case 'INPUT_GENRES':
      return { ...state, genres: action.value };
    case 'INPUT_READING_STATUS':
      return { ...state, readingStatus: action.value };
    case 'INPUT_START_DATE':
      return { ...state, startDate: action.value };
    case 'INPUT_END_DATE':
      return { ...state, endDate: action.value };
    case 'INPUT_FILE':
      return { ...state, file: action.value };
    default:
      throw Error('Unknown action: ' + action);
  }
}
