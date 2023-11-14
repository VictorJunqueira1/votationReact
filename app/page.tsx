"use client";

import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState("");
  const [apuratedVotes, setApuratedVotes] = useState({ null: 0, mickey: 0, donald: 0 });

  const cancel = () => {
    
  }

  const vote = () => {
    if (selected === 1) {
      setVoted("Mickey");
      setApuratedVotes((prevVote) => ({
        ...prevVote,
        mickey: apuratedVotes.mickey + 1
      }));
    } else if (selected === 2) {
      setVoted("Donald");
      setApuratedVotes((prevVote) => ({
        ...prevVote,
        donald: apuratedVotes.donald + 1
      }));
    } else {
      setVoted("Nulo");
      setApuratedVotes((prevVote) => ({
        ...prevVote,
        null: apuratedVotes.null + 1
      }));
    }
  }

  const percentageNulls = ((apuratedVotes.null / (apuratedVotes.donald + apuratedVotes.null + apuratedVotes.mickey)) * 100).toFixed(1);
  const percentageMickey = ((apuratedVotes.mickey / (apuratedVotes.donald + apuratedVotes.null + apuratedVotes.mickey)) * 100).toFixed(1);
  const percentageDonald = ((apuratedVotes.donald / (apuratedVotes.donald + apuratedVotes.null + apuratedVotes.mickey)) * 100).toFixed(1);

  return (
    <main className="flex items-center justify-center h-screen max-w-4xl mx-auto flex-col gap-4">
      <div className="p-10 rounded-lg bg-white flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-10">Votação</h1>
        <div className="flex mb-10 gap-24">
          <div className="flex">
            <img className="w-64 object-contain" src="https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png" alt="" />
            <label htmlFor="" className="flex items-center gap-3">
              Mickey
              <input onChange={() => setSelected(1)} type="radio" name="candidate" id="mickey" />
            </label>
          </div>
          <div className="flex">
            <img className="w-48 object-contain" src="https://upload.wikimedia.org/wikipedia/pt/6/6f/Donald.png" alt="" />
            <label htmlFor="" className="flex items-center gap-3">
              Donald
              <input onChange={() => setSelected(2)} type="radio" name="candidate" id="donald" />
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-4 font-bold">Votado atualmente: {voted}</h1>
          <div>
            <button onClick={() => vote()} className="hover:-translate-y-2 hover:shadow-xl transition-all py-2 px-4 bg-green-600 text-white rounded-md mr-4">Confirmar</button>
            <button onClick={() => cancel()} className="hover:-translate-y-2 hover:shadow-xl transition-all py-2 px-4 bg-red-600 text-white rounded-md">Cancelar</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="bg-white p-10 rounded-lg flex text-xl flex-col w-full">
          <p>Total de Votos Mickey: <span className="font-bold">{apuratedVotes.mickey}</span></p>
          <p>Total de Votos Donald: <span className="font-bold">{apuratedVotes.donald}</span></p>
          <p>Total de Votos Nulos: <span className="font-bold">{apuratedVotes.null}</span></p>
        </div>
        <div className="bg-white p-10 rounded-lg flex text-xl flex-col w-full">
          <p>Porcentagem Mickey: <span className="font-bold">{isNaN(parseInt(percentageMickey)) ? 0 : percentageMickey}%</span></p>
          <p>Porcentagem Donald: <span className="font-bold">{isNaN(parseInt(percentageDonald)) ? 0 : percentageDonald}%</span></p>
          <p>Porcentagem Nulos: <span className="font-bold">{isNaN(parseInt(percentageNulls)) ? 0 : percentageNulls}%</span></p>
        </div>
      </div>
    </main>
  )
}
