
const UpdateTouristSpotPage = () => {
    return (
        <div className="p-5 md:p-16 shadow-2xl">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 text-center">Update a Tourist Spot</h1>
            

            <form>
                {/* form spot name and location row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Name</span>
                        </label>
                        <input type="text" name="spot" placeholder="Enter Tourists Spot Name..." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Enter Spot Location..." className="input input-bordered" required />
                    </div>
                </div>

                {/* form Seasonality and Average Cost row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Enter Season Name(ex. summer)..." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Average Cost</span>
                        </label>
                        <input type="text" name="cost" placeholder="Enter Average Cost..." className="input input-bordered" required />
                    </div>
                </div>

                {/* form Travel Time and Total Visitors row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Travel Time</span>
                        </label>
                        <input type="text" name="time" placeholder="Enter Travel Time(ex. 7 days)..." className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="Enter total Visitors Per Year.." className="input input-bordered" required />
                    </div>
                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <textarea placeholder="Enter Spot Short Description..." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>

                {/* Photo row */}
                <div className="form-control mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Spot Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="Enter Tourist Spot Photo URL..." className="input input-bordered" required />
                </div>

                <input type="submit" value="UPDATE SPOT" className="btn w-full bg-black text-white" />
            </form>
        </div>
    );
};

export default UpdateTouristSpotPage;