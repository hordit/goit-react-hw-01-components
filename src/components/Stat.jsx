import PropTypes from 'prop-types';

export const Stat = ({
    stat: { label, percentage }
}) => {
    return (
        <>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </>
    );
};

Stat.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};