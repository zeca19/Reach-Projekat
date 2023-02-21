import { Box, FormLabel, Input } from "@chakra-ui/react";

const TextInput = ({ label, placeholder, onChange, type, w }) => {
    return (
        <Box mt="20px">
            <FormLabel color="brand.white">{label}</FormLabel>
            <Input bg="brand.white" h="55px" w={w} placeholder={placeholder} onChange={onChange} type={type} />
        </Box>
    )
}

export default TextInput;
