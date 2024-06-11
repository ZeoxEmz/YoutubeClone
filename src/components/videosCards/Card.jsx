import { CardInfo } from "./CardInfo"
import {Stack,Image} from "@chakra-ui/react"

export function Card ({id,thumbnail,title,channelThumbnail,channelTitle,publishedAt,viewCount}){
    return(
        <Stack key={id} width={280} height="auto" overflow="hidden">
            <Image cursor="pointer" userSelect="none" borderRadius={10} src={thumbnail} alt={title} width="100%" height={150} objectFit="cover" />
            <Stack direction="row">
                <Image cursor="pointer" borderRadius={15} src={channelThumbnail} height={8} width={8}/>
                <CardInfo title={title} channelTitle={channelTitle} publishedAt={publishedAt} viewCount={viewCount}/>
            </Stack>
        </Stack>
    )
}