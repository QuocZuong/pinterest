import ImageItem from "@/components/ImageItem";

const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-3">
                <div>
                    <ImageItem src="./test1.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test2.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test1.jpg"></ImageItem>
                </div>
                <div>
                    <ImageItem src="./test3.jpg"></ImageItem>
                </div>
            </div>
        </div>
    );
};

export default Home;
