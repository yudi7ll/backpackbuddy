import { useEffect, useState } from 'react';
import BasicTopBar from '../topbar';
import Comments from './comments';
import currencyFormatter from 'currency-formatter';
import filterData from '../../utils/filter-data';
import Layout from '../layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import Rating from 'react-rating';
import uniqueBy from 'unique-by';
import '../../styles/premium-itinerary.scss';

// react bootstrap components
import {
    Button,
    Carousel,
    Col,
    Container,
    Form,
    Image,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap';

// const dataJson = require('../../premium-itinerary.json');

function PremiumItinerary({ id }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch(`http://localhost/api/itinerary/4`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));

    }, []);

    const orderHandler = () => {
        /*
         * TODO: ...
         */
        window.location.href = 'https://toko.ly/backpackbuddy/products/4361320/2-hari-jelajah-alam-ubud-';
    }

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light premium">
                    <Container className="py-4">
                        { isLoading ? <h4>Loading ...</h4> :
                        <>
                            <Carousel className="premium__carousel mb-4" pause={false} height="400px">
                                <Carousel.Item>
                                    <img
                                        class="premium__img d-block bg-secondary img-fluid"
                                        alt={data.place_name}
                                        loading="lazy"
                                        src={data.featured_picture}
                                    />
                                </Carousel.Item>
                                {/*
                                    data.foto.split(';').map(photo => (
                                        <Carousel.Item key={photo}>
                                            <img
                                                className="premium__img d-block w-100 bg-secondary"
                                                src={photo}
                                                alt={photo}
                                                loading="lazy"
                                                style={{
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))
                                    */}
                            </Carousel>
                            <Row>
                                <Col
                                    lg={{
                                        span: 4,
                                        order: 'last',
                                    }}
                                >
                                    <div className="border p-4 bg-white">
                                        {
                                            data.sale
                                                ?  <>
                                                    <p className="premium__price--discount mb-0">{ currencyFormatter.format(data.price, { code: 'IDR' }) }</p>
                                                    <h3 className="premium__price">{ currencyFormatter.format(data.sale, { code: 'IDR' }) }</h3>
                                                </>
                                                : <h3 className="premium__price mb-0">{ currencyFormatter.format(data.price, { code: 'IDR' }) }</h3>
                                        }
                                        <Button className="w-100 mt-4" onClick={orderHandler}>Pesan Sekarang</Button>

                                        <hr />

                                        <h5>Termasuk</h5>
                                        <ul>
                                            {/*
                                                data.includes.split(';').map(include => (
                                                    <li key={include}>{include}</li>
                                                ))
                                                */}
                                        </ul>

                                        <hr/>
                                        <h5>Tidak Termasuk</h5>
                                        <ul>
                                            {/*
                                                data.excludes.split(';').map(exclude => (
                                                    <li key={exclude}>{exclude}</li>
                                                ))
                                                */}
                                        </ul>

                                        <hr/>
                                        <h5>Keterangan</h5>
                                        <ul>
                                            {/*
                                                data.keterangan.split(';').map(k => (
                                                    <li key={k}>{k}</li>
                                                ))
                                                */}
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                                        <h1>{ toTitleCase(data.place_name) }</h1>
                                        <div className="premium__info d-sm-flex justify-content-between align-items-center">
                                            <div>
                                                <small className="premium__info">
                                                    5.0 (0 Ulasan) | 1 kali dipesan
                                                </small>
                                            </div>
                                            <div>
                                                <a href="#">+ Wishlist</a>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="premium__description">
                                            <h3>Deskripsi</h3>
                                            <p>{ data.description }</p>
                                        </div>
                                    </div>
                                    {/*}
                                    <Comments data={data} />
                                    {*/}
                                </Col>
                            </Row>
                        </>
                        }
                    </Container>
                </div>
            </Layout>
        </>
    );
}

export default PremiumItinerary;