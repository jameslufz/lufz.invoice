"use client"

import Content from "@/app/components/layouts/content"
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import { FaCirclePlus, FaTruckArrowRight } from "react-icons/fa6"
import { NumericFormat } from 'react-number-format';

export default function CreateBilling()
{
    const [ billPreview, setBillPreview ] = useState<Array<{ goods: string, price: string | number }>>([])
    const cancelList = (key: number) => setBillPreview( billPreview.filter((_, i) => key !== i ) )

    return  (
        <Content topic="สร้างบิล">
            <Stack direction={['column','column','column','row']} spacing={5}>
                <Box p={5} shadow='md' bg="white" borderRadius="2xl" mt={5} w={['100%', '100%', '100%', '40%']}>
                    <Heading as="h1" fontSize='xl' mb="7">กำหนดรายการบิล</Heading>
                    <form>
                        <Stack spacing="4">
                            <FormControl id="goods" isRequired>
                                <FormLabel>สินค้า</FormLabel>
                                <Input placeholder="ตี๋น้อย" type="text" />
                            </FormControl>
                            <FormControl id="price" isRequired>
                                <FormLabel>ราคา</FormLabel>
                                <Input as={NumericFormat} decimalScale={2} thousandSeparator=',' decimalSeparator='.' fixedDecimalScale placeholder="โปรดระบุราคา" />
                            </FormControl>
                            <Stack direction={'row'}>
                                <Button
                                    colorScheme="linkedin"
                                    leftIcon={<FaCirclePlus />}
                                    size="sm"
                                    type="submit"
                                    isLoading={false}
                                >เพิ่มรายการ</Button>
                                <Button
                                    colorScheme="green"
                                    leftIcon={<FaTruckArrowRight />}
                                    size="sm"
                                >เรียกเก็บบิล</Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
                <Box p={5} shadow='md' key={1} bg="white" borderRadius="2xl" mt={5} w={['100%','100%','100%','60%']}>
                    <Stack spacing={5}>
                        <Heading as="h1" fontSize='xl' mb='5'>พรีวิวรายการบิล</Heading>
                    </Stack>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>ชื่อรายการ</Th>
                                    <Th>ราคา/บาท</Th>
                                    <Th>ยกเลิกรายการ</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {billPreview.length > 0 ?
                                    billPreview.map((e, i) => (
                                        <Tr key={i}>
                                            <Td fontSize='sm'>{e.goods}</Td>
                                            <Td fontSize='sm'>{e.price}</Td>
                                            <Td>
                                                <Button colorScheme='red' type="button" size="sm" onClick={() => cancelList(i)}>ยกเลิก</Button>
                                            </Td>
                                        </Tr>
                                    ))
                                : (
                                    <Tr>
                                        <Td colSpan={3} textAlign='center' fontSize='sm'>ไม่มีรายการ</Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Stack>
        </Content>
    )
}