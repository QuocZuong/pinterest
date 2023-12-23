import { faCommentDots, faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import images from "@/assets/images";
import Search from "./Search";

const Header = () => {
    return (
        <div className="flex items-center h-20">
            <div className="flex items-center justify-evenly gap-6 w-full h-14 px-4 py-1">
                <div className="flex gap-1 px-2">
                    <div className="btn">
                        <Button layout="3" className="h-full" to="/">
                            <images.logo />
                        </Button>
                    </div>
                    <div className="flex justify-center ">
                        <Button layout="2" className="h-12 px-5 text-white bg-black-950" to="/">
                            Trang chủ
                        </Button>
                    </div>
                    <div className="flex justify-center ">
                        <Button layout="2" className="" to="/create">
                            Tạo
                        </Button>
                    </div>
                </div>

                {/* Search section */}
                <Search />

                <div className="flex justify-center items-center gap-2">
                    <div className="btn">
                        <Button>
                            <FontAwesomeIcon icon={faBell} style={{ color: "#5f5f5f" }} size="xl" />
                        </Button>
                    </div>
                    <div className="btn">
                        <Button>
                            <FontAwesomeIcon icon={faCommentDots} style={{ color: "#5f5f5f" }} size="xl" />
                        </Button>
                    </div>
                    <div className="btn">
                        <Button>
                            <img src="/avatar.jpg" alt="" className="rounded-full" />
                        </Button>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-grey-150">
                        <Button className="">
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#5f5f5f" }} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
