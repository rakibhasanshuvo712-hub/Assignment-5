import React, { use, useState } from 'react';

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
      const [counter, setCounter] = useState(0);
    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

    const handleAddToStack = (player: Iplayer) => {
         setCounter(counter + 1);
        setSelectedPlayers([...selectedPlayers, player]);
    };

     console.log(playersPromise);
    const players = use(playersPromise);
      console.log(players);

    return (
        <div className="container mx-auto grid">
            <h1 className="text-4xl">
                Explore the <span className="text-red-500">Technologies</span>
            </h1>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-4 gap-12">
                   <div className="col-span-3 grid grid-cols-3 mt-6 gap-8">
                    {
                         players.map((player) => {
                            console.log(player);
                            return (
                                <div key={player.id} className="card bg-base-100 shadow-xl">
                                    <figure className="w-10 h-10"><img src={player.icon} alt={player.name} /></figure>
                                     <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">{player.name}</h2>
                                            <p>{player.id}</p>
                                        </div>
                                        <p>{player.description}</p>
                                        <div className="flex gap-4">
                                            <p>badge: {player.badge}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p>difficulty: {player.difficulty}</p>
                                            <p>rating: {player.rating}</p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => handleAddToStack(player)} className="btn btn-primary w-full">Add To Stack</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="col-span-1">
                    <h1>Your Stack</h1>
                    <p>{counter} Technology Selected</p>
                    {
                        selectedPlayers.map((player) => {
                            return ( <div>
                                <div key={player.id} className="flex border-2 border-gray-400 rounded-2xl">
                                    <img src={player.icon} alt={player.name} className="w-10 h-10" />
                                    <p>{player.name}</p></div>
                                    
                                    </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Players;