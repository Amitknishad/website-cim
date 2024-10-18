import React from 'react';
import { Box } from '@mui/material';
import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import Footer from "@/components/piyush/FooterSection";
import FilterBar from '@/components/myviews/FilterBar';
import CustomCard from "@/components/myviews/CustomCard";



const articlesData = [
  { id: 1, title: 'Piyush Goyal on LinkedIn: In my post budget interview...', date: '08/03/2024', time: '5:30am', image: '/articles/article1.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 2, title: 'Budget Highlights: Understanding the key changes...', date: '08/03/2024', time: '6:00am', image: '/articles/article2.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 3, title: 'Trade Negotiations: India\'s next steps in global trade...', date: '08/03/2024', time: '6:30am', image: '/articles/article3.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 4, title: 'Key Takeaways from the Budget Presentation...', date: '08/03/2024', time: '7:00am', image: '/articles/article4.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 5, title: 'Growth and Sustainability: Focus of the Budget...', date: '08/03/2024', time: '7:30am', image: '/articles/article5.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 6, title: 'Sector-wise breakdown of the Budget Allocation...', date: '08/03/2024', time: '8:00am', image: '/articles/article6.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 7, title: 'Healthcare and Education: Key budgetary changes...', date: '08/03/2024', time: '8:30am', image: '/articles/article7.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 8, title: 'Financial Inclusion in the latest Budget...', date: '08/03/2024', time: '9:00am', image: '/articles/article8.jpg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 9, title: 'Boost for MSMEs: Budget insights...', date: '08/03/2024', time: '9:30am', image: '/articles/article9.jpg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 10, title: 'Post-Budget Industry Reactions...', date: '08/03/2024', time: '10:00am', image: '/articles/article1.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 11, title: 'Infrastructure Investment: A closer look at Budget allocations...', date: '08/03/2024', time: '10:30am', image: '/articles/article2.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 12, title: 'Digital India: Key steps forward from the Budget...', date: '08/03/2024', time: '11:00am', image: '/articles/article3.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
]

const blogData = [
  { id: 1, title: 'Piyush Goyal on LinkedIn: In my post budget interview...', date: '08/03/2024', time: '5:30am', image: '/blog/blog1.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 2, title: 'Budget Highlights: Understanding the key changes...', date: '08/03/2024', time: '6:00am', image: '/blog/blog2.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 3, title: 'Trade Negotiations: India\'s next steps in global trade...', date: '08/03/2024', time: '6:30am', image: '/blog/blog3.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 4, title: 'Key Takeaways from the Budget Presentation...', date: '08/03/2024', time: '7:00am', image: '/blog/blog4.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 5, title: 'Growth and Sustainability: Focus of the Budget...', date: '08/03/2024', time: '7:30am', image: '/blog/blog5.jpg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 6, title: 'Sector-wise breakdown of the Budget Allocation...', date: '08/03/2024', time: '8:00am', image: '/blog/blog6.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 7, title: 'Healthcare and Education: Key budgetary changes...', date: '08/03/2024', time: '8:30am', image: '/blog/blog1.jpeg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 8, title: 'Financial Inclusion in the latest Budget...', date: '08/03/2024', time: '9:00am', image: '/blog/blog2.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 9, title: 'Boost for MSMEs: Budget insights...', date: '08/03/2024', time: '9:30am', image: '/blog/blog3.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 10, title: 'Post-Budget Industry Reactions...', date: '08/03/2024', time: '10:00am', image: '/blog/blog4.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 11, title: 'Infrastructure Investment: A closer look at Budget allocations...', date: '08/03/2024', time: '10:30am', image: '/blog/blog5.jpg', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
  { id: 12, title: 'Digital India: Key steps forward from the Budget...', date: '08/03/2024', time: '11:00am', image: '/blog/blog6.png', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
];

const myViews = () => {
  return (
    <Box>
      <Header />
      <Navbar />
      <FilterBar />
      <CustomCard cardData={articlesData} heading='Top Trending Articles' />
      <CustomCard cardData={blogData} heading='Blog' />
      <Footer />
    </Box>
  )
}

export default myViews