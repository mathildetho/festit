import React, { useState, useContext } from 'react';
import './AccomodationModal.css';
import TicketModal from './TicketModal';
import {ShopContext} from '../Panier/ShopContext';

const AccomodationModal = (props) => {
    const {festival,accomodation} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';

    let available = [];
    for(let i=1; i<accomodation.placeAvailable+1; i++) {
        available.push(i);
    }  
    
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(accomodation.passPrice);
    const handlePrice = (event) => {
        setPrice(Number(accomodation.passPrice*event))
        setQuantity(event)
    }

    const [cart, setCart] = useContext(ShopContext);
    const addToCart = () => {
        const item = {
            name: accomodation.namePackage,
            price:price,
            description : accomodation.description,
            city: festival.city,
            country: festival.country,
            image: accomodation.image1,
            startDate: festival.startDate,
            endDate:festival.endDate,
            quantity: quantity
            };
        setCart(currentState => [...currentState, item]);
        //prend en compte les autres items et en rajoute un nouveau
    }

    return (
        <>
            <button className="btn" onClick={() => handleModalOpen()} type="button">
                Réserver
            </button>
            <div
                className={isModalOpen ? "modal-container" : "modal-container closed"}
            >
                <div className={modalClass}>
                    <button onClick={() => handleModalOpen()} className="modal__btn--close">
                        X
                    </button>
                    <div className='modal-content'>
                        <img
                            className="modal__img"
                            src={accomodation.image1}
                            alt={accomodation.namePackage}
                        />
                        <div className="modal__header">
                            <h4>{accomodation.namePackage}</h4>
                                {accomodation.airbnb === 0 ?
                                (<>
                                    <div className='option-modal'>
                                        <div>
                                            <h5>Quantité</h5>
                                            <div className='select'>
                                                <select onChange={(event) => handlePrice(event.target.value)}>
                                                    {available.map((place, index) => (
                                                        <option key={index} value={place}>{place}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Prix du logement</h5>
                                            <p>{accomodation.price}€</p>
                                        </div>
                                        <div>
                                            <h5>Prix avec tickets inclus</h5>
                                            <p>{accomodation.passPrice}€</p>
                                        </div>
                                        <div>
                                                <h5>Prix Total</h5>
                                                <p>{Number(price)}€</p>
                                        </div>
                                    </div>
                                    <button onClick={() => {addToCart();handleModalOpen();}} >Ajouter au panier</button>
                                    </>
                                ) : (
                                    <>
                                    <div className='option-modal'>
                                        <div>
                                                <h5>Prix Total</h5>
                                                <p>{price}€</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addToCart()}>Ajouter au panier</button>
                                    <TicketModal 
                                        festival={festival}
                                    />
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccomodationModal;