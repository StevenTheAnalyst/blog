import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, Grid } from "components";

const BloggerDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-publicsans items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[20px] 2xl:pt-[23px] 3xl:pt-[27px] w-[100%]">
        <header className="w-[77%]">
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
        <Column className="items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
          <Stack className="lg:h-[532px] xl:h-[609px] 2xl:h-[685px] 3xl:h-[822px] w-[100%]">
            <Row className="absolute bg-gray_600 lg:pb-[129px] xl:pb-[147px] 2xl:pb-[166px] 3xl:pb-[199px] lg:pr-[129px] xl:pr-[147px] 2xl:pr-[166px] 3xl:pr-[199px] top-[0] w-[100%]">
              <Stack className="lg:h-[272px] xl:h-[311px] 2xl:h-[350px] 3xl:h-[420px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] w-[61%]">
                <Img
                  src="images/img_group146.png"
                  className="absolute lg:h-[245px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] left-[0] top-[0] w-[53%]"
                  alt="Group146"
                />
                <Column className="absolute bottom-[0] right-[0] w-[79%]">
                  <Button
                    className="font-light font-publicsans ml-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillWhiteA7003f"
                  >
                    Writer
                  </Button>
                  <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 tracking-ls1 w-[100%]">
                    Eps 3 : How to write a book properly and correctly by paying
                    attention to various parts to support the story
                  </Text>
                  <Row className="font-publicsans items-center ml-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[38%]">
                    <Img
                      src="images/img_ellipse5.png"
                      className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      alt="EllipseFive"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[68%]">
                      <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                        By Jhone Leonardo
                      </Text>
                      <Text className="font-light ml-[1px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]">
                        Podcaster & Blogger
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Stack>
              <Column className="bg-white_A700_3f items-center justify-center lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius5 w-[27%]">
                <Text className="font-semibold leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[100%]">
                  Find and make it easy for yourself in listening to our
                  podcasts on
                </Text>
                <Img
                  src="images/img_listpodcast.svg"
                  className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[96%]"
                  alt="listpodcast"
                />
              </Column>
            </Row>
            <Row className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-center mx-[auto] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius5 shadow-bs5 w-[64%]">
              <Img
                src="images/img_rectangle39.png"
                className="lg:h-[168px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius5 w-[24%]"
                alt="RectangleThirtyNine"
              />
              <Column className="lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mr-[1px] w-[73%]">
                <Row className="font-publicsans items-center justify-between w-[100%]">
                  <Button
                    className="font-light lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray200"
                  >
                    Writer
                  </Button>
                  <Text className="font-light lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    25 August, 2020{" "}
                  </Text>
                </Row>
                <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[96%]">
                  Eps 3 : How to write a book properly and correctly by paying
                  attention to various parts to support the story
                </Text>
                <Text className="font-light font-publicsans lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[96%]">
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  sabot...
                </Text>
                <Row className="font-publicsans items-center ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[42%]">
                  <Button
                    className="flex items-center justify-center text-center w-[49%]"
                    leftIcon={
                      <Img
                        src="images/img_play.svg"
                        className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                        alt="play"
                      />
                    }
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillIndigo900"
                  >
                    <div className="bg-transparent font-light lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Play Now
                    </div>
                  </Button>
                  <Text className="font-light lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    Go to Spotify Now
                  </Text>
                </Row>
              </Column>
            </Row>
          </Stack>
          <Row className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] pt-[1px] w-[30%]">
            <Button
              className="flex lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center mb-[1px] rounded-radius50 lg:w-[59px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
              size="smIcn"
              variant="icbFillGray302"
            >
              <Img
                src="images/img_microphone.svg"
                className="flex items-center justify-center"
                alt="microphone"
              />
            </Button>
            <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] w-[78%]">
              <Text className="font-black font-merriweather ml-[2px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_600 w-[auto]">
                Latest Podcasts{" "}
              </Text>
              <Text className="font-normal font-publicsans lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_600 tracking-ls1 w-[auto]">
                Get started on latest episodes
              </Text>
            </Column>
          </Row>
          <Grid className="lg:gap-[17px] xl:gap-[19px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-4 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[77%]">
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group76.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group81.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group84.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group83.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
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
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group86.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Four"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group85.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Five"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group88.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Six"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group87.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Seven"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group90.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Eight"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group89.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Nine"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group92.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Ten"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius5 shadow-bs1 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end mt-[2px] lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-radius5 w-[100%]"
                style={{ backgroundImage: "url('images/img_group91.png')" }}
              >
                <Button className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center mt-[1px] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                  <Img
                    src="images/img_group.svg"
                    className="flex items-center justify-center lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px]"
                    alt="Group Eleven"
                  />
                </Button>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[100%]">
                The secrets of writing a good book
              </Text>
              <Text className="font-light font-publicsans ml-[1px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                By LaosPodcast
              </Text>
            </Column>
          </Grid>
          <Row className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[15%]">
            <Text className="bg-indigo_902 flex font-normal items-center not-italic lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[40px]">
              1
            </Text>
            <Text className="bg-white_A700 flex font-normal items-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_902 w-[40px]">
              2
            </Text>
            <Text className="font-light lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_902 w-[auto]">
              Next
            </Text>
            <Img
              src="images/img_arrowright_indigo_902.svg"
              className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[8%]"
              alt="arrowright"
            />
          </Row>
          <footer className="bg-gray_600 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] w-[100%]">
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
      </Column>
    </>
  );
};

export default BloggerDetailsPage;
