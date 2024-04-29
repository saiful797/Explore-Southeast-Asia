import PropTypes from 'prop-types'

const CountryCard = ({country}) => {
    // console.log(country)

    const {description, name, photo} = country;
    return (
        <div className="card w-96 h-[650px] bg-blue-950 text-white">
            <figure><img className='w-full h-60' src={photo} alt="Country photo"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

CountryCard.propTypes={
    country: PropTypes.object
}
export default CountryCard;