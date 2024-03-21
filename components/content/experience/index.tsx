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

export const Experience = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Work Experience</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Sep 2023 - Nov 2023 :
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
                Intern Linux Administrator{" "}
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
                <Link href="https://www.cskaa.com/index.html#">
                  &ensp;&ensp;&ensp;&ensp;&ensp;@CSKAA
                </Link>
              </Text>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                  Worked on linux servers(configuring and managing){" "}
                </Text>
                <Text as={"ul"} css={{ mr: "1em" }}>
                  Deployed web application on linux servers{" "}
                </Text>
                <Text as={"ul"} css={{ mr: "1em" }}>
                  Android emulation and remote access{" "}
                </Text>
              </Box>
            </Box>

            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Feb 2022 - Current :
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
                Main Editor{" "}
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
                <Link href="https://www.wcewlug.org/">
                  &ensp;&ensp;&ensp;&ensp;&ensp;@WLUG
                </Link>
              </Text>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                  Managing blogs of the club{" "}
                </Text>
                <Text as={"ul"} css={{ mr: "1em" }}>
                  Managing social media handles of the club{" "}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>

      <br />

      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Certifications</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Nov 2023 - Dec 2023 :
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
                Google Cloud Computing Foundations{" "}
              </Text>

              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link  href="https://www.cloudskillsboost.google/public_profiles/c7df3358-d1b9-433e-beff-efbc7780aaf5">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; GCP Profile{" "}
                    </Link>
                </Text>
              </Box>
            </Box>

            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Jan 2024 - Ongoing :
              </Text>
              <Text css={{ mr: "1em" }} weight={"bold"} span>
              Deep Learning Specialization{" "}
              </Text>

              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link  href="https://coursera.org/share/38195cd4f61c7f0af3e4635467d5591f">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Course 1 : Neural Networks and Deep Learning{" "}
                    </Link>
                </Text>
              </Box>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link  href="https://coursera.org/share/1ceb3ed18cac2d8c871ed0b56ba12c13">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Course 2 : Improving Deep Neural Networks{" "}
                    </Link>
                </Text>
              </Box>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link  href="https://coursera.org/share/a2074be10cc12d21635ee53791236edd">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Course 3 : Structuring Machine Learning Projects{" "}
                    </Link>
                </Text>
              </Box>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link  href="https://coursera.org/share/fdd95b510beac6b3087d029f52891fce">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Course 4 : Convolutional Neural Networks{" "}
                    </Link>
                </Text>
              </Box>
              <Box as={"ol"}>
                <Text as={"ul"} css={{ mr: "1em" }}>
                    <Link >
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Course 5 : Sequence Models (Ongoing){" "}
                    </Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
    </Box>
  );
};
