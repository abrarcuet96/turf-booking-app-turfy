const Banner = () => {
    return (
        <div className="flex justify-center items-center min-h-[80vh] max-w-screen-xl mx-auto gap-10 xl:flex-row flex-col p-5">
            <div className="xl:w-1/2">
                <h1 className=" text-4xl text-center xl:text-left lg:text-6xl font-extrabold my-5 text-[#201658]"><span className="text-5xl">Welcome To</span> <br />TURF BOOKING APP</h1>
                <h2 className="text-2xl text-center xl:text-left font-bold my-5 text-[#201658]">Ultimate Destination for Turf Sports Enthusiasts</h2>
                <p className="font-semibold text-lg lg:text-xl text-center xl:text-justify">Are you passionate about turf sports? Look no further! TURFY is your go-to platform for hassle-free turf booking and sports management. Whether you are a seasoned athlete, a sports team manager, or simply looking for a fun activity with friends, our app offers a seamless experience to book and manage turf facilities for various sports activities.</p>
            </div>
            <div className="xl:w-1/2 flex justify-center items-center gap-5  md:flex-row flex-col  mb-5">
                <div className="card w-80 lg:w-96 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg shadow-xl">
                    <figure><img className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] p-5" src="PlaystoreLogo.png" alt="Shoes" /></figure>
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold text-[#201658]">Android App</h2>
                        <p className="text-center text-lg font-semibold">Download TURFY from Play Store for your Android</p>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn btn-outline text-lg">Click Here</button>
                        </div>
                    </div>
                </div>
                <div className="card  w-80 lg:w-96 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg shadow-xl">
                    <figure><img className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] p-5" src="AppStore.png" alt="Shoes" /></figure>
                    <div className="card-body  flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold text-[#201658]">IOS App</h2>
                        <p className="text-center text-lg font-semibold">Download TURFY from App Store for your IOS</p>
                        <div className="card-actions justify-center mt-2">
                            <button className="btn btn-outline text-lg">Click Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;