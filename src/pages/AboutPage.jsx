import { Container, Title, Text, Card, Image, Grid, Badge, List, Stack, Divider } from '@mantine/core'
import './AboutPage.css'




function AboutPage() {
 return (
   <Container size="lg" py="xl">
     {/* Profile Section */}
     <Card shadow="sm" padding="lg" radius="md" withBorder className="profile-section">
       <Stack align="center" gap="md">
         <Image
           src="https://lh3.googleusercontent.com/a/ACg8ocKaD1KOIXnDzFYrSHMOE1kVCyx81DyiLepVoo3UX4xlHIGZfuGI=s317-c-no"
           alt="My profile photo"
           radius="50%"
           h={200}
           w={200}
           fit="cover"
         />
         <Title order={1}>Keaton Lemanski</Title>
         <Text size="lg" c="dimmed">10th Grade | Jefferson Academy</Text>
       </Stack>
     </Card>




     {/* Add your other sections here! */}
     {/* Examples below - customize or replace completely */}




     <Divider my="xl" />




     {/* About Me Section */}
     <Card shadow="sm" padding="lg" radius="md" withBorder>
       <Title order={2} mb="md">About Me</Title>
       <Text>
         My name is Keaton Lemanski and I am in 10th grade. 3 hobbies or interests that I have are in history, airsoft and video games. Because I like history a lot, my favorite subject was history. Some academic goals that I have are to make it through this year with all As or Bs. I would also like to do the same in my college class next semester. A career interest or future plan that I have and have had for a while is to join the military, probably the Navy or Coast Guard. 
My favorite class is history because I personally love learning about history. In coding I am learning Java Script. I find most challenging about this is the code can be difficult to understand and follow. My favorite movies that I like to watch are the Star Wars movies. I watched them a lot when I was younger and now they are super nostalgic.

       </Text>
     </Card>




     <Divider my="xl" />




     {/* Goals Section */}
     <Card shadow="sm" padding="lg" radius="md" withBorder>
       <Title order={2} mb="md">My Goals</Title>
       <List spacing="sm">
         <List.Item>Save and buy a better gaming PC</List.Item>
         <List.Item>Get all As amd Bs next semester</List.Item>
         <List.Item>Improve my mile time as much as possible</List.Item>
       </List>
     </Card>




     {/* Continue adding sections... */}




   </Container>
 )
}




export default AboutPage
