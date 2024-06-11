import { Icon, Input, InputGroup, InputRightElement, Stack,Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

export function Navbar (){
    return (
        <Stack spacing="10%" backgroundColor="#0f0f0f" position="fixed" paddingTop={3} height={12} top={0} left={0} paddingLeft={{base:5,sm:"20"}} right={0} zIndex={2} marginRight={6} justifyContent="space-between" alignItems="center" direction="row"> {/* barra de navegacion */}
            <Stack direction="row">{/* 1er item */}
                <Stack cursor="pointer" position="relative" alignItems="center" justifyContent="center" direction="row">
                    <Icon position="relative" width={10} height={10} color="red.500" as={FaYoutube}/>
                    <Text fontWeight="bold" fontSize={20} color="white">Youtube</Text>Tex
                </Stack>
            </Stack>
            <Stack alignItems="center" direction="row" flex={1}>{/* 2do item */}
                <InputGroup>
                    <Input color="white" fontSize={16} fontFamily={"Roboto"} fontWeight={400} borderRadius={20} borderColor="gray.youtube" placeholder="Buscar..." />
                    <InputRightElement width={{ base: "50%", sm: "30%", md: "20%", lg: "15%", xl: "10%" }} backgroundColor="gray.youtube" borderRightRadius={20} pointerEvents="auto">
                        <Icon as={CiSearch} width={6} height={6} cursor="pointer" color="white"/>
                    </InputRightElement>
                </InputGroup>
                <Icon variant="navBarMicroFone" as={FaMicrophone}></Icon>
            </Stack>
            <Stack direction="row">
                <Icon variant="navBarRight" as={MdOutlineEmergencyRecording}></Icon>
                <Icon variant="navBarRight" as={GoBell}></Icon>
                <Icon variant="navBarRight" as={FaRegUserCircle}></Icon>
            </Stack>
        </Stack>
    )
}