import { Box, Flex, Text } from "@chakra-ui/react";
import { logo } from "../svg";
import { loading } from "../utils/svg";

const WaitingOthers = ({
  accountBal,
}) => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" px="50px">
        <Flex alignItems="center" fontSize="18px">
          <Box mr="100px" cursor="pointer">
            {logo}
          </Box>
          <Flex cursor="pointer" color="brand.white">

          </Flex>
        </Flex>
        <Flex alignItems="center" color="brand.white">
          <Text>Current Bal: </Text>
          <Text color="brand.primary" fontWeight="500" ml="10px">
            {accountBal} ALGO
          </Text>
        </Flex>
      </Flex>

      <Box mt="0px">
        <Box>{loading}</Box>
        <Text color="brand.white" fontSize="20px">
          Kindly exercise a little patience,<br />we are waiting for others to play their hands.
        </Text>
        <Text color="brand.primary">NB: You will be redirected once they all do...</Text>
      </Box>
    </Box>
  );
};

export default WaitingOthers;
