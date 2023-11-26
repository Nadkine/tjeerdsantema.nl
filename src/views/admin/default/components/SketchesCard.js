// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import SketchesImage from "assets/img/SketchesImage.png";
// Custom components
import React from "react";

import { MdBarChart } from "react-icons/md";

export default function SketchesCard(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
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
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          color={textColor}
          fontSize='34px'
          textAlign='start'
          fontWeight='700'
          lineHeight='100%'>
          Sketches met P5.js
        </Text>
      </Flex>
      <Box h='480px'mt='auto'>
      <a href="https://sketches.tjeerdsantema.nl">
          <img src={SketchesImage}/>
        </a>
      </Box>
    </Flex>
  </Card>
  );
}
