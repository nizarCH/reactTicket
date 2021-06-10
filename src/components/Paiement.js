import React, { useState, useEffect } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
const Paiement = ({total,display,setDisplay,dataVille,user}) => {
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

const [voyage_id, setIdvoyage] = useState("")
const [user_id, setIduser] = useState("")
const [nombre_de_passagers, setPsg] = useState("")
const [date_reservation, setDate] = useState("")
console.log(user_id)
useEffect(()=>{
    setIdvoyage(dataVille.id)
    setIduser(user.user.id)
    setPsg(dataVille.psg)
    setDate(dataVille.date)
},[])
const result= localStorage.getItem("user")
    const users=JSON.parse(result)
    const submit=async(e)=>{
        e.preventDefault()
            const response= await fetch('http://localhost:8000/api/reserver',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    voyage_id,
                    user_id,
                    nombre_de_passagers,
                    date_reservation
                }) 
            });
        const content = await response.json();

        } 




    return (
        <div>
            <Modal show={display} onHide={handleClose}>
            <div className="container paiement">
    <div className="row">
        <div className="col-md-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Paiment
                    </h3>
                    <div className="checkbox pull-right">
  
                    </div>
                </div>
                <div className="panel-body">
                    <form role="form">
                    <div className="form-group">
                        <label htmlfor="cardNumber">
                            CARD NUMBER</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                                required autofocus />
                            <span className="input-group-addon"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                                <label htmlfor="expityMonth">
                                    EXPIRY DATE</label>
                                <div >
                                    <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                </div>
                                <div>
                                    <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                                <label htmlfor="cvCode">
                                    CV CODE</label>
                                <input type="password" id="cvCode" placeholder="CV" required />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <ul className="nav nav-pills nav-stacked">
                <li className="active"><div href="#"><span class="badge pull-right"><span className="glyphicon glyphicon-usd"></span></span>A Payer: {total}DH </div>
                </li>
            </ul>
            <br/>
            <button class="btn-confirm" role="button" onClick={submit}>ConfimerPaiment</button>
        </div>
    </div>
</div>
    <Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button> 
        </Modal.Footer>
</Modal>
        </div>
    )
}

export default Paiement
