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

export const Resume = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", height:'100vh', "@xsMax": { px: "$10" }, width: "100%" }}>
      <SectionAnimation delay={0.2}>
        <Box>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(2, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(1, 1fr)",
              },
              mb: "$4",
            }}
          >
            <Box as={"li"}>
              <Text h3>&nbsp; &nbsp; &nbsp; Download Resume</Text>
            </Box>
            <Box as={"li"}>
              <a href="/resume.pdf" download>
              <Button flat color={'success'}>Download</Button>
              </a>
            </Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <br />
      <SectionAnimation delay={0.2}>
        <Box style={{height:'100vh', widows:'100%'}}>
          <iframe
            src={"/resume.pdf"}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </SectionAnimation>
    </Box>
  );
};
