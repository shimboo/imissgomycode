import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Cards = () => {
    const location = useLocation()
    const { formValues } = location.state
    console.log('String')
    return (
        <div className='Caca'>
            <Card className="text-center">
                <Card.Header>successfully registered</Card.Header>
                <Card.Body>
                    <Card.Title>Thank You For Your Reservation</Card.Title>
                    <Card.Text>
                        Reservation has been successfully made for {formValues.firstName} {formValues.lastName} from {formValues.fromDate} to {formValues.toDate}
                    </Card.Text>
                    <Button variant="primary" href='/'>confirm</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Enjoy staying with us</Card.Footer>
            </Card>
        </div>
    )
}

export default Cards
