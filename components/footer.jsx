import '../styles/footer.scss';
import Sosmed from '../components/sosmed';
import {
    Button,
    Container,
    Image,
} from 'react-bootstrap';
import { FooterArrowIcon } from './icons';

function Footer() {
    return (
        <footer className="footer text-light text-center py-5 bg-dark">
            <Container>
                <a className="d-block mx-auto" href="/">
                    <Image src="/images/default-logo.png" alt="backpackbuddy logo" />
                </a>
                <Sosmed
                    className="m-2"
                    fill="#fff"
                    height="2em"
                    width="2em"
                />
                <p className="mt-2">Travel makes one modest. You see what a tiny place you occupy in the world.</p>
                <small>&copy; Backpack Buddy. All Rights Reserved</small>
                <div className="mt-5">
                    <Button variant="outline-light">
                        <FooterArrowIcon fill="#f2f2f2" />
                    </Button>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
