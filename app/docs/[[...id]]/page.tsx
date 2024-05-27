import { ServerSideProps } from '@/app/types/DefaultProps';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page(params: ServerSideProps) {
  console.log('siema1');

  const data = await getData();

  console.log(data);
  return (
    <div>
      lol
      <Link href={'/'}>{data.title}</Link>
      <button></button>
    </div>
  );
}
