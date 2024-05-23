import React, { useEffect, useState } from 'react'
import WelcomeBarComp from './../Components/WelcomeBar.jsx'
import HeaderMenuComp from './../Components/HeaderMenu.jsx'
import { Box } from '@mui/material'
import MyAccountComp from '../Components/Users/MyAccount.jsx'
import OrdersComp from '../Components/Users/Orders.jsx'
import ProductsComp from '../Components/Users/Products.jsx'


export const UserComp = () => {


    const [firstNameUser, setFirstNameUser] = useState('')
    const [selectedComponent, setSelectedComponent] = useState('Products')

    const renderComponent = () => {
        switch (selectedComponent) {
            case "Products":
                return <ProductsComp />
            case "My Order":
                return <OrdersComp />
            case "My Account":
                return <MyAccountComp />
            case "C":
                return <div></div>
            default:
                return null;
        }
    };

    useEffect(() => {
        const initData = () => {
            setFirstNameUser(sessionStorage['firstNameUser'])
        }
        initData();
    }, [])

    return (
        <div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <WelcomeBarComp name={firstNameUser} /> <br />

                            <HeaderMenuComp titles={['Products', 'My Order', 'My Account', 'Log Out']} setSelectedComponent={setSelectedComponent} /><br /><br />

                            <Box sx={{ height: 5, borderRadius: 1, backgroundColor: '#dedede' }} />
                        </div> <br /> <br />

                        <Box sx={{ borderRadius: 1, backgroundColor: '#dedede', display: 'inline-block', minWidth: '600px', width: 'fit-content', height: 'fit-content', padding: '10px' }}>
                            {renderComponent()}
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}
