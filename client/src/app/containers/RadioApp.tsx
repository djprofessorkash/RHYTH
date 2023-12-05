"use client";

import React, { useState, useEffect } from "react";
import Track from "./components/Track";
import MediaPlayer from "./components/MediaPlayer";

const MusicInstances = [
    {
      id: "track_001",
      src: "/public/media/ElijahNang_ACWTB.mp3",
      title: "A Conversation with the Blacksmith",
      artist: "Elijah Nang",
      album: "Gaijin",
      duration: "4:22"
    }
];

export default function RadioApp() {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [selectedMusic, setSelectedMusic] = useState<any>();
    const [trackDetail , setTrackDetail] = useState<string>();

    return (
        <ul>
            <li>Hi there!</li>
        </ul>
    )
}