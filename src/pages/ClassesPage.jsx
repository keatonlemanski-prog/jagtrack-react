import { Container, Title, Text } from '@mantine/core'
import './ClassesPage.css'
import { classes } from '../assets/data/classes'




function ClassesPage() {
// Function to handle tab clicks
const handleTabClick = (event) => {
  // Remove 'active' class from all tabs
  const allTabs = document.querySelectorAll('.tab-button')
  allTabs.forEach(tab => tab.classList.remove('active'))




  // Add 'active' class to clicked tab
  event.currentTarget.classList.add('active')




  // Hide all tab content
  const allContent = document.querySelectorAll('.tab-content-panel')
  allContent.forEach(panel => panel.classList.remove('active'))




  // Show the selected tab content
  const targetId = event.currentTarget.getAttribute('data-tab')
  document.getElementById(targetId).classList.add('active')
}




return (
  <Container size="xl" py="xl">
    <Title order={2} ta="center" mb="md">My Classes</Title>
    <Text ta="center" c="dimmed" mb="xl">
      Click each block to see details
    </Text>




    {/* Tab buttons */}
    <div className="tabs-container">
      <button
        className="tab-button active"
        data-tab="class-0"
        onClick={handleTabClick}
      >
        {classes[0].block}
      </button>
      <button
        className="tab-button"
        data-tab="class-1"
        onClick={handleTabClick}
      >
        {classes[1].block}
      </button>
      <button
        className="tab-button"
        data-tab="class-2"
        onClick={handleTabClick}
      >
        {classes[2].block}
      </button>
      <button
        className="tab-button"
        data-tab="class-3"
        onClick={handleTabClick}
      >
        {classes[3].block}
      </button>
    </div>




    {/* Tab content panels */}
    <div className="tab-content">
      {classes.map((classItem, index) => (
        <div
          key={classItem.id}
          id={`class-${index}`}
          className={`tab-content-panel ${index === 0 ? 'active' : ''}`}
        >
          <div className="class-detail-card">
            <h3>{classItem.name}</h3>
            <p className="class-time">{classItem.time}</p>
            <p className="class-description">{classItem.description}</p>
            {classItem.canvasUrl !== '#' && (
              <a
                href={classItem.canvasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="canvas-link"
              >
                Go to Canvas →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </Container>
)
}




export default ClassesPage
