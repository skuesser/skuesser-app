import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TextStyles from "@/utils/textstyles";
import LobbyCanvas from "@/components/game/lobby-canvas";
import { getLobbyPlayers } from "@/app/play/[game_slug]/actions";
import { useEffect, useState } from "react";

interface LobbyProps {
  gameId: number;
  gameSlug: string;
  currentUserName: string;
}

export interface LobbyPlayer {
  userName: string | null,
  avatarUrl: string
  isHost: boolean
}

// TODO create interface for game info & add to props

export default function Lobby({ gameId, currentUserName, gameSlug }: LobbyProps) {
  const [lobbyPlayers, setLobbyPlayers] = useState<LobbyPlayer[]>();

  useEffect(() => {
    fetchLobbyPlayers()
  }, []);

  const fetchLobbyPlayers = async () => {
    const lobbyPlayers = await getLobbyPlayers(gameId);
    setLobbyPlayers(lobbyPlayers);
  }

  return (
    <div className={"w-full h-full bg-back p-6"}>
      <div className={"w-2/5 h-1 flex mt-32 content-center mx-auto lg:gap-12 rounded-3xl lg:p-10 flex-col"}>
        <div className={"w-full bg-primary rounded-3xl p-10"}>
          <div className={twMerge(TextStyles.H3, "text-center")}>Game: #{gameId}</div>
          <div className={twMerge(TextStyles.H6, "text-center")}>Game Mode: Fasted Games</div>
          <div className={twMerge(TextStyles.H6, "text-center")}>Game Code: {gameSlug}</div>
        </div>
        <div className={"w-full flex flex-col gap-3 h-full overflow-y-scroll mx-auto"}>
          {lobbyPlayers?.map((player, index) => (
            <LobbyPlayerCard userName={player.userName ?? "No Username"} index={index} avatarUrl={player.avatarUrl}
                             key={index} currentUserName={currentUserName} isHost={player.isHost} />))}
    </div>
    </div>
    </div>
  );
}

interface LobbyPlayerCardProps {
  userName: string,
  avatarUrl: string,
  isHost: boolean,
  index: number
  currentUserName: string
}

// TODO add button to kick user
const LobbyPlayerCard = (props: LobbyPlayerCardProps) => {
  return (
    <div className={twMerge("w-full h-20 rounded-xl py-5 px-5 flex gap-6 items-center", props.userName === props.currentUserName ? "bg-primary/40" : "bg-surface")}>
      <Image src={props.avatarUrl} width={50} height={50} alt={""} className={"rounded-full"} />
      <div className={"flex flex-col"}>
        <div className={twMerge(TextStyles.H7)}>{props.userName}</div>
        <div className={twMerge(TextStyles.RobotoHint)}>{props.isHost ? "Host" : "Player"} {props.userName === props.currentUserName ? "& Me" : ""}</div>
      </div>
    </div>
  );
}