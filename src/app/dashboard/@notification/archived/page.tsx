import React from 'react';
import Link from "next/link";
import CardComponent from "@/shared/components/card/Card";

const ArchivedNotification = () => {
    return (
        <CardComponent>
            <div className="flex flex-col justify-between h-full">
                <h1 className={"font-head text-6xl font-bold"}>Notification</h1>
                <Link href={"/dashboard"} className={"italic self-end"}>Default</Link>
            </div>
        </CardComponent>
    );
};

export default ArchivedNotification;