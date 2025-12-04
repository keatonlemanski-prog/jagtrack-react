import { Container, Title, Text, Grid } from '@mantine/core'
import Header from './components/Header'
import ClassCard from './components/ClassCard'
import WeekDay from './components/WeekDay'  // Add this import
import Footer from './components/Footer'
import { classes } from './assets/data/classes'
import './App.css'


function App() {
 return (
   <div className="App">
     <Header />


     <Container size="xl" py="xl">
       {/* Add WeekDay component here */}
       <WeekDay />


       <Title order={2} ta="center" mb="md">My 4 Classes</Title>
       <Text ta="center" c="dimmed" mb="xl">
         Current Quarter
       </Text>


       <Grid>
 {classes.map((classItem) => (
   <Grid.Col
     key={classItem.id}
     span={{ base: 12, sm: 6, lg: 3 }}
   >
     <ClassCard {...classItem} />  {/* Changed to use spread operator */}
   </Grid.Col>
 ))}
</Grid>
     </Container>


     <Footer
       schoolName="Jefferson Academy Secondary"
       email="Keaton.Lemanski@jajags.com"
     />
   </div>
 )
}


export default App