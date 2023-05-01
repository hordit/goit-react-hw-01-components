import PropTypes from 'prop-types'
import { Section, H2, Ulist, LiItem, SpanLabel, SpanPercentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    const total = stats.reduce((acc, stat) => acc + stat.percentage, 0);

    return (
        <Section>
            {title && <H2>{title.toUpperCase()}</H2>}
            <Ulist>
                {stats.map(({ id, label, percentage }) => (
                    <LiItem key={id} color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
                        <SpanLabel>{label}</SpanLabel>
                        <SpanPercentage>{((percentage / total) * 100).toFixed(0)}%</SpanPercentage>
                    </LiItem>
                ))}
            </Ulist>
        </Section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf
        (PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
        ).isRequired,
};
