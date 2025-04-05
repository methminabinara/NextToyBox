type Treasure = {
    id: number;
    secret: string;
};

export default async function SecretPage() {

    const treasures: Treasure[] = [
        { id: 1, secret: "Magic Wand" },
        { id: 2, secret: "Invisible Cape" },
        { id: 3, secret: "Golden Key" },
    ];

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-yellow-500">My Secret Room</h1>
            <p>Shh! This is where I keep my hidden toy stash!</p>
            <ul className="list-disc pl-5">
                {treasures.map((treasure) => (
                    <li key={treasure.id} className="text-yellow-300">
                        {treasure.secret}
                    </li>
                ))}

            </ul>
        </div>
    );
}