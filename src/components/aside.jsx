import { Icon, Stack,Text } from "@chakra-ui/react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { AiTwotonePlaySquare } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, text }) => (
    <Stack alignItems="center" cursor="pointer" borderRadius={7} padding={1} _hover={{ backgroundColor: "grey" }}>
      <Icon height={7} width={7} color="white" borderRadius={7} as={icon}></Icon>
      <Text fontSize={10} color="white">{text}</Text>
    </Stack>
  );


export function Aside (){
    return(
        <Stack display={{base:"none",md:"block"}} backgroundColor="#0f0f0f" position="fixed" zIndex={3} top={2.5} left={2} bottom={0} minWidth={10} spacing={5}>
            <Stack alignItems="center" cursor="pointer" marginBottom={5}>
                <Icon borderRadius={20} color="white" width={10} height={10} padding={2} _hover={{ backgroundColor: "gray" }} as={RxHamburgerMenu}></Icon>
            </Stack>
            <MenuItem icon={GoHomeFill} text="Principal" />
            <MenuItem icon={SiYoutubeshorts} text="Shorts" />
            <MenuItem icon={BsCollectionPlay} text="Suscripciones" />
            <MenuItem icon={AiTwotonePlaySquare} text="Tú" />
        </Stack>
    )
}