// ===== JAGTRACK THEME TOGGLE =====
// This JavaScript adds dark/light mode switching functionality




// This code runs when the page loads
export function initializeTheme() {
 // Check if user has a saved theme preference in localStorage
 const savedTheme = localStorage.getItem('theme')




 // If user previously chose dark mode, apply it
 if (savedTheme === 'dark') {
   document.documentElement.setAttribute('data-theme', 'dark')
 }
}




// Function to toggle between light and dark mode
export function toggleTheme() {
 // Check what theme is currently active
 const currentTheme = document.documentElement.getAttribute('data-theme')




 // Toggle between dark and light
 if (currentTheme === 'dark') {
   // Switch to light mode
   document.documentElement.setAttribute('data-theme', 'light')
   localStorage.setItem('theme', 'light')
 } else {
   // Switch to dark mode
   document.documentElement.setAttribute('data-theme', 'dark')
   localStorage.setItem('theme', 'dark')
 }
}




// Function to get current theme (for showing correct icon)
export function getCurrentTheme() {
 return document.documentElement.getAttribute('data-theme') || 'light'
}
