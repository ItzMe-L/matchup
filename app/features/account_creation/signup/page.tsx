'use client'
import { useState } from 'react';
import Link from 'next/link';
import MatchupDescription from '../matchup-des';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // displays error message when username and password are empty
    const [hiddenEmptyUserDetailsError, setHiddenEmptyUserDetailsError] = useState(true);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // check if username and password matches database


        if (!username || !password) {
            setHiddenEmptyUserDetailsError(false);
        } else {
            setHiddenEmptyUserDetailsError(true);
        }
    }

    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden">
            <div className="flex flex-row flex-1 items-center justify-center bg-zinc-50 font-sans">
                <MatchupDescription accountType="" />

                <main className="flex h-full w-full flex-col items-center justify-center py-32 px-8 bg-white text-black shadow">
                    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-12 shadow-lg bg-white ">
                        <h1 className="text-4xl font-bold mb-4">Sign up</h1>

                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded-lg p-2 mb-4"
                            />
                            <input
                                id="username"
                                name="username"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="border border-gray-300 rounded-lg p-2 mb-4"
                            />
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                            />
                            <button type="submit" className="bg-[#BD2D2D] text-white py-3 px-5 rounded-lg hover:bg-red-800">
                                Sign up
                            </button>
                        </form>

                        <p hidden={hiddenEmptyUserDetailsError} className="mt-2 text-red-500">
                            Please enter your username and password
                        </p>

                        <p className="mt-4 text-sm">
                            Have an account already?{' '}
                            <Link href="/features/account_creation/login" className="text-[#BD2D2D] hover:underline">Login</Link>
                        </p>

                    </div>
                </main>
            </div>
        </div>
    )
}