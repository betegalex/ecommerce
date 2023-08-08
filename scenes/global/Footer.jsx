import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }, } = useTheme();
    return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography variant="h4" frontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                <div>
                    Aliquam dapibus gravida imperdiet. Nullam eget odio dui. Sed ligula enim, suscipit ac vulputate at, pretium eget tortor. Nulla varius enim id bibendum posuere. Cras sodales metus at nunc finibus porta. Mauris iaculis erat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    About Us
                </Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>

            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Customer Care
                </Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Order</Typography>
                <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                <Typography mb="30px">Returns & Refunds</Typography>
            </Box>

            <Box width="clamp(20%, 25%, 30%)">
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">Strada Livezilor, Sântandrei, Bihor</Typography>
                <Typography mb="30px">betegalex@gmail.com</Typography>
                <Typography mb="30px">0774.123.456</Typography>
            </Box>

        </Box>
    </Box>;
}




export default Footer;