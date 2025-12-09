import { Group, Button } from '@mantine/core'
import './Navigation.css'




function Navigation({ currentPage, onPageChange }) {
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
          variant={currentPage === 'about' ? 'filled' : 'subtle'}
          onClick={() => onPageChange('about')}
        >
          About Me
        </Button>
      </Group>
    </div>
  </nav>
)
}




export default Navigation
