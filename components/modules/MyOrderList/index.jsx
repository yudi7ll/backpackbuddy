import Link from 'next/link';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PriceTag from '../../elements/PriceTag';
import StatusBadge from '../../elements/StatusBadge';

function MyOrderList({ orders }) {
  return (
    <section className="p-4 d-none d-lg-block">
      <Table borderless>
        <thead className="border-bottom">
          <tr className="text-primary">
            <th>PRODUK</th>
            <th>KODE PESANAN</th>
            <th>STATUS</th>
            <th>DIUPDATE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({
            itinerary_id,
            featured_picture,
            place_name,
            status,
            status_code,
            price,
            code,
            ordered_at,
            updated_at,
          }) => (
            <tr key={code}>
              <td>
                <div className="d-flex">
                  <Link href={`/destination/${itinerary_id}`}>
                    <a href={`/destination/${itinerary_id}`}>
                      <img className="myorder__img" src={featured_picture} alt={place_name} />
                    </a>
                  </Link>
                  <div className="ml-3">
                    <Link href={`/destination/${itinerary_id}`}>
                      <a href={`/destination/${itinerary_id}`}>{place_name}</a>
                    </Link>
                    <small className="d-block">{ordered_at}</small>
                  </div>
                </div>
              </td>
              <td>{code}</td>
              <td>
                <div className="d-flex align-items-center">
                  <StatusBadge statusCode={status_code}>{status}</StatusBadge>
                </div>
              </td>
              <td>{updated_at}</td>
              <td>
                <div className="d-flex align-items-center">
                  <PriceTag price={price} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

MyOrderList.propTypes = {
  orders: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default MyOrderList;
