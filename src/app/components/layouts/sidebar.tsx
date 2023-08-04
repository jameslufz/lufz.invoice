'use client'

import Link from "next/link";
import { Box, Divider, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FaArrowRightFromBracket, FaGrip, FaChartPie, FaRegChartBar, FaRegNoteSticky, FaCode } from "react-icons/fa6"
import styles from "./sidebar.module.css"
import { IconType } from "react-icons";

export default function Sidebar ({ activeKey }:{ activeKey: string })
{
    interface ISubMenus { name: string, activeKey: string, url: string, icon: IconType }
    interface IMenus { mainMenu: string, subMenus: Array<ISubMenus> }
    const menus:Array<IMenus> = [
        { mainMenu: 'จัดการบิล', subMenus : [
            { name: 'สร้างบิล', activeKey: 'createBilling', url: '/dashboard/billing/create', icon: FaRegNoteSticky },
            { name: 'รายงานบิล', activeKey: '', url: '#', icon: FaRegChartBar },
        ]},
        { mainMenu: 'จัดการการเงิน', subMenus : [
            { name: 'รายงานการเงิน', activeKey: '', url: '#', icon: FaChartPie },
        ]},
        { mainMenu: 'ตั้งค่า', subMenus : [
            { name: 'ตั้งค่าการแจ้งเตือน', activeKey: 'settingAlert', url: '/dashboard/setting/alert', icon: FaCode },
        ]},
        { mainMenu: 'ส่วนตัวผู้ใช้', subMenus : [
            { name: 'ออกจากระบบ', activeKey: '', url: '#', icon: FaArrowRightFromBracket },
        ]}
    ]

    return  (
        <Box bg='blue.900' w="260px" h="auto" position="fixed" top="0" left="0" className={styles['scroll-bar-wrap']}>
            <Flex
                minH={'40px'}
                p={3}
                flexDirection="column"
                overflowY="auto"
                className={styles['scroll-box']}
                h={'100dvh'} 
            >
                <Heading as="h1" fontSize={"30px"} color="orange.400" mb={10} textAlign={"center"}>INVOICE.io</Heading>

                <Stack>
                    <Box as={Link} href="/dashboard" style={{ textDecoration: 'none' }}>
                        <Flex
                            bg={(activeKey === 'dashboard' ? 'facebook.400' : '')}
                            _hover={{ bg: 'facebook.400' }}
                            borderRadius={"xl"}
                            p="5"
                            alignItems="center"
                            color="white"
                            fontWeight={"bold"}
                        >
                            <Icon as={FaGrip} fontSize={24} mr="3" />
                            แดชบอร์ด
                        </Flex>
                    </Box>

                    {menus.map(({ mainMenu, subMenus }, key) => (
                        <Stack p={5} key={key}>
                            <Text color={"whiteAlpha.500"} fontSize={18} mb="3">{mainMenu}</Text>
                            {subMenus.map((e, i) => (
                                <Box as={Link} href={e.url} style={{ textDecoration: 'none' }} key={i}>
                                    <Flex
                                        borderRadius={"xl"}
                                        px="6"
                                        py="4"
                                        alignItems="center"
                                        color={(activeKey === e.activeKey ? 'white' : 'whiteAlpha.800')}
                                        fontSize={14}
                                        _hover={{
                                            bg: "blue.400",
                                            color: "white"
                                        }}
                                        bg={(activeKey === e.activeKey ? 'blue.400' : '')}
                                    >
                                        <Icon as={e.icon} mr={2} fontWeight={"bold"} />
                                        {e.name}
                                    </Flex>
                                </Box>
                            ))}
                            <Divider opacity="0.1" />
                        </Stack>
                    ))}
                </Stack>
            </Flex>
            <div className={styles['cover-bar']}></div>
        </Box>
    )
}