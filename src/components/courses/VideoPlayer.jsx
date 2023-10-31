
import video from "../../assets/React.mp4";
import { Player } from "video-react";
import photoshop from "../../assets/photoshop.png";
export default function VideoPlayer() {
  return <Player playsInline poster={photoshop} src={video} />;
}
