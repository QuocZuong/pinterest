import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faChevronDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ImageItem = ({ src, userId = "" }: { src: string; userId?: string }) => {
    return (
        <div className="w-[236px] mb-8 group">
            <div className="relative">
                <div className="absolute z-10 flex flex-col justify-between w-full h-full px-2 py-2 transition-opacity opacity-0 group-hover:opacity-100">
                    <div className="top-0 flex justify-between">
                        <Button className="text-white">
                            <span className="mr-2">Anime</span>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </Button>
                        <Button className="px-4 text-white bg-red-100 hover:bg-red-200">
                            <span>Lưu</span>
                        </Button>
                    </div>
                    <div className="bottom-0 flex justify-end gap-2">
                        <Button className="bg-white-100 hover:bg-white-200">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </Button>
                        <Button className="bg-white-100 hover:bg-white-200">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </Button>
                    </div>
                </div>
                <div className="absolute w-full h-full bg-black-950 rounded-[16px] inset-0 z-0 opacity-0 group-hover:opacity-25 transition-opacity"></div>
                <img src={src} alt="" className="rounded-[16px] group-hover:bg-blend-darken" />
            </div>
            <div className="mt-2">
                <p className="font-medium truncate">anime</p>
                <div className="flex gap-2">
                    <img src="/test1.jpg" alt="" className="w-8 h-8 rounded-full" />
                    <span>zuong</span>
                </div>
            </div>
        </div>
    );
};

export default ImageItem;
