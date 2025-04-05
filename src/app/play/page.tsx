type Toy = {
    id: number;
    name: string;
};

export default async function PlayPage() {

    const toys: Toy[] = [
        { id: 1, name: "Toy Car" },
        { id: 2, name: "Buiding Blocks" },
        { id: 3, name: "Stuffed Bear"}
    ];

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-green-500">My Play Room</h1>
            <p>This is where I have fun with toys</p>
            <ul  className="list-disc pl-5">
                {toys.map((toy) => (
                    <li key={toy.id} className="text-green-300">
                        {toy.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}