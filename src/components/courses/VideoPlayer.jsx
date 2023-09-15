import {useRef, useState} from "react";
import { video } from "../../assets";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-56 md:h-96 bg-gray-100 object-cover rounded-md"
        src={video}
      />

      <div
        className="absolute inset-0 flex justify-center items-center"
        onClick={handlePlay}
      >
        <div className="bg-black bg-opacity-50 p-5 rounded-full h-16 w-16 flex items-center justify-center">
          <button className="text-white text-3xl">
            {playing ? "||" : "▶️"}
          </button>
        </div>
      </div>
    </div>
  );
}
