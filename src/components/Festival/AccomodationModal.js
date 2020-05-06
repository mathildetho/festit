import React, { useState } from 'react';
import './AccomodationModal.css';

const AccomodationModal = (props) => {
    const {accomodation} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';

    let available = [];
    for(let i=1; i<accomodation.numberPlace+1; i++) {
        available.push(i);
    }  

    const [price, setPrice] = useState(accomodation.price);
    const handlePrice = (event) => {
        setPrice(accomodation.price*event)
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
                                {accomodation.airbnb === false ? (
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
                                            <h5>Prix</h5>
                                            <p>{accomodation.price}€</p>
                                        </div>
                                        <div>
                                            <h5>Prix avec tickets inclus</h5>
                                            <p>{price}€</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='option-modal'>
                                        <div>
                                                <h5>Prix Total</h5>
                                                <p>{price}€</p>
                                        </div>
                                    </div>
                                )}
                                
                            <button>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccomodationModal;