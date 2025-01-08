import { Button } from 'react-bootstrap'

const SocialMediaIcons = () => {
    return (
        <div className="d-flex justify-content-between w-100">
            <Button variant="outline-dark" className="rounded-circle">
                <i className="bi bi-google"></i>
            </Button>
            <Button variant="outline-dark" className="rounded-circle">
                <i className="bi bi-facebook"></i>
            </Button>
            <Button variant="outline-dark" className="rounded-circle">
                <i className="bi bi-linkedin"></i>
            </Button>
            <Button variant="outline-dark" className="rounded-circle">
                <i className="bi bi-twitter"></i>
            </Button>
        </div>
    )
}

export default SocialMediaIcons
