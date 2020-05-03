import React, { useState } from 'react';
import './AccomodationModal.css';

const AccomodationModal = (props) => {
    const {accomodation} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';

    const place = () => {
        let available;
        for(let i=1; i<accomodation.numberPlace; i++) {
            available += 1;
            return available
        }  
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
                            <div className='option-modal'>
                                <div>
                                    <h5>Nombres de places</h5>
                                    <select>
                                        <option>{place}</option>
                                    </select>
                                </div>
                                <div>
                                    <h5>Prix</h5>
                                    <p>{accomodation.price}€</p>
                                </div>
                                <button>Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccomodationModal;