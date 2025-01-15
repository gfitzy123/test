import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    InputBase,
    Checkbox,
    Badge,
} from "@mui/material";
import {
    Search as SearchIcon,
    MoreVert as MoreVertIcon,
    ViewColumn as ViewColumnIcon,
    Sort as SortIcon,
    ShoppingBag as ShoppingBagIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";

const App: React.FC = () => {
    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "grey.100" }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: 64,
                    bgcolor: "white",
                    borderRight: "1px solid #e0e0e0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        bgcolor: "blue.100",
                        p: 1,
                        borderRadius: "8px",
                        mb: 1,
                    }}
                >
                    <ShoppingBagIcon sx={{ color: "blue.600" }} />
                </Box>
                <Typography
                    variant="caption"
                    sx={{ color: "blue.600", textAlign: "center" }}
                >
                    Comp-Shop
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{ bgcolor: "white", borderBottom: "1px solid #e0e0e0" }}
                >
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton edge="start">
                                <MenuIcon sx={{ color: "grey.600" }} />
                            </IconButton>
                            <Typography variant="h6" color="text.primary">
                                Competitive Shop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                bgcolor: "grey.200",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography color="grey.600">A</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Tabs */}
                <Box
                    sx={{
                        bgcolor: "white",
                        borderBottom: "1px solid #e0e0e0",
                        display: "flex",
                        px: 2,
                        gap: 2,
                    }}
                >
                    <Button
                        variant="text"
                        sx={{
                            borderBottom: "2px solid",
                            borderColor: "blue.600",
                            color: "blue.600",
                            textTransform: "none",
                        }}
                    >
                        Shops
                    </Button>
                    <Button variant="text" sx={{ color: "grey.600", textTransform: "none" }}>
                        Review{" "}
                        <Badge
                            badgeContent={20}
                            color="error"
                            sx={{ ml: 1, "& .MuiBadge-badge": { fontSize: "0.75rem" } }}
                        />
                    </Button>
                </Box>

                {/* Content */}
                <Box sx={{ p: 2 }}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                            <Box sx={{ position: "relative" }}>
                                <SearchIcon
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: 8,
                                        transform: "translateY(-50%)",
                                        color: "grey.400",
                                    }}
                                />
                                <InputBase
                                    placeholder="Search for shop details"
                                    sx={{
                                        pl: 5,
                                        pr: 2,
                                        py: 0.5,
                                        bgcolor: "grey.100",
                                        borderRadius: "8px",
                                        width: 300,
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                                <Button
                                    variant="outlined"
                                    startIcon={<ViewColumnIcon />}
                                    sx={{ textTransform: "none" }}
                                >
                                    Columns
                                </Button>
                            </Box>
                        </Box>

                        {/* Table */}
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>Shop ID</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>
                                            Status <SortIcon fontSize="small" />
                                        </TableCell>
                                        <TableCell>Archive</TableCell>
                                        <TableCell>
                                            Campaign <SortIcon fontSize="small" />
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[...Array(15)].map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell padding="checkbox">
                                                <Checkbox defaultChecked={i < 4} />
                                            </TableCell>
                                            <TableCell>1234</TableCell>
                                            <TableCell>line-01: placeholder</TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: "8px",
                                                        display: "inline-block",
                                                        fontSize: "0.75rem",
                                                        bgcolor: i < 3 ? "yellow.100" : "green.100",
                                                        color: i < 3 ? "yellow.800" : "green.800",
                                                    }}
                                                >
                                                    {i < 3 ? "In Review" : "Complete"}
                                                </Box>
                                            </TableCell>
                                            <TableCell>{i === 2 ? "01/01/2025" : "01/03/2025"}</TableCell>
                                            <TableCell>NE Regional</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default App;
