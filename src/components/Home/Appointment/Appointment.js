import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { getDatabaseCart } from '../../../utilities/databaseManager';

import DataTable from 'react-data-table-component'; 
const Appointment = () => {
    const [cart, setCart] = useState([]);
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    const  customStyles = {
        rows: {
            style: {
                minHeight: "32px",
                width: "100%",
            },
        },
        headCells: {
            style: {
                // padding: " 15px",
                background: 'lightGray',
                // fontSize: "1px",
                color: '#066B86',
            },
        },
        cells: {
            style: {
                // fontSize: "18px",
                // padding: " 15px",
            },
        },
    };
    return (
        <div>
        <Header cart={cart.length}></Header>
        <div style={{marginTop:'100px',marginBottom:'100px'}} className="container py-5 d-flex justify-content-center">
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            // selectableRows
        />
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Appointment;