
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-12">
                <div className="col-span-7 text items-center justify-center py-40 ml-16 gap-8">
                    <h1 className="text-4xl">Build Your Ideal <br />

                     <span className="text-red-500 ">Development Stack</span> </h1>
                     <p>Explore frontend, backend, database, and tooling options,<br />
compare them side by side, and put together the stack that fits your <br />
next project.</p>
                 <div className="flex gap-1 py-6 ">
                     <button className="btn btn-active btn-error">Explore Technologies</button>
                     <button className="btn btn-active">Learn More</button>
                 </div>
                </div>
                <div className="col-span-5">
                    <img src={bannerImage} alt="Banner" className="w-full h-auto" />
                </div>

            </div>
        </div>
    );
};

export default Banner;