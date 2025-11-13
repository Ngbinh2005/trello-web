import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'orange',
      width: '100%',
      height: '58px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
