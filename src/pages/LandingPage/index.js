import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  Button,
  List,
  Input,
} from "components";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-publicsans items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[20px] 2xl:pt-[23px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center w-[77%]">
          <header className="w-[100%]">
            <Row className="justify-end pl-[1px] py-[1px] w-[100%]">
              <Img
                src="images/img_edit.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[3px] w-[2%]"
                alt="edit"
              />
              <Text className="font-extrabold font-nunitosans lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 uppercase w-[auto]">
                Blogsly
              </Text>
              <Column className="font-publicsans items-center lg:ml-[164px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] mt-[4px] w-[5%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_900 tracking-ls1 w-[auto]">
                  Home
                </Text>
                <Line className="bg-indigo_900 h-[1px] mt-[4px] w-[100%]" />
              </Column>
              <Text className="font-bold font-publicsans lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 tracking-ls1 w-[auto]">
                Podcast
              </Text>
              <Text className="font-bold font-publicsans lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 tracking-ls1 w-[auto]">
                Blog
              </Text>
              <Text className="font-bold font-publicsans lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 tracking-ls1 w-[auto]">
                About
              </Text>
              <Text className="font-bold font-publicsans lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 tracking-ls1 w-[auto]">
                Contact
              </Text>
              <Img
                src="images/img_search.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mb-[1px] lg:ml-[252px] xl:ml-[288px] 2xl:ml-[324px] 3xl:ml-[389px] w-[3%]"
                alt="search"
              />
            </Row>
          </header>
          <Stack className="lg:h-[259px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[400px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[93%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[76%]">
              <Text className="font-black font-merriweather leading-[normal] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-center text-gray_600 w-[100%]">
                Share via writing and podcasts, hope you enjoy
              </Text>
              <Text className="font-normal font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-gray_601 w-[80%]">
                Increase your knowledge by reading new things and I will share
                whatever I know for you, as long as I enjoy it
              </Text>
              <Row className="font-publicsans items-center justify-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[66%]">
                <Column className="bg-indigo_900 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius355 shadow-bs w-[43%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[auto]">
                    Read More
                  </Text>
                </Column>
                <Column className="border-2 border-indigo_201 border-solid items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius355 w-[52%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-indigo_900 tracking-ls1 w-[auto]">
                    Listen to Podcasts
                  </Text>
                </Column>
              </Row>
            </Column>
            <Img
              src="images/img_ornamen.svg"
              className="absolute bottom-[20%] lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] top-[17%] w-[100%]"
              alt="ornamen"
            />
          </Stack>
          <Row className="items-center justify-between lg:mt-[126px] xl:mt-[144px] 2xl:mt-[162px] 3xl:mt-[194px] pt-[1px] w-[100%]">
            <Button
              className="flex lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center mb-[1px] rounded-radius50 lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              size="smIcn"
              variant="icbFillGray300"
            >
              <Img
                src="images/img_microphone.svg"
                className="flex items-center justify-center"
                alt="microphone"
              />
            </Button>
            <Column className="mt-[1px] w-[80%]">
              <Text className="font-black font-merriweather ml-[2px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_600 w-[auto]">
                Latest Podcasts{" "}
              </Text>
              <Text className="font-normal font-publicsans lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_601 tracking-ls1 w-[auto]">
                Get started on latest episodes
              </Text>
            </Column>
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-indigo_902 tracking-ls1 w-[auto]">
              See all podcasts
            </Text>
          </Row>
          <List
            className="lg:gap-[17px] xl:gap-[19px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-4 min-h-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group76.png')" }}
              >
                <Button
                  className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                  variant="icbFillGray60076"
                >
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group77.png')" }}
              >
                <Button
                  className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                  variant="icbFillGray60076"
                >
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group One"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group78.png')" }}
              >
                <Button
                  className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                  variant="icbFillGray60076"
                >
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Two"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group79.png')" }}
              >
                <Button
                  className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                  variant="icbFillGray60076"
                >
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Three"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
          </List>
          <Row className="justify-evenly 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
            <Column className="w-[68%]">
              <Row className="font-publicsans items-center justify-between ml-[2px] w-[96%]">
                <Img
                  src="images/img_ellipse5.png"
                  className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  alt="EllipseFive"
                />
                <Column className="w-[68%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                    By Jhone Leonardo
                  </Text>
                  <Text className="font-light mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    12 September, 2020
                  </Text>
                </Column>
                <Text className="font-light lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                  <span className="text-bluegray_600 font-publicsans">
                    Category{" "}
                  </span>
                  <span className="text-pink_300 font-merriweather font-black lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Writing
                  </span>
                </Text>
              </Row>
              <Text className="font-bold font-merriweather italic leading-[normal] ml-[2px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_600 tracking-ls1 w-[86%]">
                Consistent way of working to train yourself
              </Text>
              <Img
                src="images/img_rectangle11.png"
                className="lg:h-[304px] xl:h-[347px] 2xl:h-[391px] 3xl:h-[469px] ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius5 w-[96%]"
                alt="RectangleEleven"
              />
              <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[2px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                We all know that every person has his or her own desire to work,
                but do you know that we can actually be consistent in making
                works if we want, now in this article I want to invite all of
                you to learn to be consistent in creating.
              </Text>
              <Row className="font-publicsans items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[62%]">
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLightblue50"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="clock"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  5 minutes ago
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLime50"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className="flex items-center justify-center"
                    alt="checkmark"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  12 Like
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_location.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="location"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Share
                </Text>
              </Row>
              <Button
                className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[15px] text-center w-[34%] xl:mt-[17px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright.svg"
                    className="text-center lg:w-[19px] lg:ml-[14px] xl:w-[22px] xl:ml-[16px] 2xl:w-[25px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:ml-[22px]"
                    alt="arrow_right"
                  />
                }
                shape="RoundedBorder5"
                size="3xl"
                variant="FillIndigo90067"
              >
                <div className="bg-transparent font-bold font-publicsans lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                  Continue Reading
                </div>
              </Button>
              <Row className="font-publicsans items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[96%]">
                <Img
                  src="images/img_ellipse5.png"
                  className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  alt="EllipseFive One"
                />
                <Column className="w-[68%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                    By Jhone Leonardo
                  </Text>
                  <Text className="font-light mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    12 September, 2020
                  </Text>
                </Column>
                <Text className="font-light lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                  <span className="text-bluegray_600 font-publicsans">
                    Category{" "}
                  </span>
                  <span className="text-pink_300 font-merriweather font-black lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Writing
                  </span>
                </Text>
              </Row>
              <Text className="font-bold font-merriweather italic leading-[normal] ml-[2px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_600 tracking-ls1 w-[86%]">
                Consistent way of working to train yourself
              </Text>
              <Img
                src="images/img_rectangle11_390X728.png"
                className="lg:h-[304px] xl:h-[347px] 2xl:h-[391px] 3xl:h-[469px] ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius5 w-[96%]"
                alt="RectangleEleven One"
              />
              <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[2px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                We all know that every person has his or her own desire to work,
                but do you know that we can actually be consistent in making
                works if we want, now in this article I want to invite all of
                you to learn to be consistent in creating.
              </Text>
              <Row className="font-publicsans items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[62%]">
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLightblue50"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="clock One"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  5 minutes ago
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLime50"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className="flex items-center justify-center"
                    alt="checkmark One"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  12 Like
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_location.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="location One"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Share
                </Text>
              </Row>
              <Button
                className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[15px] text-center w-[34%] xl:mt-[17px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright.svg"
                    className="text-center lg:w-[19px] lg:ml-[14px] xl:w-[22px] xl:ml-[16px] 2xl:w-[25px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:ml-[22px]"
                    alt="arrow_right"
                  />
                }
                shape="RoundedBorder5"
                size="3xl"
                variant="FillIndigo90067"
              >
                <div className="bg-transparent font-bold font-publicsans lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                  Continue Reading
                </div>
              </Button>
              <Row className="font-publicsans items-center justify-between ml-[2px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[96%]">
                <Img
                  src="images/img_ellipse5.png"
                  className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  alt="EllipseFive Two"
                />
                <Column className="w-[68%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                    By Jhone Leonardo
                  </Text>
                  <Text className="font-light mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    12 September, 2020
                  </Text>
                </Column>
                <Text className="font-light lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                  <span className="text-bluegray_600 font-publicsans">
                    Category{" "}
                  </span>
                  <span className="text-pink_300 font-merriweather font-black lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Writing
                  </span>
                </Text>
              </Row>
              <Text className="font-bold font-merriweather italic leading-[normal] ml-[2px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_600 tracking-ls1 w-[86%]">
                Consistent way of working to train yourself
              </Text>
              <Img
                src="images/img_rectangle11_1.png"
                className="lg:h-[304px] xl:h-[347px] 2xl:h-[391px] 3xl:h-[469px] ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius5 w-[96%]"
                alt="RectangleEleven Two"
              />
              <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[2px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                We all know that every person has his or her own desire to work,
                but do you know that we can actually be consistent in making
                works if we want, now in this article I want to invite all of
                you to learn to be consistent in creating.
              </Text>
              <Row className="font-publicsans items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[62%]">
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLightblue50"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="clock Two"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  5 minutes ago
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillLime50"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className="flex items-center justify-center"
                    alt="checkmark Two"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  12 Like
                </Text>
                <Button
                  className="flex lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_location.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="location Two"
                  />
                </Button>
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Share
                </Text>
              </Row>
              <Button
                className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[15px] text-center w-[34%] xl:mt-[17px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright.svg"
                    className="text-center lg:w-[19px] lg:ml-[14px] xl:w-[22px] xl:ml-[16px] 2xl:w-[25px] 2xl:ml-[19px] 3xl:w-[30px] 3xl:ml-[22px]"
                    alt="arrow_right"
                  />
                }
                shape="RoundedBorder5"
                size="3xl"
                variant="FillIndigo90067"
              >
                <div className="bg-transparent font-bold font-publicsans lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-ls1">
                  Continue Reading
                </div>
              </Button>
              <Row className="font-publicsans justify-end ml-[auto] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[28%]">
                <Text className="bg-indigo_900 flex font-normal items-center not-italic lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[40px]">
                  1
                </Text>
                <Text className="bg-white_A700 flex font-normal items-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_900 w-[40px]">
                  2
                </Text>
                <Text className="font-light lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_900 w-[auto]">
                  Next
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[8%]"
                  alt="arrowright Three"
                />
              </Row>
            </Column>
            <Column className="w-[32%]">
              <Img
                src="images/img_ellipse5.png"
                className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] ml-[1px] rounded-radius5 w-[99%]"
                alt="RectangleTen"
              />
              <Text className="font-bold font-merriweather ml-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[auto]">
                Jhone Leonardo
              </Text>
              <Text className="font-medium font-publicsans lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                Podcaster & Blogger
              </Text>
              <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[1px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[92%]">
                I want to share knowledge in my own style. I have been working
                on various things that I think I really need to share with you
                all. I am a jhone podcaster and blogger
              </Text>
              <Text className="font-bold font-merriweather ml-[1px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                Follow Me On
              </Text>
              <Row className="font-publicsans ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[55%]">
                <Img
                  src="images/img_vector.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[10%]"
                  alt="Vector"
                />
                <Text className="font-light lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                  Hellojhone@gmail.com
                </Text>
              </Row>
              <Row className="font-publicsans ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[42%]">
                <Img
                  src="images/img_camera.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="camera"
                />
                <Text className="font-light lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                  @Johoe_Podcast
                </Text>
              </Row>
              <Row className="font-publicsans ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[43%]">
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] w-[13%]"
                  onClick={handleNavigate1}
                  alt="twitter"
                />
                <Text className="font-light lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                  @JohoeLeonardo
                </Text>
              </Row>
              <Text className="font-bold font-merriweather ml-[1px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                Tranding Blog
              </Text>
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_bloghead.png')" }}
              >
                <Column className="bg-gray_900_3f justify-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius5 w-[100%]">
                  <Text className="font-bold font-merriweather italic leading-[normal] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[82%]">
                    Consistent way of working to train yourself
                  </Text>
                  <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    5 minutes ago
                  </Text>
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14.png"
                    className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                    alt="RectangleFourteen"
                  />
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="font-light font-publicsans 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Line className="self-center w-[100%] h-[0.5px] bg-bluegray_100" />
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_96X96.png"
                    className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                    alt="RectangleFourteen One"
                  />
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="font-light font-publicsans 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Line className="self-center w-[100%] h-[0.5px] bg-bluegray_100" />
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_1.png"
                    className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                    alt="RectangleFourteen Two"
                  />
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="font-light font-publicsans 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
                <Line className="self-center w-[100%] h-[0.5px] bg-bluegray_100" />
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                  <Img
                    src="images/img_rectangle14_2.png"
                    className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                    alt="RectangleFourteen Three"
                  />
                  <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[67%]">
                    <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                      Consistent way of working to train yourself
                    </Text>
                    <Text className="font-light font-publicsans 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                      5 minutes ago
                    </Text>
                  </Column>
                </Row>
              </List>
              <Text className="font-bold font-merriweather ml-[1px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Categories
              </Text>
              <Row className="font-publicsans items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Writing
                </Text>
                <Text className="bg-blue_50 flex font-normal items-center not-italic lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[40px]">
                  1
                </Text>
              </Row>
              <Row className="font-publicsans items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Working
                </Text>
                <Text className="bg-blue_50 flex font-normal items-center not-italic lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[40px]">
                  5
                </Text>
              </Row>
              <Row className="font-publicsans items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Podcaster
                </Text>
                <Text className="bg-blue_50 flex font-normal items-center not-italic lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[40px]">
                  3
                </Text>
              </Row>
            </Column>
          </Row>
          <Stack className="bg-green_50 lg:h-[286px] xl:h-[327px] 2xl:h-[368px] 3xl:h-[441px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius5 w-[100%]">
            <Row className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[90%]">
              <Column className="mt-[1px] w-[56%]">
                <Text className="font-light font-publicsans lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_900 w-[auto]">
                  NEWSLETTER
                </Text>
                <Text className="font-black font-merriweather leading-[normal] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_600 w-[86%]">
                  Subscribe to our website newsletter to receive news and
                  updates.
                </Text>
                <Text className="font-light font-publicsans lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Get special offers directly to your email every week!
                </Text>
              </Column>
              <Column className="w-[44%]">
                <Input
                  className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-indigo_900_79 text-indigo_900_79 w-[100%]"
                  wrapClassName="w-[100%]"
                  type="email"
                  name="field"
                  placeholder="Your Email"
                  size="md"
                  variant="OutlineIndigo900"
                ></Input>
                <Button
                  className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[31%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillIndigo900"
                >
                  Subscribe
                </Button>
              </Column>
            </Row>
            <Stack className="absolute bg-pink_300 bottom-[0] 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] right-[6%] rotate-[30deg] rounded-radius50 shadow-bs2 2xl:w-[105px] 3xl:w-[126px] lg:w-[81px] xl:w-[93px]">
              <Img
                src="images/img_ticket.svg"
                className="absolute lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] inset-[0] justify-center m-[auto] w-[50%]"
                alt="ticket"
              />
            </Stack>
          </Stack>
        </Column>
        <footer className="bg-gray_600 lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] w-[100%]">
          <Column className="items-center lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] mx-[auto] w-[77%]">
            <Row className="items-center pt-[1px] w-[100%]">
              <Column className="font-nunitosans pr-[1px] py-[1px] w-[31%]">
                <Row className="ml-[3px] mr-[auto] mt-[1px] w-[42%]">
                  <Img
                    src="images/img_edit_20X18.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] w-[13%]"
                    alt="edit One"
                  />
                  <Text className="font-extrabold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 uppercase w-[auto]">
                    Blogsly
                  </Text>
                </Row>
                <Row className="font-publicsans items-center mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[48%]">
                  <Img
                    src="images/img_favorite.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[12%]"
                    alt="favorite"
                  />
                  <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Build with heart
                  </Text>
                </Row>
              </Column>
              <Text className="font-light font-publicsans lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Home
              </Text>
              <Text className="font-light font-publicsans lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Podcast
              </Text>
              <Text className="font-light font-publicsans lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Blog
              </Text>
              <Text className="font-light font-publicsans lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                About
              </Text>
              <Text className="font-light font-publicsans lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Contact
              </Text>
              <Column className="font-publicsans items-center lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] w-[10%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Follow Me on
                </Text>
                <Img
                  src="images/img_group94.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  alt="GroupNinetyFour"
                />
              </Column>
            </Row>
            <Text className="font-light lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
              Powered by Blogsly
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default LandingPagePage;
