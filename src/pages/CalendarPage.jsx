import { Container, Title, Text, Paper } from '@mantine/core'
import './CalendarPage.css'




function CalendarPage() {
 return (
   <Container size="xl" py="xl">
     <Title order={2} ta="center" mb="md">Calendar & Deadlines</Title>
     <Text ta="center" c="dimmed" mb="xl">
       Your Canvas assignments automatically sync to this calendar. Never miss a deadline!
     </Text>




     <Paper shadow="sm" p="md" radius="md" withBorder>
       <div className="calendar-container">
         <iframe
           src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&showTz=0&src=a2VhdG9uLmxlbWFuc2tpQGphamFncy5jb20&src=Y19jMWE0Y2MzNzU3NTg2NjQ0ZGIzOTYxMjRiOGZjNjQ2MmVhM2ZiNzdhNDhhNTUyNGY1OWJkMTRiMmI0OTQ5MTI2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2wxZmVlYnViOTNhbWJuNTdxczJhM3EwbDdkNTRqNHNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%237986cb&color=%230b8043&color=%23e67c73"
           className="google-calendar"
           frameBorder="0"
           scrolling="no"
         ></iframe>
       </div>
     </Paper>




     <Text size="sm" c="dimmed" ta="center" mt="md" className="mobile-tip">
       <strong>Mobile Tip:</strong> For a better experience on small screens,{' '}
       <a href="https://calendar.google.com/calendar/ical/keaton.lemanski%40jajags.com/public/basic.ics" target="_blank" rel="noopener noreferrer">
         open calendar in new tab
       </a>
     </Text>
   </Container>
 )
}

export default CalendarPage

