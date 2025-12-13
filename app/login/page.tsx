'use client'
import { useState } from 'react';
import Link from 'next/link';
import MatchupDescription from '../../features/account_creation/matchup-des';
import AuthFields from '../../features/account_creation/auth-fields';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Please enter your username and password");
        } 

        // request to the backend to authenticate the user
        // should also set the error if the credentials are invalid

    }

    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden">
            <div className="flex flex-row flex-1 items-center justify-center bg-zinc-50 font-sans">
                <MatchupDescription accountType="login" />

                <main className="flex h-full w-full flex-col items-center justify-center py-32 px-8 bg-white text-black shadow">
                    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-12 shadow-lg bg-white ">
                        <h1 className="text-4xl font-bold mb-4 text-[#BD2D2D]">Login</h1>

                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <AuthFields 
                                username={username}
                                password={password}
                                authType="Login"
                                onUsernameChange={setUsername}
                                onPasswordChange={setPassword}
                            />
                        </form>

                        {/* Error message display */}
                        <p hidden={error === ""} className="mt-2 text-red-500 text-sm">
                            {error}
                        </p>

                        <p className="mt-4 text-sm">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-[#BD2D2D] hover:underline">Signup</Link>
                        </p>

                    </div>
                </main>
            </div>
        </div>
    )
}