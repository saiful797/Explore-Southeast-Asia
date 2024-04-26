import PropTypes from 'prop-types'

const CountriesCard = ({country}) => {
    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure><img className='w-60 md:w-96 h-40 md:h-60' src={country.image_url} alt="country"/></figure>
            <div className="card-body w-40">
                <h2 className="card-title flex justify-center items-center mt-20">{country.name}</h2>
            </div>
        </div>
    );
};

CountriesCard.propTypes = {
    country: PropTypes.object.isRequired,
}
export default CountriesCard;