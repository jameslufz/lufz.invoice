import { Box, Card, CardBody, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { FaRegBell, FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Content({ children, topic }:{ children: ReactNode, topic: string })
{
    return  (
        <Box bg="gray.100" w="100%" h="auto" pl="260px">
            <WebHeader topic={topic} />
            <Box p={5} minH="100dvh" h="100%" pt='20'>

                {children}

            </Box>

            <Box bg="white" w="-webkit-fill-available" py="5" position="fixed" bottom="0">
                <Text textAlign="center">Copyright © 2023 LUFZ Billing</Text>
            </Box>
        </Box>
    )
}

export const WebHeader = ({ topic }:{ topic: string }) => {
    return  (
        <>
            <Flex w="100%" h="60px" alignItems="center" bg='white' position='fixed' top='0' left='0' zIndex='1'>
                <Spacer />
                <Box p='2'>
                    <HStack spacing={10}>
                        <Flex as="a" _hover={{ bg: 'teal.300', color: 'white', cursor: 'pointer', transform: 'rotate(360deg)' }} transition='.5s all' color={{ color: 'white' }} borderRadius='50%' w='40px' h='40px' textAlign='center' alignItems='center' justifyContent='center'>
                            <Icon as={FaRegBell} fontSize={18} />
                        </Flex>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton>
                                        <Flex alignItems="center">
                                            <Image src="https://cdn-icons-png.flaticon.com/512/1022/1022746.png" width="40" height="40" alt="" style={{ transition: '.5s ease', transform: (isOpen ? 'rotate(0)' : 'rotate(360deg)') }} />
                                            <Text mx="3" as="strong">James Lufz</Text>
                                            <Icon as={(isOpen ? FaAngleUp : FaAngleDown)} />
                                        </Flex>
                                    </MenuButton>
                                    <MenuList p={2}>
                                        <MenuItem borderRadius='lg'>ออกจากระบบ</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </HStack>
                    </Box>
            </Flex>
        </>
    )
}