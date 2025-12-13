import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-black">Matchup</h1>
        <Link href="/features/account_creation/login" className="text-blue-600 hover:underline">
          Go to Login
        </Link>
        <Link href="/features/account_creation/signup" className="text-blue-600 hover:underline">
          Go to Signup
        </Link>
      </div>
    </main>
    
  );
}
