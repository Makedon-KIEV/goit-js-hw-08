import { LOCALSTORAGE_KEY } from '../02-video';

export default function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
