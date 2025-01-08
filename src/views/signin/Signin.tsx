import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import "../../App.css"
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginBanner from "../../../public/Images/login-banner.png"
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/SocialMediaIcon/SocialMediaIcons';


const Signin = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        usernameOrEmail: Yup.string()
            .required('Username or email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
                'Password must contain at least one uppercase letter, one number, and one special character'
            )
            .required('Password is required'),
    });

    const initialValues = {
        usernameOrEmail: '',
        password: '',
        keepMeSignedIn: false,
    };


    const handleSubmit = () => {
        navigate("/home");
    };



    return (
        <Container>
            <Row className='vh-100'>
                <Col sm={12} md={6} xs={12} className='d-flex align-items-center justify-content-center'>
                    <Col md={6} sm={12}>
                        <div className="d-flex flex-column w-100">
                            <h2 className="mb-3 fw-bold">Sign In</h2>
                            <p className='fw-bold'>
                                New user? <a href="#">Create an account</a>
                            </p>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="w-100">
                                        <div className="mb-3">
                                            <Field
                                                name="usernameOrEmail"
                                                type="text"
                                                placeholder="Username or email"
                                                className={`form-control rounded-0 custom-input ${errors.usernameOrEmail && touched.usernameOrEmail ? 'is-invalid' : ''
                                                    }`}
                                            />
                                            <ErrorMessage name="usernameOrEmail" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="mb-3">
                                            <Field
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                className={`form-control rounded-0 custom-input ${errors.password && touched.password ? 'is-invalid' : ''
                                                    }`}
                                            />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="mb-3 d-flex align-items-center">
                                            <Field
                                                name="keepMeSignedIn"
                                                type="checkbox"
                                                className="custom-checknput"
                                            />
                                            <label htmlFor="keepMeSignedIn" className="ms-2">
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <Button
                                            variant="dark"
                                            type="submit"
                                            className="w-100 mb-3 rounded-0 custom-btn"
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                            <div className="d-flex align-items-center justify-content-center mb-3 w-100">
                                <hr className="flex-grow-1" />
                                <span className="px-2">Or Sign In With</span>
                                <hr className="flex-grow-1" />
                            </div>
                            <SocialMediaIcons />
                        </div>
                    </Col>
                </Col>
                <Col sm={6} className='login-img d-flex align-items-center' >
                    <div className="d-flex flex-column   w-100">
                        <img src={LoginBanner} className='login-banner-img' alt='login-banner' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin
