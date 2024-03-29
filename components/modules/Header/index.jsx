import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  Container, Image, Nav, Navbar,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deauthenticate } from '../../../store/actions/auth';
import { selectAuth } from '../../../store/selector';
import setAxiosConfig from '../../../utils/axios-config';

function Header(props) {
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(deauthenticate());
  };

  useEffect(() => {
    setAxiosConfig(user.access_token);

    if (isLoggedIn) {
      axios.get('/customer/me/info')
        .catch(({ response }) => {
          if (response.data.message.includes('Unauthenticated')) {
            dispatch(deauthenticate());
          }
        });
    }
  }, [user.access_token]);

  return (
    <Navbar
      className="py-2 shadow-sm"
      collapseOnSelect
      bg="white"
      expand="lg"
      sticky="top"
      style={{ transition: '.35s all ease' }}
      variant="light"
      {...props}
    >
      <Container>
        <div className="d-flex flex-nowrap align-items-center w-100">
          <Navbar.Brand href="/">
            <Link href="/">
              <>
                <Image
                  className="img-fluid logo d-none d-sm-block"
                  alt="Backpack Buddy"
                  src="/images/default-logo.png"
                />
                <Image
                  className="img-fluid logo d-sm-none"
                  alt="Backpack Buddy"
                  src="/images/default-logo-mobile.png"
                />
              </>
            </Link>
          </Navbar.Brand>
          {isLoggedIn || (
          <Link href="/login">
            <a
              className="ml-auto mr-3 d-lg-none btn btn-outline-secondary"
              href="/login"
            >
              Login
            </a>
          </Link>
          )}
          <Navbar.Toggle className={isLoggedIn && 'ml-auto'} aria-controls="bb-navbar-nav" />
        </div>
        <Navbar.Collapse id="bb-navbar-nav">
          <Nav
            className="header__nav ml-auto p-2 p-lg-0"
            defaultActiveKey={router.pathname}
          >
            {[
              {
                url: '/',
                name: 'Beranda',
              },
              {
                url: '/destination',
                name: 'Destinasi',
              },
              {
                url: '/contact',
                name: 'Kontak',
              },
              {
                url: '/about',
                name: 'Tentang',
              },
            ].map(({ url, name }) => (
              <Link href={url} key={name}>
                <Nav.Link
                  className="px-lg-3 text-nowrap"
                  style={{ fontSize: '1.1em' }}
                  href={url}
                >
                  {name}
                </Nav.Link>
              </Link>
            ))}
            <Nav.Link
              className="d-none d-lg-inline-block"
              style={{ cursor: 'default' }}
            > |
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Link href="/me/profile">
                  <Nav.Link
                    className="px-lg-3 text-nowrap"
                    style={{ fontSize: '1.1em' }}
                    href="/me/profile"
                  >
                    {user.username}
                  </Nav.Link>
                </Link>
                <Nav.Link
                  className="d-lg-none border-top mt-3 pt-3 px-lg-3 text-nowrap text-danger"
                  style={{ fontSize: '1.1em' }}
                  onClick={logoutHandler}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  &nbsp;Logout
                </Nav.Link>
              </>
            ) : [
              {
                url: '/login',
                name: 'Masuk',
                classes: 'mr-2 d-none d-lg-block',
              },
              {
                url: '/register',
                name: 'Buat Akun',
                classes: 'btn btn-primary text-white px-3 w-100',
              },
            ].map(({ url, name, classes }) => (
              <Link href={url} key={name}>
                <Nav.Link
                  className={`px-lg-3 text-nowrap ${classes}`}
                  style={{ fontSize: '1.1em' }}
                  href={url}
                >
                  {name}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
