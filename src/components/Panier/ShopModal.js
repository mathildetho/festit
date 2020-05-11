import React, { useState } from 'react';
import '../Festival/AccomodationModal.css';
import './ShopModal.css';
import arrow from '../../img/arrow.png';
import logo from '../../img/logo-festit-name.png';

const ShopModal = (props) => {
    const {totalPrice} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';

    
    const [chosen, setChosen] = useState();

    const cb = ['CB', 'VISA', 'MasterCard', 'American Express']
    const month = [1,2,3,4,5,6,7,8,9,10,11,12];
    let year = [2020, 2021, 2022];

    const submitForm = (e) => {
        e.preventDefault();
        alert('Merci pour votre achat !')
    }

    return (
        <>
            <button className="btn-pay" onClick={() => handleModalOpen()} type="button">
                Paiement<img src={arrow} alt='paiement' className='arrow-pay'/>
            </button>
            <div
                className={isModalOpen ? "modal-container" : "modal-container closed"}
            >
                <div className={modalClass}>
                    <button onClick={() => handleModalOpen()} className="modal__btn--close">
                        X
                    </button>
                    <div className='top-cart'>
                        <img className="logo-pay" src={logo} alt='logo Fest It' />
                        <div className='desc-pay'>
                            <div className='text-pay'>
                                <p>Marchand</p>
                                <p>Commande</p>
                                <p>Montant</p>
                            </div>
                            <div className='text-pay item'>
                                <p>FEST IT</p>
                                <p>187766509</p>
                                <p>{totalPrice} EUR</p>
                            </div>
                        </div>
                    </div>
                    <div className='allcb'>
                        {cb.map(t => (
                            <div 
                            active={t === chosen}
                            className={t === chosen ? "day active" : "cb-pay"}
                            onClick={() => setChosen(t)}
                            >{t}</div>
                        ))}
                    </div>
                    <form className='form-card' onSubmit={submitForm}>
                        <div className='form-data'>
                            <label for="card">Numéro de carte</label>
                            <input type="text" name="card" id="card" placeholder='Ex: 5780123412341234' required />
                        </div>
                        <div className='form-data'>
                            <label for="name">Titulaire de la carte</label>
                            <input type="text" name="name" id="name" placeholder='Ex: Jean Mich' required />
                        </div>
                        <div className='form-data crypt'>
                            <div>
                                <label for='exp'>Date d'expiration</label>
                                <div>
                                    <select name="exp" id="exp" required> 
                                        <option>---</option>
                                        {month.map((m, index) => (
                                            <option key={index} value={m}>{m}</option>
                                        ))}
                                    </select>
                                    <select name="exp" id="exp" required> 
                                        <option>---</option>
                                        {year.map((y, index) => (
                                            <option key={index} value={y}>{y}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='crypto'>
                                <label for="crypt">Cryptogramme</label>
                                <input type="text" name="crypt" id="crypt" required />
                            </div>
                        </div>
                        <div className='form-data'>
                            <input type="submit" value="PAYER"></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ShopModal;