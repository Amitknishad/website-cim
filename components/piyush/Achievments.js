import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Box, Collapse } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import TrainIcon from '@mui/icons-material/Train';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import HeaderWithLine from './HeaderWithLine';

const achievements = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Power & Renewable Energy Sector",
    description:
      "Electrification of Villages: As the Minister of Power, Coal, New and Renewable Energy (2014–2017), Piyush Goyal played a key role in the electrification of all Indian villages, achieving this target ahead of schedule.",
    expandedContent: {
      heading: "People's Person",
      content: `
          Some political pundits say that leaders are born while others are of the view that they are created by the circumstances they find themselves. But Amit Shah is a leader who has been hailed as one created by the masses themselves. And this is one of the reasons why he has never lost an election. Right from the initial days of his career as a candidate of the BJP, resounding victory has been his norm. Very often he throws surprises winning an election with a margin wider than the previous ones.
          
          An electrifying connection with the people and an uncanny ability to understand their problems are the factors that make him a person of the common folks. His connection with the masses is attributed to his focused approach toward his responsibilities as a public representative. Shri Shah created a lush green cover in his assembly constituency at a time when no one was talking about environmental protection. Keeping an eye on even the smallest needs of the people he constructed a crematorium and an effective drainage system there.
          
          Unsurprisingly, when Amit Shah is entrusted with the role of an election campaigner, it results in a groundswell of support; when he is given the role of a party leader, he establishes a close and lasting connection with its members creating a well-oiled election machinery.
          
          His journey in electoral politics had a humble beginning as a booth manager in the Naranpura ward of Ahmedabad. However, in the year 1997, he bagged the first opportunity to take a flier on electoral politics himself. He was nominated as the BJP candidate for the Sarkhej Assembly segment bye-polls in Gujarat. He won with a margin of 24,689 votes. He won every subsequent election with a bigger number of votes. He expanded his winning margin to 132,477 votes in his second election which was a five-fold increase from his maiden victory. He won his third and fourth terms with record margins of 288,327 and 232,823 votes respectively. After delimitation, his constituency was Naranpura. Even though the number of voters here was one-fourth of his previous constituency, he won with a margin of 63,235 votes. He created a record by winning the Gandhinagar constituency in the 2019 Lok Sabha polls with a margin of 5.57 lakh votes.
        `,
    },
  },
  {
    icon: <TrainIcon fontSize="large" />,
    title: "Railways Transformation",
    description:
      "As the Minister of Railways (2017–2021), Goyal spearheaded the modernization of the Indian Railways, focusing on electrification, infrastructure development, and improving operational efficiency.",
    expandedContent: {
      heading: "Facilitator of Change",
      content: (
        <>
          {/* Section 1 */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            As the Union Minister of Home
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            To ensure peace and stability in Kashmir, he chose the path of abrogating Article 370 under the guidance of Prime Minister Narendra Modi. Similarly, one after another peace accords with insurgent groups were struck in the Northeast.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            The upshot was a 32% decrease in terror incidents in Jammu and Kashmir, a 14% decrease in the death of civilians, and a 52% decrease in the death of security personnel. Northeast India saw a 68% decrease in terror incidents during his tenure.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            A comparative analysis of data from three years of Amit Shah's tenure as the Home Minister, compared to the Congress regime from 2009 to 2012, showed a significant improvement in drug seizures, terror reduction, and security measures.
          </Typography>

          {/* Section 2 */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            As the Union Minister of Cooperation
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            He assumed charge of the Ministry of Cooperation in 2021, the year it was created. He led initiatives to modernize the cooperative sector, including allowing cooperative sugar mills to pay better prices to farmers and facilitating loans for small enterprises.
          </Typography>

          {/* Section 3 */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            As Lok Sabha M.P.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            His life journey is filled with examples of innovative approaches to issues, including the construction of world-class sports stadiums and water conservation projects in his constituency of Gandhinagar. His forward-thinking approach also led to social welfare programs for women and children.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            His innovative initiatives include the 'Bhaajan Mandali,' a program to direct youth away from harmful activities and toward social and economic progress.
          </Typography>

          {/* Section 4 */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            As a Minister in Gujarat
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            As Home Minister of Gujarat, he ensured law and order under the guidance of the then Chief Minister Narendra Modi. Amit Shah played a key role in enhancing Gujarat's reputation as the most peaceful state in terms of labor and industry.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            His contributions also led to the creation of the world's first forensic university and strengthening coastal security measures, ensuring peace and stability in the region.
          </Typography>
        </>
      ),
    },
  },

  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Commerce and Industry",
    description:
      "Boosting Exports: As the Minister of Commerce and Industry (2019–present), Goyal has focused on improving India's export performance and trade relations.",
    expandedContent: {
      heading: "A Firm Believer in Indian Culture & Ethos", // Same heading
      content: (
        <>
          {/* Full content from the image without changing structure */}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Amit Shah was not sent to a regular school by his parents. Rather, he received his early education in 'Indian Value Tradition' under the supervision of prominent scholars of the Gaikwad State. He was taught Indian scriptures, historical texts, grammar, and epics in his childhood. His early exposure to the Indian value system not only instilled deep faith in Indian culture in him but also helped him establish a permanent connection with the masses. He grew up as a person inclined towards philosophy and spirituality, who even today immerses himself in books on Indian culture, philosophy, and mythology. His love for reading is well reflected in his initiative to begin a library movement to promote the reading of books on Indian thought in the BJP, when he was the party President.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            His experience in the RSS only cemented his belief in Indian culture, which manifests itself in his endeavors to promote Indian languages and cultural nationalism across ranks and files of the party. Even as he shares the dais as one of the trustees of the Somnath temple trust with Prime Minister Narendra Modi and BJP veteran L.K. Advani, he also promotes the philosophy of Antyodaya in the party and among the masses. Shah firmly believes that successive governments in independent India failed to recognize and use the inner strengths of India’s very own traditional knowledge and ethos for the country’s development. But since 2014 under the leadership of PM Modi, gradually India is being brought on the right track, and that is the reason we are well on the path to becoming great again.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            During his tours, Shah always visits temples, cultural symbols, and places connected with historical personalities. Shah regularly speaks at events marking respect and remembrance of great Indian personalities. His scholarly and well-documented speeches on Adi Shankaracharya, Chanakya, Chhatrapati Shivaji Maharaj, Veer Savarkar, Dr. Syama Prasad Mookerjee, Pt. Deendayal Upadhyaya, etc., mark his knowledge and commitment to the lives and teachings of these great personalities.
          </Typography>
        </>
      ),
    },
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Environmental Conservation",
    description:
      "Goyal has promoted several green initiatives and policies aimed at sustainable development, particularly in the energy and railway sectors.",
    expandedContent: {
      heading: "Organization Builder & Ace Election Strategist",
      content: (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            Youngest National President of the BJP
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            At the age of 49, Amit Shah became the youngest National President of the BJP. Under the leadership of Prime Minister Modi, Shah played a pivotal role in expanding the BJP's organizational reach and turning it into a pan-Indian party. He traveled over 10,23,867 kilometers to help achieve this feat, significantly expanding the party's influence across new territories.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            Largest Party in the World
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Under Amit Shah's leadership, the BJP became the largest political party in the world. The party's membership increased from 2.47 crore to 11.2 crore, making it an influential force in global politics. He emphasized modernization with his principle of "Karya Sanskriti Wahi, Karya Paddhati Nayi" (the same work culture with a modern method). He ensured that BJP offices were built in every district, organized regular meetings, and implemented innovative methodologies.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            Election Strategy Mastermind
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Amit Shah's election strategies were pivotal in multiple electoral victories for the BJP. He played a key role in the historic performance of BJP in the 2014 Lok Sabha elections and was instrumental in achieving a resounding victory of 303 seats in the 2019 elections. Shah's strategic acumen expanded BJP’s reach to new states and regions, especially in places like Odisha, West Bengal, and Telangana. His "Vistarak Program" utilized booth workers and volunteers to connect with the masses, solidifying BJP's presence across the country.
          </Typography>
        </>
      ),
    },
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Public Service and Political Leadership",
    description:
      "Goyal has been a member of the Rajya Sabha (Upper House of the Indian Parliament) since 2010 and represents the state of Maharashtra.",
    expandedContent: {
      heading: "As a Sports Enthusiast",
      content: `An avid chess player and a sports enthusiast, Amit Shah under the guidance of the then Chief Minister Narendra Modi got chess included in the school curriculum and also won a place in the Guinness Book of World Records and the Limca Book by organizing unique chess competitions. As a cricket administrator, Shah took
      several steps to improve sports infrastructure and secure the future of the players.
      `,
    },
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    title: "Finance and Corporate Affairs",
    description:
      "Goyal briefly held the charge of the Ministry of Finance in 2019, during which he presented an Interim Budget, announcing various social welfare measures.",
    expandedContent: {
      heading: "As a Pioneer of the Cooperative Sector in Gujarat",
      content: `Shah’s deep understanding of cooperative movement was recognized a long ago when he was the national coordinator of BJP’s cooperative cell in 2001. Prior to his emergence, the Congress party dominated the cooperative politics of Gujarat. But Shah under the leadership of Modi turned it around and now the entire cooperative sector is in command of the BJP. He also is also credited with the revival of two dying banks –Ahmedabad District Cooperative Bank and Madhavpura Bank Ahmedabad. Now in a very short span of time as Union Cooperation Minister, Shah has brought the sector 
      into the mainstream of national discourse by introducing several new schemes and piloting legislations in the parliament. It is his effort and the blessings of PM Modi that “Sahakar se Samriddhi” has become a buzz word in the economic planning and progress of India.
      `,
    },
  },
];

export default function Achievements() {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index); // Toggle expand for selected row
  };

  const handleCloseExpand = () => {
    setExpandedRow(null); // Close the expanded row
  };

  return (
    <Box sx={{backgroundColor:'white'}}>
    <Box sx={{ backgroundColor: "#FFE8E8", px: 4, pb:4, pt:2}}>
      <HeaderWithLine heading="Achievements" />

      {/* Adjusting the Grid system */}
      <Grid container spacing={2}>
        {achievements.map((item, index) => (
          <React.Fragment key={index}>
            {/* Row with 3 cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "20px",
                  color: expandedRow === index ? '#000' : '#ff7e54', // Card color changes on click
                  boxShadow: 3,
                  border: expandedRow === index ? '2px solid #ff7e54' : 'none', // Highlight the clicked card
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Evenly space content inside the card
                  height: '100%', // Ensures equal card height
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box
                      component="span"
                      sx={{
                        backgroundColor: "#ff7e54",
                        color: "white",
                        borderRadius: "0 0 20px 20px",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" style={{ fontSize: '0.875rem', color: '#ff7e54' }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expandedRow === index}
                    aria-label="show more"
                    sx={{ color: "#ff7e54" }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>

            {/* Expanded content - Spanning full width below the cards */}
            {(index + 1) % 3 === 0 || index === achievements.length - 1 ? (
              <Grid item xs={12} key={`expanded-${index}`}>
                <Collapse in={expandedRow !== null && expandedRow <= index && expandedRow >= index - 2} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: "white", // Background white for expanded section
                      borderRadius: "10px",
                      boxShadow: 2,
                      marginTop: 2,
                      position: "relative",
                      maxWidth: '90%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    {/* Close Button (top-right) */}
                    <IconButton
                      onClick={handleCloseExpand}
                      sx={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        borderRadius: '50%',
                        backgroundColor: '#ff5722',
                        color: 'white',
                        width: 30,
                        height: 30,
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                        '&:hover': {
                          color:"#ff5722",
                        }
                      }}
                    >
                      <CloseIcon />
                    </IconButton>

                    {expandedRow !== null && expandedRow <= index && expandedRow >= index - 2 && (
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                          {achievements[expandedRow].expandedContent.heading}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#000' }}>
                          {achievements[expandedRow].expandedContent.content}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Collapse>
              </Grid>
            ) : null}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  </Box>
  );
}
