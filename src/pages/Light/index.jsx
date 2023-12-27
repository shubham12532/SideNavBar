import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const settingsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LightPage = () => {
  return (
    <>
      <div className="bg-gradient  flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[140px] items-start justify-start mx-auto pl-[140px] pr-[300px] md:px-10 sm:px-5 py-20 w-auto sm:w-full md:w-full">
        <div className="bg-white-A700_01 border-black-900_19 border-r border-solid flex flex-col h-[920px] md:h-auto items-start justify-start p-6 md:px-5 rounded-[12px] w-64">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-between w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-52">
                <Img
                  className="h-11 md:h-auto rounded-[50%] w-11"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-indigo-A700 text-sm w-full"
                    size="txtPoppinsSemiBold14"
                  >
                    Vikashini
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 tracking-[0.40px] uppercase w-full"
                    size="txtPoppinsMedium10"
                  >
                    UI / UX Engineer
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border border-gray-100 border-solid flex flex-col items-start justify-start mb-1.5 mt-2.5 p-1.5 rounded-[7px] w-auto">
                <Img
                  className="h-[9px]"
                  src="images/img_union.svg"
                  alt="union"
                />
              </div>
            </div>
            <Line className="bg-gray-100 h-0.5 rounded-[1px] w-[90%]" />
            <div className="flex flex-col gap-2 h-full items-start justify-start w-full">
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_analytics1.svg"
                  alt="analyticsOne"
                />
                <Text
                  className="flex-1 text-black-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtPoppinsMedium14"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconoutlined.svg"
                  alt="iconoutlined"
                />
                <Text
                  className="flex-1 text-black-900_01 text-sm tracking-[-0.28px] w-auto"
                  size="txtPoppinsMedium14Black90001"
                >
                  myOrders
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconcalendar.svg"
                  alt="iconcalendar"
                />
                <Text
                  className="flex-1 text-black-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtPoppinsMedium14"
                >
                  Schedules
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-end justify-start w-full">
                <div className="bg-gray-100_01 flex flex-row gap-3 items-center justify-start px-3 py-2.5 rounded-lg w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconreports.svg"
                    alt="iconreports"
                  />
                  <Text
                    className="flex-1 text-black-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtPoppinsMedium14"
                  >
                    myFulfillment
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[172px]">
                  <div className="flex flex-col items-center justify-start px-3 py-2 w-[172px]">
                    <Text
                      className="text-blue_gray-700 text-xs tracking-[-0.24px] w-auto"
                      size="txtPoppinsMedium12"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-100_01 flex flex-col items-center justify-start px-3 py-2 rounded-lg w-[172px]">
                          <Text
                            className="text-black-900 text-xs tracking-[-0.24px] w-auto"
                            size="txtPoppinsMedium12Black900"
                          >
                            Orders
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-1 px-3 py-2 w-[172px]">
                          <Text
                            className="text-blue_gray-700 text-xs tracking-[-0.24px] w-auto"
                            size="txtPoppinsMedium12"
                          >
                            Orders preparation
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-6 right-[6%] top-1/4 w-6"
                      src="images/img_cursorpointer.svg"
                      alt="cursorpointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-inter gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconsettings.svg"
                  alt="iconsettings"
                />
                <SelectBox
                  className="sm:flex-1 font-medium text-black-900 text-left text-sm tracking-[-0.28px] w-[83%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-4 mr-[0] w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSeven"
                  options={settingsOptionsList}
                  isSearchable={false}
                  placeholder="Settings"
                />
              </div>
            </div>
            <div className="flex flex-col font-inter gap-2 items-start justify-start w-full">
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconhelpcircle.svg"
                  alt="iconhelpcircle"
                />
                <Text
                  className="flex-1 text-black-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtInterMedium14"
                >
                  Help
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconlogout.svg"
                  alt="iconlogout"
                />
                <Text
                  className="flex-1 text-red-A700 text-sm tracking-[-0.28px] w-auto"
                  size="txtInterMedium14RedA700"
                >
                  Logout Account
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="font-inter h-[920px] md:h-auto p-6 sm:px-5 relative w-40">
          <div className="m-auto w-full">
            <div className="bg-white-A700_01 border-black-900_19 border-r border-solid flex flex-col gap-6 h-[920px] md:h-auto items-center justify-start my-auto p-6 sm:px-5 rounded-[12px] w-[92px]">
              <div className="flex flex-col h-11 items-center justify-start w-11">
                <Img
                  className="h-11 md:h-auto rounded-[50%] w-11"
                  src="images/img_avatar.png"
                  alt="avatar_One"
                />
              </div>
              <div className="bg-gray-100 h-0.5 rounded-[1px] w-full"></div>
              <Img
                className="h-full w-full"
                src="images/img_navigation.svg"
                alt="navigation"
              />
              <Img
                className="h-[88px] w-full"
                src="images/img_upload.svg"
                alt="upload"
              />
            </div>
            <Button className="absolute bg-white-A700_01 border border-gray-100 border-solid flex h-7 items-center justify-center p-[9px] right-[34%] rounded-lg top-[4%] w-7">
              <Img src="images/img_button.svg" alt="button" />
            </Button>
            <div className="absolute px-3 py-2.5 right-[0] top-[31%] w-[88px]">
              <div className="ml-auto my-auto overflow-x-auto w-[91%]">
                <div className="relative w-full">
                  <div className="absolute bg-black-900_01 h-10 inset-y-[0] my-auto right-[0] rounded shadow-bs w-full"></div>
                  <Text
                    className="mb-2.5 ml-auto mt-auto relative text-sm text-white-A700_01 w-auto"
                    size="txtInterRegular14"
                  >
                    myFulfillment
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[25px] inset-y-[0] left-[30%] my-auto w-3"
                src="images/img_shape.svg"
                alt="shape"
              />
            </div>
          </div>
          <Img
            className="absolute h-6 left-[3%] top-[3%] w-6"
            src="images/img_cursorpointer.svg"
            alt="cursorpointer_One"
          />
        </div>
        <div className="flex flex-col font-inter items-center justify-start w-[32%] md:w-full">
          <div className="h-[920px] md:h-auto p-6 sm:px-5 relative w-[228px]">
            <div className="bg-white-A700_01 border-black-900_19 border-r border-solid flex flex-col gap-6 h-[920px] md:h-auto items-center justify-start my-auto p-6 sm:px-5 rounded-[12px] w-[92px]">
              <div className="flex flex-col h-11 items-center justify-start w-11">
                <Img
                  className="h-11 md:h-auto rounded-[50%] w-11"
                  src="images/img_avatar.png"
                  alt="avatar_Two"
                />
              </div>
              <div className="bg-gray-100 h-0.5 rounded-[1px] w-full"></div>
              <div className="relative w-full">
                <Img
                  className="h-full my-auto w-full"
                  src="images/img_navigation.svg"
                  alt="navigation_One"
                />
                <Img
                  className="absolute h-6 right-[0] top-1/4 w-6"
                  src="images/img_cursorpointer.svg"
                  alt="cursorpointer_Two"
                />
              </div>
              <Img
                className="h-[88px] w-full"
                src="images/img_upload.svg"
                alt="upload_One"
              />
            </div>
            <div className="absolute bg-white-A700_01 border border-black-900_19 border-solid flex flex-col gap-1 items-start justify-start p-2 right-[0] rounded-[12px] shadow-bs1 top-[28%] w-[148px]">
              <div className="flex flex-col items-center justify-start px-3 py-2 w-full">
                <Text
                  className="text-blue_gray-700 text-xs tracking-[-0.24px] w-auto"
                  size="txtInterMedium12"
                >
                  Earnings
                </Text>
              </div>
              <Text
                className="bg-gray-100 justify-center pl-3 sm:pr-5 pr-[35px] py-2 rounded-lg text-black-900 text-xs tracking-[-0.24px] w-full"
                size="txtInterMedium12Black900"
              >
                Refunds
              </Text>
              <div className="flex flex-col items-center justify-start px-3 py-2 w-full">
                <Text
                  className="text-blue_gray-700 text-xs tracking-[-0.24px] w-auto"
                  size="txtInterMedium12"
                >
                  Declines
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-3 py-2 w-full">
                <Text
                  className="text-blue_gray-700 text-xs tracking-[-0.24px] w-auto"
                  size="txtInterMedium12"
                >
                  Payouts
                </Text>
              </div>
            </div>
            <Button className="absolute bg-white-A700_01 border border-gray-100 border-solid flex h-7 items-center justify-center left-[34%] p-[9px] rounded-lg top-[4%] w-7">
              <Img src="images/img_button.svg" alt="button_One" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightPage;
