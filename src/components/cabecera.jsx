import { Stack,Icon,Text } from "@chakra-ui/react";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";

export function Cabecera (){

    const moveContainer = (direction,e)=>{ 
        e.preventDefault();
        if(direction == "right") document.getElementById("scroll-container").scrollLeft += 50
        if(direction == "left") document.getElementById("scroll-container").scrollLeft -= 50
    }

    return(
        <Stack width={"100%"} position="fixed" top={12} left={0} paddingLeft={{base:0,sm:20}} padding={4} backgroundColor="black.youtube" overflow="hidden" height="fit-content" alignItems="center" direction="row">
            <Icon onMouseDown={(e) => moveContainer("left",e)} padding={2} borderRadius={15} cursor="pointer" color="white" width={8} height={8} as={SlArrowLeft} _hover={{ backgroundColor: "gray" }} zIndex={5}/>
            <Stack userSelect="none" css={{'&::-webkit-scrollbar': { display: 'none'},msOverflowStyle: 'none',scrollbarWidth: 'none',}} id="scroll-container" width="100%" overflow="scroll" whiteSpace="nowrap" fontSize={16} spacing={3} color="white" direction="row">
                <Text variant="cabecera">Todos</Text>
                <Text variant="cabecera">Videojuegos</Text>
                <Text variant="cabecera">JavaScript</Text>
                <Text variant="cabecera">League of Legends</Text>
                <Text variant="cabecera">Programación</Text>
                <Text variant="cabecera">Noticias</Text>
                <Text variant="cabecera">Bloodborne</Text>
                <Text variant="cabecera">Jefe</Text>
                <Text variant="cabecera">Mixes</Text>
                <Text variant="cabecera">Teorías</Text>
                <Text variant="cabecera">Animación</Text>
            </Stack>
            <Icon onMouseDown={(e) => moveContainer("right",e)} padding={2} borderRadius={15} cursor="pointer" color="white" width={8} height={8} as={SlArrowRight} _hover={{ backgroundColor: "gray" }} zIndex={5}/>
        </Stack>
    )
}