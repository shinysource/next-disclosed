import styled from "styled-components";

export const Container = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center w-full bg-no-repeat bg-center",
})``;

export const Title = styled.p.attrs({
  className: "text-white1 font-semibold text-[64px] text-center w-2/3",
})``;

export const Content = styled.p.attrs({
  className: "text-white1 font-normal text-[18px] text-center w-1/2",
})``;

export const SubTitle = styled.h2.attrs({
  className: "text-white1 font-semibold text-[48px] text-center",
})``;

export const IconTitle = styled.span.attrs({
  className: "text-white1 font-normal text-[16px]",
})``;

export const NewsSubTitle = styled.span.attrs({
  className: "text-white1 font-medium text-[16px]",
})``;

export const HomeCard = styled.span.attrs({
  className: "w-full bg-black1 py-5 px-7 rounded-xl",
})``;

export const HomeCardTitle = styled.span.attrs({
  className: "text-white1 font-medium text-[22px]",
})``;

export const About = styled.span.attrs({
  className: "w-full bg-black1 pt-12 pb-[135px] px-[165px]",
})``;

export const AboutTitle = styled.span.attrs({
  className: "text-blue1 font-semibold text-[42px]",
})``;

export const AboutContent = styled.span.attrs({
  className: "text-white1 font-medium text-[18px]",
})``;
