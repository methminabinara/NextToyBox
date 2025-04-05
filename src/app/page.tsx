import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className="text-blue-500">My Cool Toy House!</h1>
      <p>Welcome to my site</p>
      <Link href="/play" className="text-purple-500">Go to Play Room</Link>
      <Link href="/secret" className="text-rose-500">Go to Secret Room</Link>
    </div>
  );
}
