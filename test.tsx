import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, Chip, Button, Paper, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function App() {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 3, bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', pb: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography variant="subtitle1">Summary</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1">Review</Typography>
            <Chip label="25" size="small" color="error" sx={{ ml: 1 }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">This shop is currently:</Typography>
          <Chip label="In Review" variant="outlined" />
        </Box>
        <Button variant="outlined" endIcon={<span className="material-icons">more_horiz</span>}>
          Actions
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Description & ID</Typography>
          <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>Shop Description</Typography>
            <Typography variant="body1">Q1 New England Drug Regional</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, mb: 4, bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>Shop ID</Typography>
            <Typography variant="body1">1234</Typography>
          </Paper>

          <Typography variant="h6" gutterBottom>Timeline</Typography>
          <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>Created</Typography>
            <Typography variant="body1">01/01/2025</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>Field Date</Typography>
            <Typography variant="body1">01/03/2025</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>Delivered</Typography>
            <Typography variant="body1">01/05/2025</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Shop Request</Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>Stores</Typography>
                <Typography variant="body1">15</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>Items</Typography>
                <Typography variant="body1">215</Typography>
              </Paper>
            </Grid>
          </Grid>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Vendor</InputLabel>
            <Select value="Nielsen" label="Vendor">
              <MenuItem value="Nielsen">Nielsen</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Note to Vendor"
            multiline
            rows={2}
            defaultValue="Please complete ASAP."
            variant="outlined"
            sx={{ mb: 4 }}
          />

          <Typography variant="h6" gutterBottom>Validation Results</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>Auto-validated Items</Typography>
                <Typography variant="body1">3,225</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>Flagged</Typography>
                <Typography variant="body1">25</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
        <Button size="small"><span className="material-icons">arrow_back</span></Button>
        <Typography variant="body2" sx={{ mx: 2 }}>18 / 46</Typography>
        <Button size="small"><span className="material-icons">arrow_forward</span></Button>
      </Box>
    </Box>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
