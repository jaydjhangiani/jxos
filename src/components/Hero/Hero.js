import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome to <br/>
       JXOS Tech.
     </SectionTitle>
     <SectionText>
     Digital Marketing and Web Development Start-Up established in June 2019. We offer consulting services in Social Media Management and develop pocket-friendly websites for small and medium-sized businesses.
     </SectionText>
     <Button onClick={() => window.location = "https://google.com"}>
       Learn More
     </Button>
     
   </LeftSection>
 </Section>
);

export default Hero;