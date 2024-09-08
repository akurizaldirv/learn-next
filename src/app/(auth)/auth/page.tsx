import React from 'react';
import {redirect} from "next/navigation";

const Auth = () => {
    redirect("/login");
};

export default Auth;