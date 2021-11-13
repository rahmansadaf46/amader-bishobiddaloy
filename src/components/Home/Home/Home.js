import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

// import About from '../About/About';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { UserContext } from '../../../App';
// import fakeData from '../../../fakeData';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Home = () => {
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
    const [loggedInUser] = useContext(UserContext)
    return (
        <div>
            <Header cart={cart.length}></Header>
            <Search></Search>
            {loggedInUser.email || sessionStorage.getItem('token') ? <Menu></Menu> : <></>}

            {/* <About></About> */}
            <Footer></Footer>

            <MessengerCustomerChat
                pageId="102931898307109"
                appId="370328294888437"
            />
        </div>
    );
};

export default Home;