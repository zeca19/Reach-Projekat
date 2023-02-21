import { Box, Flex, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import { logo } from "../svg";

const LandingPage = ({ handleConnect }) => {
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center" px="50px">
                <Flex alignItems="center" fontSize="18px">
                    <Box mr="100px" cursor="pointer">{logo}</Box>
                    <Flex cursor="pointer" color="brand.white">

                    </Flex>
                </Flex>

            </Flex>

            <Box mt="50px">
                <Flex alignItems="center" justifyContent="center" mb="-10px">

                    <Text color="brand.primary" fontWeight="800" fontSize="190px">Play our Game</Text>
                </Flex>

            </Box>

            <Box mt="10px">
                <CommonButton bg="none" border="1px solid #F58220" color="brand.primary" onClick={handleConnect}>
                    Connect Wallet
                </CommonButton>
            </Box>
        </Box>
    );
};

export default LandingPage;