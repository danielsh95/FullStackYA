import { useEffect, useState } from "react"
import WelcomeBarComp from "../Components/WelcomeBar"
import HeaderMenuComp from "../Components/HeaderMenu"
import { Box } from "@mui/material";
import CategoriesComp from "../Components/Categories";



export const AdminComp = () => {
    const [firstNameUser, setFirstNameUser] = useState('')


    useEffect(() => {
        const initData = () => {
            setFirstNameUser(sessionStorage['firstNameUser'])
        }
        initData();
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <WelcomeBarComp name={firstNameUser} /> <br />

                        <HeaderMenuComp titles={['Categories', 'Products', 'Customers', 'Statistics']} /><br /><br />

                        <Box sx={{ height: 5, borderRadius: 1, backgroundColor: '#dedede' }} />
                    </div> <br /><br />

                    <Box sx={{ borderRadius: 1, backgroundColor: '#dedede', display: 'inline-block', minWidth: '600px', width: 'fit-content', height: 'fit-content', padding: '10px' }}>
                        <CategoriesComp />
                    </Box>



                </div>


            </div>


        </div>
    )
}
