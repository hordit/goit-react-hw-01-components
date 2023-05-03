import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, Th } from './TransactionHistory.stiled';
import { TrList } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
             <tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
             </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <TrList key={item.id}>
                    <Transaction item={item} />
                </TrList>
            ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired
};