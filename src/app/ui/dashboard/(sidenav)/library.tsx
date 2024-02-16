'use client';

import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function Library() {
    return (
        <>
            <div className={"flex items-center"}>
                <MusicalNoteIcon className={"w-8"} />
                <p>Library</p>
            </div>

            <ul>
                <li>Spotify Playlist</li>
                <li>SoundCloud Playlist</li>
                <li>Apple Music Playlist</li>
            </ul>
        </>

    );
}