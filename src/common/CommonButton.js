import { Button } from "@chakra-ui/react";

const CommonButton = ({ children, bg, color, onClick, border, mr, hover, w, mt, hoverColor, isLoading }) => (
  <Button
    w={w || "170px"}
    h="55px"
    bg={bg}
    color={color}
    mr={mr}
    fontWeight="400px"
    _hover={{ bg: hover, border: border, color: hoverColor || 'brand.primary' }}
    borderRadius="8px"
    onClick={onClick}
    border={border}
    mt={mt}
    type="submit"
    isLoading={isLoading}
  >
    {children}
  </Button>
);

export default CommonButton;
