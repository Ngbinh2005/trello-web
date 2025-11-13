import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl sx = {{ m: 1, minWidth: 120 }} size = "small">
      <InputLabel id = "label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId = "label-select-dark-light-mode"
        id = " select-dark-light-mode"
        value = {mode}
        label = "Mode"
        onChange = {handleChange}
      >
        <MenuItem value = "light">
          <div style = {{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize = "small" /> Light
          </div>
        </MenuItem>
        <MenuItem value = "dark">
          <div style = {{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize = "small" /> Dark
          </div>
        </MenuItem>
        <MenuItem value = "system">
          <div style = {{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize = "small" /> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
function App() {

  return (
    <Container disableGutters maxWidth = {false} sx = {{ height: '100vh', backgroundColor: 'primary.main' }}>
      <Box sx = {{
        backgroundColor: 'orange',
        width: '100%',
        height: '58px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx = {{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: '58px',
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
      <Box sx = {{
        backgroundColor: 'primary.light',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100vh - 58px * 2)'
      }}
      >
        Box Content  
      </Box>
    </Container>
  )
}

export default App
