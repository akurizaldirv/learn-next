import React from 'react';
import {redirect} from "next/navigation";

const LandingPage = () => {
    redirect("/auth/login");
    // return (
    //     <div>
    //
    //     </div>
    // );
};

export default LandingPage;