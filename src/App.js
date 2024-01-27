import { Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import './App.css';
import Logo from './assets/01_logo-01 1.png'
import Light from './assets/light effect-04.png'
import goolePlay from './assets/gooleplay.png'
import appStore from './assets/appstore.png'
import keltech from './assets/keltech logo-01 1.svg'

function App() {
  return (
    <div className="App">
      <div className='hero-page'>
        <Container >
          <div className='top-logo'>
            <div className='bg-image pb-5'>
              <Image src={Light} className='img-fluid' />
              <div className='logo-con'>
                <Image src={Logo} alt='logo' />
              </div>
            </div>
          </div>
          <Row className='mt-5'>
            <Col className='col-12 col-lg-6 text-center'>
              <div className='hero-cont text-center'>
                <h2 className='mb-0'>THE FUTURE</h2>
                <h4 className='mb-5'>of asset labelling is here</h4>
                <p className='px-1 px-md-4 my-5'>LOC is an asset identification software platform that is the reliable, cost-effective solution allowing your business to track all its assets.</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <a href='https://apps.apple.com/eg/app/loc-lable-on-a-cable/id1643531827' rel="noreferrer" target='_blank' className='me-3'><Image src={appStore} alt='appstore' className='img-fluid' /></a>
                  <a href='https://play.google.com/store/apps/details?id=com.keltech.loc' rel="noreferrer" target='_blank'><Image src={goolePlay} alt='gooleplay' className='img-fluid' /></a>
                </div>
                <a className='price-link mt-5 mx-auto' href='#'>See Pricing Options</a>
              </div>
            </Col>
            <Col className='col-12 col-lg-6 text-center'>
              <form className='login-form px-0 px-sm-5'>
                <Image src={keltech} className='img-fluid mb-3' />
                <p className='mb-2'>Welcome Back</p>
                <p className='mb-3'>Log in to your account</p>
                <InputGroup className="mb-3">
                  <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M9 9.5C7.7625 9.5 6.70313 9.05938 5.82188 8.17813C4.94063 7.29688 4.5 6.2375 4.5 5C4.5 3.7625 4.94063 2.70312 5.82188 1.82188C6.70313 0.940625 7.7625 0.5 9 0.5C10.2375 0.5 11.2969 0.940625 12.1781 1.82188C13.0594 2.70312 13.5 3.7625 13.5 5C13.5 6.2375 13.0594 7.29688 12.1781 8.17813C11.2969 9.05938 10.2375 9.5 9 9.5ZM0 18.5V15.35C0 14.7125 0.164062 14.1266 0.492188 13.5922C0.820312 13.0578 1.25625 12.65 1.8 12.3688C2.9625 11.7875 4.14375 11.3516 5.34375 11.0609C6.54375 10.7703 7.7625 10.625 9 10.625C10.2375 10.625 11.4563 10.7703 12.6562 11.0609C13.8562 11.3516 15.0375 11.7875 16.2 12.3688C16.7438 12.65 17.1797 13.0578 17.5078 13.5922C17.8359 14.1266 18 14.7125 18 15.35V18.5H0Z" fill="#848484" />
                  </svg></InputGroup.Text>
                  <Form.Control required
                    type="email" name="mail" placeholder=" Email"
                  />
                </InputGroup>
                <InputGroup className="mb-1">
                  <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                    <path d="M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2ZM8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z" fill="#848484" />
                  </svg></InputGroup.Text>
                  <Form.Control required
                    type="password" name="password" placeholder="password"
                  />
                </InputGroup>
                <div className='d-flex justify-content-end'>
                  <a className='forgit-pass mt-1' href='#'>Forgot Password?</a>
                </div>
                <button type="submit" className='mx-auto'>Sign in</button>
              </form>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
