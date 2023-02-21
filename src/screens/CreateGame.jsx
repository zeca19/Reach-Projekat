import { Box, Flex, Select, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import TextInput from "../common/TextInput";
import { logo } from "../svg";

const CreateGame = ({
  handleCreateGame,
  accountBal,
  getStakePrice,
  getGuessNumber,
  isLoading,
  getHand
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
          <Text color="brand.dark">Current Bal: </Text>
          <Text color="brand.dark" fontWeight="500" ml="10px">
            {accountBal} ALGO
          </Text>
        </Flex>
      </Flex>

      <Box mt="50px">
        <Text color="brand.dark">Fill in the form to create your game</Text>

        <Box w="30%" justifyContent="center" m="20px auto">
          <form color="brand.dark">
            <TextInput
              //label="Enter Guess"

              placeholder="Enter your guess here"
              type="number"
              onChange={(e) => getGuessNumber(e.target.value)}
              color="brand.dark"
            />
            <TextInput
              //label="Stake Price"
              placeholder="Enter your stake price"
              type="number"
              onChange={(e) => getStakePrice(e.target.value)}
              color="brand.dark"
            />
            <Box mt="20px">
              <Text color="brand.dark" fontSize="20px" fontWeight="400">
                Choose how many marbles
              </Text>
              <Select
                placeholder="Marbles"
                h="50px"
                bg="brand.white"
                w="60%"
                m="20px auto"
                onChange={(e) => getHand(e.target.value)}
              >
                <option value="1">
                  <Text> One Marble</Text>
                </option>
                <option value="2">
                  <Text> Two Marbles</Text>
                </option>
                <option value="3">
                  <Text> Three Marbles</Text>
                </option>
                <option value="4">
                  <Text> Four Marbles</Text>
                </option>
                <option value="5">
                  <Text> Five Marbles</Text>
                </option>
                <option value="6">
                  <Text> Six Marbles</Text>
                </option>
              </Select>
            </Box>
            <CommonButton
              w="100%"
              color="brand.dark"
              bg="brand.primary"
              mt="20px"
              hoverColor="brand.dark"
              onClick={handleCreateGame}
              isLoading={isLoading}
            >
              Create Game
            </CommonButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateGame;
