import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { logo } from "../svg";
import CommonButton from "../common/CommonButton";

const WinnerEmerges = ({
  getBalance,
  accountBal,
  displayNewBal,
  goHome,
  winnerName,
  bobGuess,
  charlieGuess,
  aliceGuess,
  bobHand,
  charlieHand,
  aliceHand,
}) => {
  const imgLink = "https://pngimg.com/uploads/confetti/confetti_PNG86957.png";
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
        <Flex
          alignItems="center"
          color="brand.white"
          cursor="pointer"
          onClick={goHome}
        >
          <Text color="brand.primary">Go Home </Text>
        </Flex>
      </Flex>

      <Image src={imgLink} alt="congrats" w="200px" m="-20px auto" />
      <Box mt="5px">
        <Text color="brand.primary" fontWeight="700" mt="20px">
          {winnerName}
        </Text>
      </Box>
      <Box
        bg="brand.white"
        p="20px 0px"
        borderRadius="8px"
        fontSize="16px"
        m="10px auto"
        w="35%"
      >
        <Text>RESULT BOARD</Text>
        <Flex color="brand.dark" justifyContent="space-around" mt="20px">
          <Text>Player</Text>
          <Text>Guess</Text>
          <Text>Number of marbles picked</Text>
        </Flex>
        <Flex color="brand.primary" justifyContent="space-around" mt="20px">
          <Text>Bob</Text>
          <Text>{bobGuess}</Text>
          <Text>{bobHand}</Text>
        </Flex>
        <Flex color="brand.primary" justifyContent="space-around" mt="20px">
          <Text>Alice</Text>
          <Text>{aliceGuess}</Text>
          <Text>{aliceHand}</Text>
        </Flex>
        <Flex color="brand.primary" justifyContent="space-around" mt="20px">
          <Text>Charlie</Text>
          <Text ml="-10px">{charlieGuess}</Text>
          <Text>{charlieHand}</Text>
        </Flex>
        <Flex color="brand.primary" justifyContent="space-around" mt="20px">
          <Text>Sum</Text>
          <Text ml="-10px"></Text>
          <Text ml="30px">{Number(bobHand) + Number(aliceHand) + Number(charlieHand)}</Text>
        </Flex>
      </Box>

      <CommonButton
        w="20%"
        color="brand.dark"
        bg="brand.white"
        mt="10px"
        hoverColor="brand.primary"
        onClick={getBalance}
      >
        Get Balance
      </CommonButton>
      {displayNewBal && (
        <Text color="brand.white" mt="10px" mb="20px">
          Your new balance is {accountBal}
        </Text>
      )}
    </Box>
  );
};

export default WinnerEmerges;
