import React from 'react';
import Link from "next/link";
import CardComponent from "@/shared/components/card/Card";

const DefaultNotification = () => {
    return (
        <CardComponent>
            <div className="flex flex-col justify-between h-full">
                <h1 className={"font-head text-6xl font-bold"}>Notification</h1>
                <Link href={"/dashboard/archived"} className={"italic self-end"}>Archived</Link>
            </div>
        </CardComponent>
    );
};

export default DefaultNotification;