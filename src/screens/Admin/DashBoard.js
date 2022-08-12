import {Paper, Stack, Typography} from "@mui/material";
import SideBar from "./SideBar";

export default function DashBoard() {

    return (
        <Stack direction={'row'} spacing={10}>
            <SideBar />
            <Paper sx={{ p: 2, backgroundColor: 'white', width: '85%', height: '70vh'}}>
                <Typography textAlign={'center'} variant={"h4"}>Tableau de bord</Typography>
            </Paper>
        </Stack>
    )
}
