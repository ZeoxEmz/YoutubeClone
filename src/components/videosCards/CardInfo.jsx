import {Stack,Text} from "@chakra-ui/react"
import {videoDate,videoViews} from "../utils/infoVideos"

export function CardInfo ({title,channelTitle,publishedAt,viewCount}){
    return(
        <Stack cursor="pointer">
            <Text color="white" fontSize="md" fontWeight="500" overflow="hidden" textOverflow="ellipsis" noOfLines={2}>
                {title}
            </Text>
            <Stack spacing={0}>
                <Text color="white" fontSize="sm" fontWeight="400">
                    {channelTitle}
                </Text>
                <Stack height="auto"  direction="row" divider={<Text paddingLeft={2} paddingRight={2} color="white">•</Text>}>
                    <Text color="white" fontSize="sm" fontWeight="400">
                        {videoViews(viewCount)}
                    </Text>
                    <Text color="white" height={10} fontSize="sm" fontWeight="400">
                        {videoDate(publishedAt)}
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
} 