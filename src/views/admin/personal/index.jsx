/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Text,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";

import Ijston from 'assets/img/personal/Ijston.jpeg';
import SchaakFoto from 'assets/img/personal/SchaakFoto.png';
import OnderwaterSchaak from 'assets/img/personal/OnderwaterSchaak.jpeg';
import Triathlon from 'assets/img/personal/Triathlon.png';


export default function UserReports() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

      <SimpleGrid columns={{ base: 4, md: 4, xl: 4 }} gap='10px' mb='10px'>
      <Box mt='auto'>
        <Text
          color={textColor}
          fontSize='30px'
          textAlign='center'
          fontWeight='700'
          lineHeight='100%'>
          Triathlon 
        </Text>
        <img src={Triathlon}/>        
      </Box>

      <Box mt='auto'>
      <Text
          color={textColor}
          fontSize='30px'
          textAlign='center'
          fontWeight='700'
          lineHeight='100%'>
          Schaken 
        </Text>
        <img src={SchaakFoto}/>        
      </Box>
      <Box mt='auto'>
        <Text
          color={textColor}
          fontSize='30px'
          textAlign='center'
          fontWeight='700'
          lineHeight='100%'>
          Triathlon + Schaken 
        </Text>

        <img src={OnderwaterSchaak}/>      
      </Box>

      <Box align='top'mt='auto'>
          <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            Dompelton
          </Text>
        
          <img src={Ijston}/>         
        </Box>
      </SimpleGrid>

    </Box>
  );
}



