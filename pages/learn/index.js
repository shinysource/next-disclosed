import Layout from "../../components/Layout/Layout";
import Button from "../../components/core/Button/Button";
import Badge from "../../components/core/Badge/Badge";
import CardPaginate from "../../components/page/Learn/CardPaginate";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "public/image/Blog1.png";

import {
  Container,
  ContentText,
  SubTitle,
  SubscribeContainer,
  AboutTitle,
} from "./index.module";

const Learn = () => {
  const blogData = [
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
    {
      img: Blog1,
      date: "Disclosed • 14 Jan 2022",
      title: "Best casino games",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luct",
      siteStates: [
        {
          color: "purple",
          label: "Review",
        },
        {
          color: "blue2",
          label: "Casino",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Container className=" -mx-[5.5%] min-h-screen bg-[url('/background/Back4.png')]"></Container>

      <Container>
        <div className="w-[44%] my-14">
          <div className="flex justify-start gap-2">
            <Badge color="text-purple" label="Casinos"></Badge>
            <Badge color="text-bue2" label="Crypto"></Badge>
            <Badge color="text-pink" label="Safe"></Badge>
          </div>
          <div className="mt-3">
            <ContentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, portm faci...{" "}
              <span className="text-blue1">Real full article</span>
            </ContentText>
          </div>
        </div>
      </Container>

      <Container>
        <div className="w-full">
          <SubTitle>Related blogs</SubTitle>
        </div>
        <div className="w-full mt-16">
          <CardPaginate cards={blogData} itemsPerPage="4"></CardPaginate>
        </div>
      </Container>

      <SubscribeContainer className="mt-16 mb-[133px]">
        <AboutTitle className="text-white1">
          Join today and leave a review at your favourite casinos!
        </AboutTitle>
        <div className="pt-9">
          <Button
            label="Get Started"
            handleClick={() => {
              console.log("Visit Casino");
            }}
            variant="model"
            className="!bg-white !text-blue1"
          >
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </SubscribeContainer>
    </Layout>
  );
};

export default Learn;
