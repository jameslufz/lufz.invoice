import Sidebar from "@/app/components/layouts/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'สร้างบิล'
}

export default function CreateBillingLayout({ children }:{ children: React.ReactNode })
{
    return <>
        <Sidebar activeKey="createBilling" />
        {children}
    </>
}