import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, List } from "components";

const BlogDetailsPage = () => {
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
        <Stack className="lg:h-[641px] xl:h-[733px] 2xl:h-[824px] 3xl:h-[989px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[92%]">
          <Img
            src="images/img_rectangle20.png"
            className="absolute lg:h-[389px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] rounded-radius25 top-[0] w-[100%]"
            alt="RectangleTwenty"
          />
          <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-end mx-[auto] lg:p-[37px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius25 shadow-bs3 w-[83%]">
            <Text className="font-light font-publicsans lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              <span className="text-bluegray_600">Category</span>
              <span className="text-black_900"> </span>
              <span className="text-pink_300 font-merriweather font-bold tracking-ls1">
                Writing
              </span>
            </Text>
            <Text className="font-bold font-merriweather italic leading-[normal] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_600 tracking-ls1 w-[95%]">
              How to write a book properly and correctly by paying attention to
              various parts to support the story
            </Text>
            <Row className="font-publicsans lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[97%]">
              <Img
                src="images/img_ellipse5.png"
                className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                alt="EllipseFive"
              />
              <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[71%]">
                <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_600 w-[auto]">
                  By Jhone Leonardo
                </Text>
                <Text className="font-light mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                  12 September, 2020
                </Text>
              </Column>
              <Button
                className="2xl:ml-[14px] 3xl:ml-[16px] flex items-center justify-center lg:ml-[10px] mt-[4px] text-center w-[19%] xl:ml-[12px]"
                leftIcon={
                  <Img
                    src="images/img_signal.svg"
                    className="text-center lg:w-[23px] lg:mr-[7px] xl:w-[26px] xl:mr-[8px] 2xl:w-[30px] 2xl:mr-[10px] 3xl:w-[36px] 3xl:mr-[12px]"
                    alt="signal"
                  />
                }
                shape="RoundedBorder5"
                size="2xl"
                variant="OutlinePink300"
              >
                <div className="bg-transparent font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Share Now
                </div>
              </Button>
            </Row>
          </Column>
        </Stack>
        <Column className="lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[68%]">
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once. We have a saboteur aboard.
            We know you’re dealing in stolen ore. But I wanna talk about the
            assassination attempt on Lieutenant Worf. Could someone survive
            inside a transporter buffer for 75 years? Fate. It protects fools,
            little children, and ships named “Enterprise.”
          </Text>
          <Row className="lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] pr-[1px] py-[1px] w-[96%]">
            <Img
              src="images/img_trash.svg"
              className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] mt-[2px] w-[4%]"
              alt="trash"
            />
            <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] w-[90%]">
              <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_600 w-[100%]">
                There is a way out of every box, a solution to every puzzle;
                it’s just a matter of finding it.
              </Text>
              <Text className="font-light font-publicsans lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                JEAN-LUC PICARD
              </Text>
            </Column>
          </Row>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            <span className="text-bluegray_600">
              The game’s not big enough unless it scares you a little. Wait a
              minute – you’ve been declared dead. You can’t give{" "}
            </span>
            <span className="text-bluegray_600 font-bold">orders around</span>
            <span className="text-bluegray_600">
              {" "}
              here. I’ll alert the crew. What? We’re not at all alike! Flair is
              what marks the difference between artistry and mere competence.
            </span>
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[98%]">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once. We have a saboteur aboard.
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            Could someone survive inside a transporter buffer for 75 years?
            Fate. It protects fools, little children, and ships named
            “Enterprise.”
          </Text>
          <Text className="font-bold font-merriweather lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_600 w-[auto]">
            Lorem Ipsum Dolor Sit Amet
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once. We have a saboteur aboard.
            We know you’re dealing in stolen ore. But I wanna talk about the
            assassination attempt on Lieutenant Worf. Could someone survive
            inside a transporter buffer for 75 years? Fate. It protects fools,
            little children, and ships named “Enterprise.”
          </Text>
          <Row className="items-center justify-between lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
            <Img
              src="images/img_rectangle23.png"
              className="lg:h-[260px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] rounded-radius15 w-[49%]"
              alt="RectangleTwentyThree"
            />
            <Img
              src="images/img_rectangle24.png"
              className="lg:h-[260px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] rounded-radius15 w-[49%]"
              alt="RectangleTwentyFour"
            />
          </Row>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[98%]">
            What’s a knock-out like you doing in a computer-generated gin joint
            like this? But the probability of making a six is no greater than
            that of rolling a seven. I guess it’s better to be lucky than good.
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            Damage report! I’ve had twelve years to think about it. And if I had
            it to do over again, I would have grabbed the phaser and pointed it
            at you instead of them. Some days you get the bear, and some days
            the bear gets you. Ensign Babyface! I’m afraid I still don’t
            understand, sir. Mr. Crusher, ready a collision course with the Borg
            ship. Yesterday I did not know how to eat gagh. You’re going to be
            an interesting companion.
          </Text>
          <Row className="font-publicsans lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[26%]">
            <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
              Lorem ipsum dolor sit amet.
            </Text>
          </Row>
          <Row className="font-publicsans lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[35%]">
            <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[4px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
              At vero eos et accusamus et iusto odio.
            </Text>
          </Row>
          <Row className="font-publicsans lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[43%]">
            <div className="bg-bluegray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
              Excepteur sint occaecat cupidatat non proident.
            </Text>
          </Row>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[99%]">
            Could someone survive inside a transporter buffer for 75 years?
            Fate. It protects fools, little children, and ships named
            “Enterprise.”
          </Text>
          <Text className="font-medium font-publicsans lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_600 w-[auto]">
            Tags
          </Text>
          <Row className="font-publicsans items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[51%]">
            <Button
              className="font-thin lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillGray200"
            >
              Writing
            </Button>
            <Button
              className="font-thin lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillGray200"
            >
              Tutorial
            </Button>
            <Button
              className="font-thin lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[19%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillGray200"
            >
              How to
            </Button>
            <Button
              className="font-thin lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[15%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillGray200"
            >
              Book
            </Button>
            <Button
              className="font-thin lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[15%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillGray200"
            >
              2020
            </Button>
          </Row>
          <Stack className="font-publicsans lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] lg:ml-[119px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[63%]">
            <Img
              src="images/img_group_blue_51.svg"
              className="absolute 3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[84px] left-[0] top-[0] w-[17%]"
              alt="Group"
            />
            <Text className="absolute bottom-[0] font-light lg:leading-[31px] xl:leading-[35px] 2xl:leading-[40px] 3xl:leading-[48px] right-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_600 text-center w-[91%]">
              Increase your knowledge by reading new things and I will share
              whatever I know for you, as long as I enjoy it
            </Text>
          </Stack>
          <Row className="font-publicsans items-center justify-center lg:ml-[290px] xl:ml-[332px] 2xl:ml-[374px] 3xl:ml-[449px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[24%]">
            <Img
              src="images/img_ellipse5.png"
              className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              alt="EllipseFive One"
            />
            <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[68%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                By Jhone Leonardo
              </Text>
              <Text className="font-light mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                Podcaster & Blogger
              </Text>
            </Column>
          </Row>
        </Column>
        <List
          className="lg:gap-[21px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[94%]"
          orientation="horizontal"
        >
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius5 w-[100%]"
            style={{ backgroundImage: "url('images/img_list.png')" }}
          >
            <Text className="font-bold font-merriweather italic leading-[normal] ml-[1px] lg:mt-[101px] xl:mt-[115px] 2xl:mt-[130px] 3xl:mt-[156px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[79%]">
              Consistent way of working to train yourself
            </Text>
            <Text className="font-light font-publicsans mb-[3px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
              5 minutes ago
            </Text>
          </Column>
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius5 w-[100%]"
            style={{ backgroundImage: "url('images/img_list_273X433.png')" }}
          >
            <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[78%]">
              Consistent way of working to train yourself
            </Text>
            <Text className="font-light font-publicsans lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
              5 minutes ago
            </Text>
          </Column>
          <Column
            className="bg-cover bg-repeat justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius5 w-[100%]"
            style={{ backgroundImage: "url('images/img_list_1.png')" }}
          >
            <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[78%]">
              Consistent way of working to train yourself
            </Text>
            <Text className="font-light font-publicsans lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
              5 minutes ago
            </Text>
          </Column>
        </List>
        <footer className="bg-gray_600 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
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

export default BlogDetailsPage;
