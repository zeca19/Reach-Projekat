import { Box, Flex, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import { logo } from "../svg";

const SelectGame = ({ createGame, joinGame, accountBal }) => {
    return (
        <Box h="100vh">
            <Flex justifyContent="space-between" alignItems="center" px="50px">
                <Flex alignItems="center" fontSize="18px">
                    <Box mr="100px" cursor="pointer">{logo}</Box>
                    <Flex cursor="pointer" color="brand.white">


                    </Flex>
                </Flex>
                <Flex alignItems="center" color="brand.white">
                    <Text color="brand.dark"> Current Bal: </Text>
                    <Text color="brand.dark" fontWeight="500" ml="10px">{accountBal} ALGO</Text>
                </Flex>
            </Flex>

            <Box mt="80px">
                <Text color="brand.dark" fontSize="65px" fontWeight="400">Play Game by:</Text>
            </Box>

            <Flex mt="50px" justifyContent="center">
                <CommonButton mr="15px" bg="none" border="1px solid #FFF" color="brand.dark" onClick={createGame}>
                    Create Game
                </CommonButton>
                <CommonButton bg="brand.white" color="brand.dark" hover="none" border="1px solid #FFF" onClick={joinGame}>
                    Join Game
                </CommonButton>
            </Flex>
        </Box>
    );
};

export default SelectGame;