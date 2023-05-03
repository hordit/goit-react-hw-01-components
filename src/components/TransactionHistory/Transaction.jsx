import PropTypes from 'prop-types';
import { TdItem } from './Transaction.styled';

export const Transaction = ({
    item: { type, amount, currency }
}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <>
            <TdItem>{capitalizeFirstLetter(type)}</TdItem>
            <TdItem>{amount}</TdItem>
            <TdItem>{currency}</TdItem>
        </>
    );
};

Transaction.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};
