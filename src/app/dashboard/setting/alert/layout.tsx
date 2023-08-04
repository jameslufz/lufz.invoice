import Sidebar from "@/app/components/layouts/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'ตั้งค่าการแจ้งเตือน'
}

export default function SettingAlertLayout({ children }:{ children: React.ReactNode })
{
    return <>
        <Sidebar activeKey="settingAlert" />
        {children}
    </>
}