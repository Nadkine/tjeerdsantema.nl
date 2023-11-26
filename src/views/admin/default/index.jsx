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
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import GithubLogo from "assets/img/GithubLogo.png";
import GithubCard from "views/admin/default/components/GithubCard";
import TriathlonTracker from "views/admin/default/components/TriathlonTracker";
import SketchesCard from "views/admin/default/components/SketchesCard";
import FullRedCard from "views/admin/default/components/FullRedCard";
import PianoClip from 'assets/video/PianoClip.mp4';
import PiHatClip from 'assets/video/PiHat.mp4';
import PiPhoto from 'assets/img/OudePi.jpeg';


export default function UserReports() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

      

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='40px'>
        
        <SketchesCard />
        <TriathlonTracker />
      </SimpleGrid>
    
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <GithubCard />
        <FullRedCard/>
      </SimpleGrid>
    
      <SimpleGrid columns={{ base: 4, md: 4, xl: 4 }} gap='10px' mb='10px'>
      <Box align='top'mt='auto'>
          <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            Piano + Programmeerbare ledlicht 
          </Text>
        
          <div className="video-container">
            <video autoPlay muted loop id="video">
              <source src={PianoClip} type="video/mp4" />
            </video>
          </div>        
        </Box>
        <Box mt='auto'>
        <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            Kapotte Pi 
          </Text>
          <img src={PiPhoto}/>        
        </Box>
        <Box mt='auto'>
          <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            PiHat 
          </Text>
        
          <div className="video-container">
            <video autoPlay muted loop id="video">
              <source src={PiHatClip} type="video/mp4" />
            </video>
          </div>        
        </Box>
        
        <Box mt='auto'>
          <img src={GithubLogo}/>        
        </Box>
      </SimpleGrid>

    </Box>
  );
}



