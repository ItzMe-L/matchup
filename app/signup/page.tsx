'use client'
import { use, useState } from 'react';
import Link from 'next/link';
import MatchupDescription from '../../features/account_creation/matchup-des';
import AuthFields from '../../features/account_creation/auth-fields';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = (email: string): boolean => {
        return emailRegex.test(email);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");


        if (!email || !username || !password) {
            setError("All fields are required");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email address");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
    }

    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden">
            <div className="flex flex-row flex-1 items-center justify-center bg-zinc-50 font-sans">
                <MatchupDescription accountType="" />

                <main className="flex h-full w-full flex-col items-center justify-center py-32 px-8 bg-white text-black shadow">
                    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-12 shadow-lg bg-white ">
                        <h1 className="text-4xl font-bold mb-4 text-[#BD2D2D]">Sign up</h1>

                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <AuthFields 
                                email={email} 
                                username={username} 
                                password={password}
                                authType="Signup"
                                onEmailChange={setEmail}
                                onUsernameChange={setUsername}
                                onPasswordChange={setPassword}
                            />
                        </form>

                        <p hidden={error === ""} className="mt-2 text-red-500">
                            {error}
                        </p>

                        <p className="mt-4 text-sm">
                            Have an account already?{' '}
                            <Link href="/login" className="text-[#BD2D2D] hover:underline">Login</Link>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
}