import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  TextArea,
  Button,
} from "components";

const ContactUsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-publicsans items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[20px] 2xl:pt-[23px] 3xl:pt-[27px] w-[100%]">
        <Column className="items-center w-[77%]">
          <header className="font-nunitosans w-[100%]">
            <Row className="justify-end pl-[1px] py-[1px] w-[100%]">
              <Img
                src="images/img_edit.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[3px] w-[2%]"
                alt="edit"
              />
              <Text className="font-extrabold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 uppercase w-[auto]">
                Blogsly
              </Text>
              <Column className="font-publicsans lg:ml-[164px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] mt-[4px] w-[46%]">
                <Row className="w-[78%]">
                  <Text className="cursor-pointer hover:font-bold font-bold my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]">
                    Home
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-bold mb-[1px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]">
                    Podcast
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]">
                    Blog
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-bold mb-[1px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_900 tracking-ls1 w-[auto]">
                    About
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-indigo_200 hover:text-indigo_900 tracking-ls1 w-[auto]">
                    Contact
                  </Text>
                </Row>
                <Line className="bg-indigo_900 h-[1px] lg:ml-[195px] xl:ml-[223px] 2xl:ml-[251px] 3xl:ml-[301px] mt-[2px] w-[10%]" />
              </Column>
              <Img
                src="images/img_search.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mb-[1px] lg:ml-[164px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] w-[3%]"
                alt="search"
              />
            </Row>
          </header>
          <Text className="font-bold font-publicsans lg:mt-[106px] xl:mt-[121px] 2xl:mt-[137px] 3xl:mt-[164px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_600 w-[auto]">
            Contact us
          </Text>
          <Text className="font-light font-publicsans 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
            Complete the form to contact us
          </Text>
          <Row className="font-publicsans lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[99%]">
            <Column className="pb-[4px] pr-[4px] w-[31%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_600 w-[auto]">
                Info
              </Text>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[40%]">
                <Img
                  src="images/img_vector_bluegray_600.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="Vector"
                />
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  0331223282
                </Text>
              </Row>
              <Row className="ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pt-[2px] w-[62%]">
                <Img
                  src="images/img_mail.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[10%]"
                  alt="mail"
                />
                <Text className="font-light 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Hellolaos@gmail.com
                </Text>
              </Row>
              <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[65%]">
                <Img
                  src="images/img_location_20X12.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[5%]"
                  alt="location"
                />
                <Text className="font-light lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[89%]">
                  Massachusetts Ave NW, Washington, DC 20036
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 justify-center mt-[4px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius10 shadow-bs4 w-[69%]">
              <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                <Input
                  className="font-light p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="w-[48%]"
                  type="text"
                  name="field"
                  placeholder="Your Name"
                ></Input>
                <Input
                  className="font-light p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  wrapClassName="w-[48%]"
                  type="email"
                  name="field One"
                  placeholder="Your Email"
                ></Input>
              </Row>
              <Input
                className="font-light p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] lg:mt-[23px] w-[100%] xl:mt-[26px]"
                name="field Two"
                placeholder="Your Subject"
              ></Input>
              <TextArea
                className="font-light lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                name="field Three"
                placeholder="Description"
              ></TextArea>
              <Button
                className="font-normal lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] ml-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[27%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillIndigo900"
              >
                Send Message
              </Button>
            </Column>
          </Row>
        </Column>
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

export default ContactUsPage;
