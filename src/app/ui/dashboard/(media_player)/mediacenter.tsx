'use client';

import { PlayCircle, PauseCircle, Repeat, RepeatOnce,SkipBack, SkipForward, ShuffleAngular, Queue, SpeakerSimpleHigh } from "@phosphor-icons/react";
import Image from 'next/image'

export default function MediaCenter() {
    return (
       <div className="flex flex-row min-h-28 bg-black">

               <div className="flex text-white space-x-3 items-center">

                       <ShuffleAngular/>
                       <SkipBack size={25} weight="fill"/>
                       <PlayCircle size={60} weight="fill"/>
                       <SkipForward size={25} weight="fill"/>
                       <Repeat/>

               </div>

       </div>
    );
}