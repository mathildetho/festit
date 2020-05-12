import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {ShopContext} from '../Panier/ShopContext';
import './AccomodationModal.css';

const TicketModal = (props) => {
    const {festival} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    let modalClass = isModalOpen ? 'modal' : 'modal closed';

    const available = [1,2,3,4,5,6,7,8,9,10]

    // const [tickets, setTickets] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://api-festit.herokuapp.com/api/festivals/${festival.idfestival}`)
    //         .then(res => res.data)
    //         .then(data => {
    //             setTickets(data)
    //         })
    // }, [festival.idfestival])

    const [desc, setDesc] = useState();
    useEffect(() => {
        setDesc('Le full pass vous permet d\'accéder à toutes les dates du festival.')
    }, [festival])

    const [price, setPrice] = useState();
    useEffect(() => {
        setPrice(festival.priceFullPass)
    }, [festival])

    const handlePrice = (e) => {
        if (e == festival.priceFullPass) {
            setDesc('Le full pass vous permet d\'accéder à toutes les dates du festival.')
            setPrice(festival.priceFullPass)
        } else {
            setDesc('Le day passs vous donne accès au festival le jour de votre choix.')
            setPrice(festival.priceDayPass)
        }
    }

    const [quantity, setQuantity] = useState(1);
    const [priceTotal, setPriceTotal] = useState();
    useEffect(() => {
        setPriceTotal(price)
     },[price])
     
    const handlePriceTotal = (e) => {
        setPriceTotal(price*e)
        setQuantity(e)
    }


    const [cart, setCart] = useContext(ShopContext);
    const addToCart = () => {
        const item = {
            name: `Ticket ${festival.name}`,
            price:priceTotal,
            description : festival.description,
            city: festival.city,
            country: festival.country,
            image: festival.image1,
            startDate: festival.startDate,
            endDate:festival.endDate,
            quantity:quantity
            };
        setCart(currentState => [...currentState, item]);
        //prend en compte les autres items et en rajoute un nouveau
    }

    return (
        <>
            {}
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
                            <p>{desc}</p>
                            <div className='option-modal'>
                                <div>
                                    <h5>Choix du pass</h5>
                                    <div className='select pass'>
                                    <select onChange={(event) => handlePrice(event.target.value)}>
                                        <option value={festival.priceFullPass}>Full Pass</option>
                                        <option value={festival.priceDayPass}>Day Pass</option>
                                    </select>
                                    </div>
                                </div>
                                <div>
                                    <h5>Quantité</h5>
                                    <div className='select'>
                                    <select onChange={(event) => handlePriceTotal(event.target.value)}>
                                        {available.map((place, index) => (
                                            <option key={index} value={place}>{place}</option>
                                        ))}
                                    </select>
                                    </div>
                                </div>
                                    <div>
                                        <h5>Prix par place</h5>
                                        <p>{price}€</p>
                                    </div>
                                    <div>
                                        <h5>Prix Total</h5>
                                        <p>{priceTotal}€</p>
                                    </div>
                            </div>
                            <button onClick={() => {addToCart();handleModalOpen();}} >Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketModal;