import { Button, Form, Row } from 'react-bootstrap';
import React, { useRef, useState } from "react";

export default function Hitungan(){
    
    const inputPertama = useRef(null);
    const inputKedua = useRef(null);

    let tambah = inputPertama + inputKedua;
    
    const handleTambah = () => {alert(tambah)}




    return (
        <>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="angkaPertama">
                        <Form.Label>Angka Pertama</Form.Label>
                        <Form.Control ref={inputPertama} type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="angkaKedua">
                        <Form.Label>Angka Kedua</Form.Label>
                        <Form.Control ref={inputKedua} type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    
                    </Form.Group>

                    <Button className='m-3' variant="primary" type="submit" onClick={handleTambah}>Tambah</Button>
                    <Button className='m-3' variant="primary" type="submit">Kurang</Button>
                    <Button className='m-3' variant="primary" type="submit">Kali</Button>
                    <Button className='m-3' variant="primary" type="submit">Bagi</Button>
                </Form>
                Hasil: 
            </Row>

        </>
    )
}