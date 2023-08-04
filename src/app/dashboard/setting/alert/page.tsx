"use client"

import Content from "@/app/components/layouts/content"
import { Box, Button, FormControl, FormLabel, Heading, Input, SimpleGrid } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { FaRegFloppyDisk } from "react-icons/fa6"

export default function SettingAlert()
{
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()
    const onSubmit = async (values: any) => {
        return new Promise((resolve) => {
            resolve(1)
        })
    }
    return  (
        <Content topic="ตั้งค่าการแจ้งเตือน">
            <SimpleGrid spacing={5} columns={3}>
                <Box boxShadow='lg' borderRadius='lg' bg='white' p={8}>
                    <Heading as='h2' fontSize='lg' mb={7}>ตั้งค่าโทเคน LINE</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl my={5}>
                            <FormLabel>โทเคน (token)</FormLabel>
                            <Input type='text' />
                        </FormControl>
                        <Button type='submit' colorScheme='facebook' size='sm' leftIcon={<FaRegFloppyDisk />}>บันทึก</Button>
                    </form>
                </Box>
            </SimpleGrid>
        </Content>
    )
}