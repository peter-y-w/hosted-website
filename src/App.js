import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const App = () => {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Box>
					<AppBar>
						<Toolbar>
							<Typography variant="h6" noWrap component="div">
								Hi Liv and Zacc
							</Typography>
						</Toolbar>
					</AppBar>
					<Toolbar />
					<Box
						sx={{ width: 500, height: 500, position: 'relative', top: 1 }}
						component="img"
						src={require('public/assets/OrangutanEmoji.png')}
					/>
					<Box
						sx={{ width: 500, height: 500, position: 'relative', top: 1 }}
						component="img"
						src={require('public/assets/anta.jpg')}
					/>
				</Box>
			</Box>
		</>
	);
};

export default App;
