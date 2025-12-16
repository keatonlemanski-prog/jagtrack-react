import { Group, Button, ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { toggleTheme, getCurrentTheme } from '../themeToggle'
import { useState } from 'react'
import './Navigation.css'




function Navigation({ currentPage, onPageChange }) {
 // State to track current theme (for icon)
 const [theme, setTheme] = useState(getCurrentTheme())




 // Handle theme toggle click
 const handleThemeToggle = () => {
   toggleTheme()
   setTheme(getCurrentTheme())
 }




 return (
   <nav className="navigation">
     <div className="nav-container">
       <div className="nav-brand">JagTrack</div>




       <Group gap="sm" className="nav-links">
         <Button
           variant={currentPage === 'home' ? 'filled' : 'subtle'}
           onClick={() => onPageChange('home')}
         >
           Home
         </Button>
         <Button
           variant={currentPage === 'classes' ? 'filled' : 'subtle'}
           onClick={() => onPageChange('classes')}
         >
           Classes
         </Button>
         <Button
           variant={currentPage === 'calendar' ? 'filled' : 'subtle'}
           onClick={() => onPageChange('calendar')}
         >
           Calendar
         </Button>
         <Button
           variant={currentPage === 'about' ? 'filled' : 'subtle'}
           onClick={() => onPageChange('about')}
         >
           About Me
         </Button>




         {/* Theme toggle button */}
         <ActionIcon
           variant="subtle"
           size="lg"
           onClick={handleThemeToggle}
           aria-label="Toggle theme"
         >
           {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
         </ActionIcon>
       </Group>
     </div>
   </nav>
 )
}




export default Navigation
