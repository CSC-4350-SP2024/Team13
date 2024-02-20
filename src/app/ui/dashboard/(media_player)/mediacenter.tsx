import {PlayCircleIcon, PauseCircleIcon, ArrowPathRoundedSquareIcon, ForwardIcon, BackwardIcon} from "@heroicons/react/16/solid";

export default function MediaCenter() {
    return (
       <div className="flex flex-row min-h-28 bg-black items-center justify-center">
           {/*<p className="text-white">Media Center</p>*/}
           <div className="flex flex-row text-white space-x-3">
               <i className="bi bi-shuffle py-5"></i>
               <BackwardIcon className="w-8"/>
               <PlayCircleIcon className="w-16"/>
               <ForwardIcon className="w-8"/>
               <ArrowPathRoundedSquareIcon className="w-5"/>
           </div>
       </div>
    );
}