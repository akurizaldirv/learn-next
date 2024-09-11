import React, {ReactNode} from 'react';
import HeaderComponent from "@/shared/components/header/Header";
import FooterComponent from "@/shared/components/footer/Footer";

const LandingPageLayout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <header>
                <HeaderComponent/>
            </header>
            <main className={"flex-1"}>
                {children}
            </main>
            <footer className={""}>
                <FooterComponent/>
            </footer>
        </>
    );
};

export default LandingPageLayout;