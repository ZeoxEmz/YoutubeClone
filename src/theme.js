// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: {
      variants: {
        cabecera: {
          _hover:{
            backgroundColor:"gray.youtubeHover"
          },
          backgroundColor: 'gray.youtube',
          borderRadius: 5,
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 1,
          paddingBottom: 1,
          height: 'fit-content',
          cursor: 'pointer',
          color: 'white.youtube',
          fontWeight: 500,
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: 16,
        },
      },
    },
    Icon: {
      variants: {
        navBarRight: {
          _hover: {
            backgroundColor: "gray.youtube",
          },
          borderRadius: 25,
          color: "white.youtube",
          height: 12,
          width: 12,
          padding: 3,
        },
        navBarMicroFone: {
          _hover: {
            backgroundColor: "gray.youtubeHover",
          },
          backgroundColor: "gray.youtube",
          borderRadius:17,
          padding:2,
          color:"white",
          height:9,
          width:9,
        },
      },
    },
  },
  colors: {
    black: {
      youtube: "#0f0f0f",
    },
    gray: {
      youtube: "#2B2B2B",
      youtubeHover: "#3D3D3D"
    },
    white: {
      youtube: "#F1F1F1",
    },
  },
});

export default theme;
