"use client"

import Sidebar from "@/app/components/layouts/sidebar";

export default function DashboardLayout({ children }:{ children: React.ReactNode })
{
    return <>
        <Sidebar activeKey="dashboard" />
        {children}
    </>
}