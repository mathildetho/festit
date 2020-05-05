import React, { useState } from 'react';
import './AccomodationModal.css';

const TicketModal = (props) => {
    const {festival} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';
    
    return (
        <>
            <button className="btn" onClick={() => handleModalOpen()} type="button">
                Acheter un ticket
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
                            src={festival.image1}
                            alt={festival.name}
                        />
                        <div className="modal__header">
                            <h4>{festival.name}</h4>
                            <div className='option-modal'>
                                <div>
                                    <h5>Choix du pass</h5>
                                    <div className='select pass'>
                                    <select >
                                        <option value='Full' >Full pass</option>
                                        <option value='Day' >Day pass</option>
                                    </select>
                                    </div>
                                </div>
                                <div>
                                    <h5>Quantité</h5>
                                    <div className='select'>
                                    <select>
                                        {/* {available.map((place, index) => (
                                            <option key={index} value={place}>{place}</option>
                                        ))} */}
                                    </select>
                                    </div>
                                </div>
                                <div>
                                    <h5>Prix par place</h5>
                                    <p>000€</p>
                                </div>
                                <div>
                                    <h5>Prix Total</h5>
                                    <p>000€</p>
                                </div>
                            </div>
                            <button>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketModal;