import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";

export default function SideBar() {

    return (
        <Paper sx={{ backgroundColor: 'white', width: '15%', minHeight: '70vh'}}>
            <List>
                <ListItem >
                    <ListItemButton component={'a'} href={'/admin-space'}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tableau de bord" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component={'a'} href={'/admin-space'}>
                        <ListItemIcon>
                            <CardGiftcardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Commandes" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component={'a'} href={'/admin-space/products'}>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Produits" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component={'a'} href={'/admin-space'}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Catégories" />
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton component={'a'} href={'/admin-space'}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Compte" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}
