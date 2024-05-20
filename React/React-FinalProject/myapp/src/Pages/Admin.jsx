import { useEffect, useState } from "react"
import WelcomeBarComp from "../Components/WelcomeBar"
import HeaderMenuComp from "../Components/HeaderMenu"
import { Box, Button } from "@mui/material";
import CategoriesComp from "../Components/Categories";
import CustomersComp from "../Components/Customers";
import ProductsComp from "../Components/Products";
import StatisticsComp from "../Components/Statistics";



export const AdminComp = () => {
    const [firstNameUser, setFirstNameUser] = useState('')
    const [selectedComponent, setSelectedComponent] = useState('Categories')


    useEffect(() => {
        const initData = () => {
            setFirstNameUser(sessionStorage['firstNameUser'])
        }
        initData();
    }, [])

    const renderComponent = () => {
        switch (selectedComponent) {
            case "Categories":
                return <CategoriesComp />;
            case "Products":
                return <ProductsComp />;
            case "Customers":
                return <CustomersComp />;
            case "Statistics":
                return <StatisticsComp />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <WelcomeBarComp name={firstNameUser} /> <br />

                        <HeaderMenuComp titles={['Categories', 'Products', 'Customers', 'Statistics']} setSelectedComponent={setSelectedComponent} /><br /><br />

                        <Box sx={{ height: 5, borderRadius: 1, backgroundColor: '#dedede' }} />
                    </div> <br /><br />

                    <Box sx={{ borderRadius: 1, backgroundColor: '#dedede', display: 'inline-block', minWidth: '600px', width: 'fit-content', height: 'fit-content', padding: '10px' }}>
                        {renderComponent()}
                    </Box>



                </div>


            </div>


        </div>
    )
}
