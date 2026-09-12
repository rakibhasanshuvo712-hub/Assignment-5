import { use, useState } from "react";
import type Iplayer from "../types/playerTypes";
import { toast } from "react-toastify";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

  const players = use(playersPromise);

  const handleAddToStack = (player: Iplayer) => {
    const isAlreadyAdded = selectedPlayers.some(
      (item) => item.id === player.id
    );

    if (isAlreadyAdded) {
      toast.warning(`${player.name} is already selected.`);
      return;
    }

    setSelectedPlayers((previousPlayers) => [
      ...previousPlayers,
      player,
    ]);

    toast.success(`${player.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
           setSelectedPlayers((previousPlayers) =>
      previousPlayers.filter((item) => item.id !== id)
    );

    toast.info("Technology removed from your stack!");
  };

  const handleRemoveAll = () => {
     setSelectedPlayers([]);
    toast.error("All technologies removed from your stack!");
  };

  return (
    <div className="container mx-auto grid">
      <h1 className="text-4xl">
        Explore the <span className="text-red-500">Technologies</span>
      </h1>

      <p>
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8">
          {players.map((player) => {
            const isAdded = selectedPlayers.some(
              (item) => item.id === player.id
            );

            return (
              <div
                key={player.id}
                className="card bg-base-100 shadow-xl"
              >
                <figure className="pt-6">
                  <img
                    src={player.icon}
                    alt={player.name}
                    className="w-16 h-16 object-contain"
                  />
                </figure>

                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">
                      {player.name} </h2>
                    

                    <p>{player.id}</p>
                  </div>

                  <p>{player.description}</p>

                  <div className="flex gap-4">
                    <p>Badge: {player.badge}</p>
                  </div>

                  <div className="flex gap-4">
                    <p>Difficulty: {player.difficulty}</p>
                    <p>Rating: ⭐ {player.rating}</p>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleAddToStack(player)}
                      disabled={isAdded}
                      className={`btn w-full ${
                        isAdded
                          ? "bg-black text-white"
                          : "btn-primary" }`}>
                    
                      {isAdded ? "Added to Stack" : "Add To Stack"}
                       </button>
                  </div>
                 </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-5">

            <h1 className="text-2xl font-bold">
              Your Stack
            </h1>

            <p className="mb-4">
              {selectedPlayers.length} Technologies Selected
            </p>

            {selectedPlayers.length === 0 ? (
              <p className="text-gray-500 text-center py-6">
                Your stack is empty.
              </p>
            ) : (
              <div className="space-y-3">
                {selectedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between border-2 border-gray-400 rounded-2xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={player.icon}
                        alt={player.name}
                        className="gap-2"
                      />

                      <div>
                        <p className="font-semibold">
                          {player.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {player.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(player.id)}
                      className="text-shadow-white text-xl font-bold">× </button>
                  </div>
                ))}

                <button
                  onClick={handleRemoveAll}
                  className="btn w-full mt-4 bg-white text-red-500 borde">
                
                  Remove All
                </button>
              </div>
            )}

          </div>
            </div>

      </div>
    </div>
  );
};

export default Players;