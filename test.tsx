import React from "react";
import ReactDOM from "react-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  headerButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabButton: {
    marginRight: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: "100%",
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button color="primary" variant="contained" className={classes.headerButton}>
            Stephanie S
          </Button>
          <Typography variant="h6" className={classes.title}>
            Manage Shops - Full Screen - Summary
          </Typography>
          <Button color="primary">← Back to Shops</Button>
          <Button>← Prev</Button>
          <Typography variant="body1">Shop ID 1234</Typography>
          <Button color="primary">Next →</Button>
          <IconButton>
            <span className="material-icons">help_outline</span>
          </IconButton>
          <IconButton>
            <span className="material-icons">history</span>
          </IconButton>
          <IconButton>
            <span className="material-icons">apps</span>
          </IconButton>
          <Typography variant="body1">A</Typography>
        </Toolbar>
      </AppBar>

      <Paper className={classes.paper}>
        <Box mb={2}>
          <Button color="primary" className={classes.tabButton}>
            Summary
          </Button>
          <Button className={classes.tabButton}>Stores</Button>
          <Button className={classes.tabButton}>Items</Button>
          <Button className={classes.tabButton}>Comments</Button>
        </Box>
        <Divider />

        <Box mt={2} mb={2} display="flex" justifyContent="space-between">
          <Typography>
            This shop is currently: <Typography component="span" color="primary">In Process</Typography>
          </Typography>
          <Button variant="contained" color="primary">
            Actions
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Key details
            </Typography>
            <TextField
              label="Shop Description"
              fullWidth
              variant="outlined"
              margin="normal"
              value="Q1 New England Drug Regional"
            />
            <TextField
              label="Shop ID"
              fullWidth
              variant="outlined"
              margin="normal"
              value="1234"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Created"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value="01/01/2025"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Field Date"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value="01/03/2025"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Stores"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value="15"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Items"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value="215"
                />
              </Grid>
            </Grid>
            <Select
              fullWidth
              variant="outlined"
              className={classes.formControl}
              value="All"
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
            <Select
              fullWidth
              variant="outlined"
              className={classes.formControl}
              value="Regular"
            >
              <MenuItem value="Regular">Regular</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Vendor
            </Typography>
            <Select
              fullWidth
              variant="outlined"
              className={classes.formControl}
              value="Nielsen"
            >
              <MenuItem value="Nielsen">Nielsen</MenuItem>
            </Select>
            <TextField
              label="Note to Vendor"
              fullWidth
              variant="outlined"
              margin="normal"
              value="Please complete ASAP."
            />
            <Typography variant="h6" gutterBottom style={{ marginTop: "2rem" }}>
              Optional details
            </Typography>
            <Select
              fullWidth
              variant="outlined"
              className={classes.formControl}
              value="New England Pharmacy 1"
            >
              <MenuItem value="New England Pharmacy 1">New England Pharmacy 1</MenuItem>
            </Select>
            <Select
              fullWidth
              variant="outlined"
              className={classes.formControl}
              value="Planogram 1"
            >
              <MenuItem value="Planogram 1">Planogram 1</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button startIcon={<span className="material-icons">refresh</span>}>
            Re-center Shift+2
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
