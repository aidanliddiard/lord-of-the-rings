import { client, checkError } from './client';

export async function fetchBooks() {
  const resp = await client.from('books').select('*');
  return checkError(resp);
}
