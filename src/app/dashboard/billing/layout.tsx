"use client"

import Sidebar from "@/app/components/layouts/sidebar";

export default function BillingLayout({ children }:{ children: React.ReactNode })
{
    return <>
        <Sidebar activeKey="createBilling" />
        {children}
    </>
}