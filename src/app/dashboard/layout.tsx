import React from 'react';

/*
    # SLOTS
    - to create parallel route
    - in this case, i create 3 slots : users, revenue, notification
    - slots auto import if they placed inside props
    - slots named start with @
    - every slots works independently, so if 1 slot got error, other components work fine
 */

const DashboardLayout = ({children, users, revenue, notification}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
}) => {
    return (
        <div>
            {children}
            <div className={"flex-1 flex gap-4 w-full h-screen p-8"}>
                <div className="flex flex-col gap-4 flex-1">
                    <div className={"flex-1"}>{users}</div>
                    <div className={"flex-1"}>{revenue}</div>
                </div>
                <div className={"flex-1"}>
                    {notification}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;