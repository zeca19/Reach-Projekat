import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { logo } from "../svg";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toaster } from "evergreen-ui";
import CommonButton from "../common/CommonButton";

const DisplayGameID = ({ playGame, accountBal, contractInfo, waitForPlayer }) => {
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

      <Box mt="50px" w="30%" m="20px auto">
        <Text color="brand.white">You’re the only one here</Text>
        <Text color="brand.primary">
          Share this contract details with others that you want to play the game with
        </Text>
        <Box
          w="100%"
          borderRadius="8px"
          mt="20px"
        >
          <Textarea mt="20px" readOnly border="1px solid #23D186" bg="white" p="20px" value={contractInfo} />
        </Box>

        <CopyToClipboard text={contractInfo} onCopy={() => toaster.success("Contract Info copied successfully")}>
          <CommonButton mt="20px" w="100%" bg="none" h="45px" border="1px solid #F58220" color="brand.white" onClick={waitForPlayer}>Copy to clipboard</CommonButton>
        </CopyToClipboard>
      </Box>

      <Button
        mt="20px"
        fontSize="20px"
        color="brand.dark"
        _hover={{ color: "brand.primary" }}
        cursor="pointer"
        fontWeight="400"
        onClick={playGame}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default DisplayGameID;
