// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import GithubAvatar from "assets/img/GithubAvatar.jpeg";
import GithubLogo from "assets/img/GithubLogo.png";
import { RiArrowUpSFill } from "react-icons/ri";


export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
     
      <Flex w='100%' flexDirection={{ base: "column"}}>
        <Flex align='center' w='100%' px='15px' py='10px' >
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            GitHub
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='40px'>
          <Box mt='auto'>
            <img src={GithubLogo}/>        
          </Box>
        
          <Box mt='auto'>
            <a href="https://github.com/Nadkine">
              <img src={GithubAvatar}/>
            </a>
          </Box>
        </SimpleGrid>
      </Flex>
    </Card>
  );
}
