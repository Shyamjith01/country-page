import {  Card, Col,  Row } from "react-bootstrap";
import "../../views/home/Home.css"


const CountryList = ({ countries }: { countries: { name: { common: string; }; flags: { png: string; }; continents: string[]; }[] }) => {
    return (
        <div>
            <Row className="mb-5 mt-4 gx-4 gy-4" >
                {
                    countries.map((country: { name: { common: string; }; flags: { png: string; }; continents: string[]; }) => (
                        <Col md={6}>
                            <Card style={{ height: "90px" }} className="rounded-0   custom-card"  >
                                <div className="d-flex gap-2 w-100">
                                    <div className="d-flex align-items-center h-100 p-2 mr-5">
                                        <img className="flag-image" src={country?.flags?.png} />
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center ml-5">
                                        <span style={{ fontSize: "24px", fontWeight: "600", color: "#3D3D3D" }} className="fs-5">{country?.name?.common}</span>
                                        <span style={{ fontSize: "16px", fontWeight: "400", color: "#6F6F6F" }} className="fs-7">{country?.continents[0]}</span>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            
        </div>
    )
}

export default CountryList
