import PropTypes from 'prop-types'

const TouristsSpotCard = ({spot}) => {
    const {image_url, tourist_spot} = spot;

    return (
        <div className="card-compact w-80 bg-black shadow-xl">
            <figure><img className='h-60' src={image_url} alt="spot" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{tourist_spot}</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-success">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

TouristsSpotCard.propTypes = {
    spot : PropTypes.object.isRequired,
}
export default TouristsSpotCard;