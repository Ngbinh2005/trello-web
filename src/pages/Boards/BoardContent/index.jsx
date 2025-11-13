import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      height: 'calc(100vh - 58px * 2)'
    }}
    >
      Box Content
    </Box>
  )
}

export default BoardContent
