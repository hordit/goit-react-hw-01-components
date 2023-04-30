import PropTypes from 'prop-types'
import { Stat } from "./Stat";

export const Statistics = ({ title, stats }) => {
     return (
        <section className="statistics">
            {title &&  <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                    <li key={stat.id} className="item">
                        <Stat stat={stat} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf
        (PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
        ).isRequired,
};
