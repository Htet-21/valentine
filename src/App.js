
import { useState } from "react";


export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

 


  const getNoButtonText = () => {
    const phrases = [
      "No",
      "You might regret this!",
      "This could be a mistake!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "Give it another thought!",
      "Are you absolutely certain?",
      "Have a heart!",
      "Don't be so cold!",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
    {yesPressed ? (
      <>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2RtcjNlNnViM2hxOWhkaThyOWl6dGN1NXJwdHo0NWI3czByeWZwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cVdJgRyXv2j5meylHX/giphy.gif" />
      <div className="text-4xl font-bold my-4">Now Let's Dateee</div>
      </>
    ) : (
        <>
          <img className="h-[200px]" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVhZGsyNGhtZ3Q4bmxwa2RwN3ozM2ljdTQ1ZzhzMXlremd3YWxvdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k2aHOBybkSSlqWc5XD/giphy.gif" />
          <h1 className="text-4sm my-4">↑ Hein Htet Soe Moe ↑</h1>
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
