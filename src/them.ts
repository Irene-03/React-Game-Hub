import { extendTheme, themeConfig } from "@chakra-ui/react";


const config :themeConfig ={
    initialColorMode: 'dark'
};

const theme = extendTheme({config});


export default theme;