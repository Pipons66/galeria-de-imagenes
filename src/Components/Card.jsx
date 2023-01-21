import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';

const Card = (props) => {
    return (
        <div>
            <BootstrapCard style={{ width: '18rem' }}>
                <BootstrapCard.Img variant="top" src={props.imagen} />
                <BootstrapCard.Body>
                    <BootstrapCard.Title className='colorPersonalizado'> {props.titulo} </BootstrapCard.Title>
                    <BootstrapCard.Text className='colorPersonalizado'> {props.descripcion} </BootstrapCard.Text>
                </BootstrapCard.Body>
            </BootstrapCard>
        </div>
    );
};

export default Card;