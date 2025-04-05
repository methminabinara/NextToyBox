import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-500">My Cool Toy House!</h1>
      <p>Welcome to my site</p>
      <Link href="/play" className="text-purple-500">Go to play Room</Link>
    </div>
  );
}
