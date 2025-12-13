type AuthFieldsProps = {
    email?: string
    username: string
    password: string
    authType: 'Signup' | 'Login'
    onEmailChange?: (value: string) => void
    onPasswordChange: (value: string) => void
    onUsernameChange: (value: string) => void
}

export default function AuthFields({ 
    email, 
    username, 
    password, 
    authType,
    onEmailChange, 
    onPasswordChange, 
    onUsernameChange
}: AuthFieldsProps) {
    return (
        <div className="flex flex-col items-center">

            {authType === 'Signup' && (
                <input
                    id="email"
                    type="email"
                    value={email ?? ''}
                    onChange={(e) => onEmailChange?.(e.target.value)}
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
            )}
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => onUsernameChange(e.target.value)}
                placeholder="Enter your username"
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <button type="submit" className="bg-[#BD2D2D] text-white py-3 px-5 rounded-lg hover:bg-red-800">
                {authType === 'Signup' ? 'Sign Up' : 'Login'}
            </button>
        </div>
    );
}