import {
  Container, Col, Image, Row,
} from 'react-bootstrap';

// Components
import BasicTopBar from '../components/modules/Header';
import Layout from '../components/layouts/app';
import Sosmed from '../components/elements/Sosmed';
import PageHeader from '../components/elements/PageHeader';
import Title from '../components/elements/Title';

function About() {
  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container className="text-dark">
            <PageHeader
              title="tentang kami"
              description="Your digital travel buddy"
            />
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={5}>
                <Image
                  className="img-fluid rounded"
                  style={{
                    objectFit: 'cover',
                    minHeight: '100%',
                  }}
                  src="/images/gallery/about-us.jpg"
                  alt="About Backpack Buddy"
                />
              </Col>
              <Col xs={12} md={5}>
                <Image
                  className="d-block img-fluid logo mb-1"
                  src="/images/default-logo.png"
                  alt="backpack buddy logo"
                />
                <p>
                  Backpack Buddy adalah startup yang menyediakan rute wisata
                  harian untuk Backpacker secara Gratis di Bali.
                </p>
                <p>
                  Kami melayani konsultasi rute wisata harian dengan informasi
                  yang lebih lengkap secara langsung bersama konsultan kami
                  terutama wisata-wisata baru yang anti mainstream dan
                  pengalaman yang berbeda saat berwisata ke Bali.
                </p>
                <p>
                  Kami juga bisa membantu backpacker jika ingin menyewa
                  kendaraan ataupun rute wisata beserta tiket masuknya. Hemat
                  waktu, hemat budget dan jelajah lebih banyak tempat di Bali!
                </p>
                <strong style={{ fontSize: '1.2em' }}>
                  Plan Now, Travel Soon!!
                </strong>
                <div className="mt-3">
                  <Sosmed
                    className="mx-2"
                    fill="#444"
                    height="50px"
                    width="50px"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg-light person">
          <Container>
            <Row className="align-items-top justify-content-center">
              <Col xs={12} md={{ span: 4, order: 'last' }}>
                <div
                  className="img-fluid rounded person__img"
                  style={{
                    backgroundImage: 'url("/images/avatar/niken-pertiwi.jpg")',
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <Title className="mt-2 mt-md-0 text-center text-md-left text-uppercase" style={{ fontSize: '2rem' }}>
                  Niken Pertiwi
                </Title>
                <p>
                  Hai, saya Niki, saya merupakan founder dari Backpack Buddy.
                  Saya berpengalaman dari tahun 2015 mengelola Chagiya Korean
                  Tour. Saya memiliki passion berpetualang dan bertemu orang
                  baru, oleh karena itu saya suka jalan-jalan ke berbagai
                  destinasi di dalam dan luar negeri. Lewat BackpackBuddy ini
                  saya ingin berbagi rute-rute wisata baru di Bali yang kalian
                  bisa akses sendiri. Saya ingin seluruh milenial saat
                  jalan-jalan menggunakan BackpackBuddy sebagai teman perjalanan
                  digital mereka.
                </p>
              </Col>
            </Row>
            <Row className="mt-4 mt-md-5 align-items-center justify-content-center">
              <Col xs={12} md={4}>
                <div
                  className="img-fluid rounded person__img"
                  style={{
                    backgroundImage: 'url("/images/avatar/utary-dewi.jpg")',
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <Title className="mt-2 mt-md-0 text-center text-md-left text-uppercase" style={{ fontSize: '2rem' }}>
                  Utary Dewi
                </Title>
                <p>
                  Saya menyukai traveling dan bertualang ke tempat-tempat baru.
                  Berpengalaman kerja di perhotelan dan pariwisata selama 11
                  tahun dan saat ini mengelola bisnis sendiri dan selalu
                  menyempatkan diri untuk jalan-jalan. Saya menyukai petualangan
                  di alam dan beberapa wisata adrenalin. Melalui BackpackBuddy
                  saya ingin membagi pengalaman travelling secara mandiri and
                  memperkenalkan tempat-tempat wisata baru yang belum banyak
                  dikenal masyarakat. BackpackBuddy akan menjadi teman dan
                  konsultan perjalanan kalian ketika mengunjungi Bali.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default About;
