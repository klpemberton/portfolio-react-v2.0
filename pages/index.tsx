import React from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ResumeJobsInfo from '../src/components/ResumeJobsInfo';
import { useRouter } from 'next/router';
import { desktop, mobile } from '../src/styles/theme';

interface SummaryDataItem {
  icon: string;
  type: string;
  data: string[];
}

const summaryData: SummaryDataItem[] = [
  {
    icon: '⚛️',
    type: 'Front End',
    data: [
      'JavaScript, React, Redux, Vue.js, TypeScript',
      'API Integration',
      'Git, yarn, npm, Gulp, Webpack, Jenkins',
      'Shared Component Architecture',
    ],
  },
  {
    icon: '🖧',
    type: 'Back End',
    data: [
      'Node.js, TypeScript',
      'API Design & Development',
      'AWS: S3, Lambda, API Gateway, CloudFront',
      'Microservices',
    ],
  },
  {
    icon: '👩‍🏫',
    type: 'Leadership',
    data: ['Code Review', 'Training/Mentoring', 'Pair Programming', 'Project Lead'],
  },
];

const Heading = styled.h1`
  margin: 10px 0;
  text-align: center;

  span {
    border-bottom: 10px solid ${(props) => props.theme.colors.home};
  }
`;

const Subheading = styled.h2`
  width: 100%;
  margin: 40px auto 30px;
  text-align: center;
  line-height: 1.69;
  border-bottom: none;

  span {
    border-bottom: 6px solid ${(props) => props.theme.colors.home};
  }
`;

const HeadingNoUnderline = styled.h3`
  text-align: center;
`;

const SmallHeadingNoUnderline = styled.h4`
  text-align: center;
`;

const VerySmallHeadingNoUnderline = styled.h5`
  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 25px 0;
`;

const Columns = styled.section`
  display: block;
  ${desktop`
    display: flex;
    flex-wrap: nowrap;
  `}
  width: 100%;
`;

const List = styled.ul`
  margin-top: 0;
  padding-left: 0;
  flex: 1 1 auto;
  list-style-type: '✔️';

  &:first-child {
    ${mobile`margin-bottom: 0;`}
  }
  &:nth-child(2) {
    ${mobile`margin-top: 0;`}
  }
`;

const ListItem = styled.li`
  margin-left: 20px;
  padding-left: 10px;
`;

const Education = styled.div`
  width: 100%;
  ${desktop`width: 65%;`}
  margin: 0 auto;
  text-align: center;

  ${HeadingNoUnderline} {
    margin: 17px 0 0;
  }

  ${SmallHeadingNoUnderline} {
    margin: 5px 0 0;
  }

  ${VerySmallHeadingNoUnderline} {
    margin: 5px 0 0;
  }
`;

export default function HomePage() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <PageContent pageTheme={pathname === '/' ? 'home' : pathname.substring(1)}>
      <Heading>
        <span>Kristine Pemberton</span>
      </Heading>
      <Subheading>
        <span>Senior Front End Software Engineer</span>
      </Subheading>

      <HeadingNoUnderline>
        11 years of experience developing and maintaining front end codebases within the full
        software development lifecycle.
      </HeadingNoUnderline>

      <Paragraph>
        Fluent in various front end languages and related technologies; experienced with numerous
        frameworks, templating engines, and build systems; proven to be adaptable in learning new
        languages and methodologies. Reliable self-starter with excellent communication skills and
        demonstrated ability to thrive in a remote engineering team environment.
      </Paragraph>

      <SmallHeadingNoUnderline>Areas of Expertise:</SmallHeadingNoUnderline>

      <Columns>
        {summaryData.map(({ type, icon, data }: SummaryDataItem) => {
          return (
            <List key={type}>
              <span>
                {icon} {type}
              </span>
              {data.map((bulletText: string) => (
                <ListItem key={bulletText}>{bulletText}</ListItem>
              ))}
            </List>
          );
        })}
      </Columns>

      <Subheading>
        <span>Professional Experience</span>
      </Subheading>
      <ResumeJobsInfo />

      <Education>
        <Subheading>
          <span>Education</span>
        </Subheading>

        <HeadingNoUnderline>
          Computer Information Systems: Database &amp; Web Management
        </HeadingNoUnderline>

        <SmallHeadingNoUnderline>Associate of Applied Science</SmallHeadingNoUnderline>

        <VerySmallHeadingNoUnderline>
          IVY TECH COMMUNITY COLLEGE OF INDIANA, BLOOMINGTON, IN
        </VerySmallHeadingNoUnderline>
      </Education>
    </PageContent>
  );
}
