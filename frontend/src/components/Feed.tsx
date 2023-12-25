import useWindowWidth from "@/hooks/useWindowWidth";
import ImageItem from "./ImageItem";

const Feed = () => {
    const windowWidth = useWindowWidth();
    console.log(windowWidth);

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-3">
                <div>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test3.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test3.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test3.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test1.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test3.jpg"></ImageItem>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test3.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test3.jpg"></ImageItem>
                    <ImageItem src="./test2.jpg"></ImageItem>
                    <ImageItem src="./test1.jpg"></ImageItem>
                    <ImageItem src="./test3.jpg"></ImageItem>
                </div>
            </div>
        </div>
    );
};

export default Feed;
