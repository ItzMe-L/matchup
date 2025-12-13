export default function MatchupDescription(prop: { accountType: string }) {
    return (
        <main>
            <div className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-8 bg-[#BD2D2D] text-black shadow">
                {prop.accountType === "login" ? (
                    <h1 className="text-4xl text-white font-bold mb-4">Welcome back to Matchup</h1>
                ) : (
                    <h1 className="text-4xl text-white font-bold mb-4">Welcome to Matchup</h1>
                )}
                <p className="text-md text-white text-center mb-4">The ultimate platform for organizing and managing tournaments. Create and compete with our tournament management system.</p>
            </div>
        </main>

    )
}