import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import ForgotPassComponent from "./ForgotPassComponent";
import AboutComponent from "./AboutComponent";
import Leads from "./Leads";
import ServiceRequests from "./ServiceRequests";
import DashboardComponent from "./DashboardComponent";

function RouterComponent(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginComponent/>}/>
                <Route path="/sign-up" element={<SignupComponent/>}/>
                <Route path="/forgot-password" element={<ForgotPassComponent/>}/>
                <Route path="/crm/dashboard" element={<AboutComponent/>}/>
                <Route path="/crm/leads" element={<Leads/>}/>
                <Route path="/crm/service-requests" element={<ServiceRequests/>}/> */
            </Routes>
        </BrowserRouter>
        </>
    )
}



export default RouterComponent;