import PropTypes from 'prop-types';
const ProgramDetailsCard = ({program}) => {
    const {Thumbnail,Title,Category,date} = program;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={Thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Category}</p>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Be a Volunteer</button>
        </div>
      </div>
    </div>
  );
};
ProgramDetailsCard.propTypes = {
    program: PropTypes.object
}
export default ProgramDetailsCard;
