import {Stack} from "@chakra-ui/react"
import {videosList} from "../../mocks/videosList"
import { Card } from "./Card"

export function VideosCards (){

    return(
        <Stack justifyContent="space-evenly" marginTop={100} marginRight={{base:0,sm:10}} spacing={2} direction="row" wrap={"wrap"}>
            {videosList.map(({title,thumbnail,channelThumbnail,channelTitle,publishedAt,viewCount},id)=>(
                <Card key={id}
                    title={title}
                    thumbnail={thumbnail}
                    channelThumbnail={channelThumbnail}
                    channelTitle={channelTitle}
                    publishedAt={publishedAt}
                    viewCount={viewCount}
                ></Card>
            ))}
        </Stack>
    )
}