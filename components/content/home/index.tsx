import { Text, Avatar, Card, Button, Link } from "@nextui-org/react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import { GithubIcon } from "../../icons/github-icon";
import { LinkedinIcon } from "../../icons/linkedin-icon";
import { SectionAnimation } from "../../animations/section";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkIcon } from "../../icons/link-icon";
import { GridContainer } from "../../styles/grid";
import IconBxlGmail from "../../icons/mail-icon";
import IconTwitterCircled from "../../icons/twitter-icon";

export const Home = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      {/* <Card variant="flat" css={{ marginBottom: "$10" }}>
        <Card.Body css={{ backgroundColor: "$accents2" }}>
          <Text css={{ fontFamily: "inherit", textAlign: "center" }} as={"p"}>
            Hello, I&apos;m Siddharth. I&apos;m a CSE pre-final year student in Walchand College of Engineering Sangli
          </Text>
        </Card.Body>
      </Card> */}
      <Flex justify={"between"} css={{ pb: "$10" }}>
        <Box css={{ alignSelf: "center" }}>
          <Text h2 css={{ my: "$0" }}>
            Siddharth Salunkhe
          </Text>
          <Text css={{ fontFamily: "inherit" }}>
            CSE Student &nbsp; | &nbsp; Full Stack Developer &nbsp; | &nbsp; ML
            Enthusiast
          </Text>
        </Box>

        {/* <Avatar
          css={{ "--nextui--avatarXl": "7.5rem" }}
          pointer
          bordered
          size={"xl"}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        /> */}
      </Flex>
      <SectionAnimation delay={0.1}>
        <Box css={{ mb: "$10" }}>
          <Text h3>About Me</Text>
          <Text
            span
            css={{
              textIndent: "4em",
              display: "block",
            }}
          >
            Experienced Full Stack Developer with strong proficiency in MERN
            stack. Currently expanding skills in Machine Learning, particularly
            in deep learning algorithms, with practical project experience.
            I&apos;m committed to mastering ML and making significant
            contributions to the field through continuous learning and hands-on
            experience.
          </Text>

          <Flex justify={"center"} css={{ mt: "$8" }}>
            <NextLink href="/projects">
              <Link block css={{ gap: "$4" }}>
                Projects <LinkIcon />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </SectionAnimation>

      <br />

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Skills</Text>

          <Text h4>
            <u>Frontend :</u>
          </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(1, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"} css={{ p: "$2" }}>
              ReactJS
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              TailwindCSS
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Streamlit
            </Box>
            {/* Add more frontend skills here */}
          </GridContainer>

          <Text h4>
            <u>Backend :</u>
          </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"} css={{ p: "$2" }}>
              NodeJs
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              ExpressJs
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              MongoDB
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              MySQL
            </Box>
            {/* Add backend skills here */}
          </GridContainer>

          <Text h4>
            <u>Programing Languages :</u>
          </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"} css={{ p: "$2" }}>
              C/C++
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Javascript / Typescript
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Python
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              SQL
            </Box>
            {/* Add backend skills here */}
          </GridContainer>

          <Text h4>
            <u>Dev-tools/Technologies :</u>
          </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"} css={{ p: "$2" }}>
              Linux
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Docker
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Google Cloud Platform
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Git/Github
            </Box>
            {/* Add dev-tools/technologies skills here */}
          </GridContainer>

          <Text h4>
            <u>Machine Learning :</u>
          </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"} css={{ p: "$2" }}>
              Tensorflow
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Keras
            </Box>
            <Box as={"li"} css={{ p: "$2" }}>
              Scikit-learn
            </Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <br />

      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Education</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2019
              </Text>
              <Text span>HSC Board</Text>
              <Text span>
                &ensp;(<b>Percentage:</b> 96.80%)
              </Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2021
              </Text>
              <Text span>SSC Board</Text>
              <Text span>
                &ensp;(<b>Percentage:</b> 95.20%)
              </Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2021 - 2025
              </Text>
              <Text span>B.tech CSE from WCE Sangli </Text>
              <Text span>
                &ensp;(<b>CGPA:</b> 8.28)
              </Text>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>

      <br />
      <br />

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>On the Web </Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://github.com/Sidd-77"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GithubIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Sidd-77
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://www.linkedin.com/in/siddharth-salunkhe-a52193224/"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<LinkedinIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  LinkedIn
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://twitter.com/sidd_punk"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<IconTwitterCircled />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @sidd_punk
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="mailto:siddharthsalunkhe2003@gmail.com"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<IconBxlGmail/>}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  Mail
                </Button>
              </Link>
            </Box>
            {/* Add dev-tools/technologies skills here */}
          </GridContainer>
        </Box>
      </SectionAnimation>
    </Box>
  );
};
