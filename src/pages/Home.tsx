import { Container, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import { ITabList } from "../types";

const Home = () => {
  // const [mode, setMode] = useState<number>(1);
  const [openTip, setOpenTip] = useState<boolean>(false);
  const generateArray = (aroundNumber: number) => [...Array(aroundNumber).keys()].map((i) => i + 1);
  const [pickNumberList, setPickNumberList] = useState<number[][]>([]);
  const [pickNumberIndex, setPickNumberIndex] = useState<number>(0);
  const [round, setRound] = useState<string>("");
  const getImageURL = (name: number) => {
    return new URL(`../assets/marksixs/marksix-${name}.svg`, import.meta.url).href;
  };
  useEffect(() => {
    if (pickNumberList.length > 0 && pickNumberList[pickNumberIndex]?.length === 6) {
      const findNotFullIndex = pickNumberList.findIndex((list) => list.length < 6);
      if (findNotFullIndex !== -1) {
        setPickNumberIndex(findNotFullIndex);
      } else {
        setPickNumberList((prevList) => [...prevList, []]);
      }
    }
  }, [pickNumberIndex, pickNumberList]);
  const handleNumber = (newNumber: number) => {
    console.log("number?", newNumber);
    console.log("whole length??", pickNumberList);
    if (pickNumberList.length === 0) {
      setPickNumberList((prevList) => [...prevList, [newNumber]]);
      setPickNumberIndex(pickNumberList.length);
      return;
    }

    const pickNumberListByIndex = pickNumberList[pickNumberIndex];
    if (pickNumberListByIndex.includes(newNumber)) {
      setPickNumberList((prevList) =>
        prevList.map((list, index) => (index === pickNumberIndex ? list.filter((item) => item !== newNumber) : list)),
      );
    } else {
      setPickNumberList((prevList) => prevList.map((list, index) => (index === pickNumberIndex ? [...list, newNumber] : list)));
    }
    // if (pickNumberList.length === 0 || pickNumberList[pickNumberIndex].length === 6) {
    //   console.log('debug??');
    //   // add new list
    //   const prevListSize: number = pickNumberList.length === 0 ? 1 : pickNumberList.length ;
    //   if (pickNumberList[prevListSize - 1].length === 6) {
    //     setPickNumberList((prevList) => [...prevList, [newNumber]]);
    //     setPickNumberIndex(prevListSize);
    //   } else {
    //     setPickNumberIndex(prevListSize - 1);
    //     // setPickNumberList((prevList) => prevList.map((list, index) => (index === pickNumberIndex ? [...list, newNumber] : list)));
    //   }
    // } else {
    //   const pickNumberListByIndex = pickNumberList[pickNumberIndex];
    //   // check last list
    //   console.log(pickNumberIndex, 'pickNumberIndex');
    //   if (pickNumberListByIndex.includes(newNumber)) {
    //     // delete the item in the last list
    //     setPickNumberList((prevList) =>
    //       prevList.map((list, index) => (index === pickNumberIndex ? list.filter((item) => item !== newNumber) : list)),
    //     );
    //   } else {
    //     // add in the last list
    //     setPickNumberList((prevList) => prevList.map((list, index) => (index === pickNumberIndex ? [...list, newNumber] : list)));
    //   }
    // }
  };
  const handleDeleteList = (listIndex: number) => {
    setPickNumberList((list) => {
      const updatedItems = [...list];
      updatedItems.splice(listIndex, 1);
      if (updatedItems.length > 0) {
        setPickNumberIndex(updatedItems.length - 1);
      }
      return updatedItems;
    });
  };
  const handleDeleteNumber = (newNumber: number, listIndex: number) => {
    setPickNumberList((prevList) =>
      prevList.map((list, index) => (index === listIndex ? list.filter((item) => item !== newNumber) : list)),
    );
    setPickNumberIndex(listIndex);
  };
  const getColor = (number: number) => {
    // const colors = ['red', 'blue', 'green'];
    switch (number) {
      case 1:
      case 2:
      case 7:
      case 8:
      case 18:
      case 19:
      case 29:
      case 30:
      case 40:
      case 12:
      case 13:
      case 23:
      case 24:
      case 34:
      case 35:
      case 45:
      case 46:
        return "tw-border-red-700";
      case 3:
      case 4:
      case 9:
      case 10:
      case 14:
      case 15:
      case 20:
      case 25:
      case 26:
      case 31:
      case 36:
      case 37:
      case 41:
      case 42:
      case 47:
      case 48:
        return "tw-border-blue-700";
        break;
      case 5:
      case 6:
      case 11:
      case 16:
      case 17:
      case 21:
      case 22:
      case 27:
      case 28:
      case 32:
      case 33:
      case 38:
      case 39:
      case 43:
      case 44:
      case 49:
        return "tw-border-green-700";
        break;
      default:
        break;
    }
  };
  const InnerHeader = () => {
    const tabList: ITabList[] = [
      { text: "主頁", route: "/home" },
      { text: "核對中獎號碼", route: "/temp" },
      { text: "過去攪珠結果", route: "/temp" },
      { text: "攪珠日期表", route: "/temp" },
      { text: "六合彩計算機", route: "/temp" },
      { text: "攪珠結果統計", route: "/temp" },
      { text: "六合彩指南", route: "/temp" },
    ];
    const location = useLocation();
    const pathname = location.pathname;
    console.log(location);
    return (
      <>
        <div className="tw-pt-10">
          <div className={`tw-flex tw-h-[44px] tw-rounded-md`}>
            {tabList.map((tab) => (
              <Box
                key={tab.text}
                className={`tw-flex-1 tw-flex tw-justify-center tw-items-center tw-font-bold tw-cursor-pointer ${
                  pathname.includes(tab.route) ? "tw-bg-green-800 tw-text-white" : "tw-bg-white hover:tw-text-green-800"
                } `}>
                {tab.text}
              </Box>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <Box>
      <Grid container spacing={2} className={`tw-pl-12`}>
        <Grid size={9.5}>
          <InnerHeader />
          <Box className={"tw-grid tw-grid-cols-5 tw-pt-5 tw-gap-2"}>
            {/* SideMenu */}
            <Box className={"tw-col-span-1 tw-flex tw-flex-col tw-bg-white tw-rounded-md tw-max-h-[240px]"}>
              <Box className={`tw-flex-grow tw-p-2 tw-text-green-800 tw-font-bold`}>下期攪珠</Box>
              <button
                onClick={() => console.log("asdadadadadada")}
                className={`tw-text-left hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選單式
              </button>
              <button
                onClick={() => null}
                className={`tw-text-left hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選複式
              </button>
              <button
                onClick={() => null}
                disabled
                className={`tw-text-left tw-cursor-not-allowed hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選膽拖
              </button>
              <button
                onClick={() => console.log("asdasda")}
                disabled
                className={`tw-text-left tw-cursor-not-allowed hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2`}>
                運財號碼
              </button>
            </Box>
            {/* SideMenu */}
            {/* Main */}
            <main className={"tw-col-span-4 tw-gap-2"}>
              {/* infoTable */}
              <Box>
                <Box className={`tw-bg-green-800 tw-text-white tw-p-2 tw-font-bold tw-text-xl tw-rounded-t-md`}>{} (金多寶)</Box>
                <Box className={`tw-grid-cols-2 tw-grid tw-bg-white tw-py-2 tw-rounded-b-md`}>
                  <Box className={`tw-border-r tw-border-b-gray-300`}>
                    <Box className={`tw-px-2 tw-flex tw-py-1`}>
                      <Box className={`tw-flex-1 tw-font-bold`}>金多寶攪珠期數</Box>
                      <Box className={`tw-flex-1 tw-font-bold`}>24/103 MAF 中秋金多寶b</Box>
                    </Box>
                    <Box className={`tw-px-2 tw-flex tw-py-1`}>
                      <Box className={`tw-flex-1 tw-font-bold`}>攪珠日期</Box>
                      <Box className={`tw-flex-1 tw-font-bold`}>17/09/2024 (星期二)</Box>
                    </Box>
                    <Box className={`tw-px-2 tw-flex tw-py-1`}>
                      <Box className={`tw-flex-1 tw-font-bold`}>截止售票時間</Box>
                      <Box className={`tw-flex-1 tw-font-bold`}>晚上 9:15</Box>
                    </Box>
                    <Box className={`tw-px-2 tw-flex tw-py-1`}>
                      <Box className={`tw-flex-1 tw-font-bold`}>投注額</Box>
                      <Box className={`tw-flex-1 tw-font-bold`}>$24,304,680</Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box className={`tw-px-2`}>
                      <Box>
                        <Box className={`tw-px-2 tw-flex tw-py-1`}>
                          <Box className={`tw-flex-1 tw-font-bold`}>多寶 / 金多寶</Box>
                          <Box className={`tw-flex-1 tw-font-bold`}>$55,000,000</Box>
                        </Box>
                        <Box className={`tw-px-2 tw-flex tw-py-1`}>
                          <Box className={`tw-flex-1 tw-font-bold`}>估計頭獎基金</Box>
                          <Box className={`tw-flex-1 tw-font-bold`}>$80,000,000</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="tw-bg-white tw-rounded-md tw-mt-2">
                <Box className={`tw-p-2 tw-border-b tw-border-gray-200`}>
                  <Box className={`tw-flex tw-justify-between tw-items-center`}>
                    <Box className={`tw-flex tw-items-center`}>
                      <button className={``} onClick={() => setOpenTip((prev) => !prev)}>
                        <img src={openTip ? arrowUp : arrowDown} alt="arrowUp" />
                      </button>
                      選擇號碼方法
                    </Box>
                    <button className={`tw-bg-yellow-300 tw-rounded-full tw-p-2 tw-text-sm tw-font-bold`}>添加到投注區</button>
                  </Box>
                  {openTip && (
                    <Box>
                      <span>選擇號碼請按滑鼠一次</span>
                      <br />
                      <span>取消已選號碼請在下面的注項中按滑鼠一次</span>
                    </Box>
                  )}
                </Box>
                <Container maxWidth="md" className={`tw-m-2 tw-py-4`}>
                  {/* {pickNumberList.map((i) => (
                    <>
                      {i}
                      <br />
                    </>
                  ))} */}
                  <Box className={`tw-grid-cols-10 tw-grid tw-place-items-center tw-gap-y-4`}>
                    {generateArray(49).map((i, index) => (
                      <>
                        {pickNumberList[pickNumberIndex]?.includes(i) && pickNumberList[pickNumberIndex].length != 6 && (
                          <Fragment key={`number-${i}-${index}`}>
                            <button onClick={() => handleNumber(i)}>
                              <img src={getImageURL(i)} />
                            </button>
                          </Fragment>
                        )}
                        {(!pickNumberList[pickNumberIndex]?.includes(i) || pickNumberList[pickNumberIndex].length == 6) && (
                          <Box className={`tw-min-h-[60px] tw-flex tw-justify-center tw-items-center`}>
                            <Box
                              onClick={() => handleNumber(i)}
                              className={`${getColor(
                                i,
                              )} tw-border-2 tw-font-bold tw-text-xl tw-cursor-pointer  tw-gap-5 tw-rounded-full tw-cols-span-1 tw-w-[50px] tw-h-[50px] tw-flex tw-justify-center tw-items-center`}>
                              {i}
                            </Box>
                          </Box>
                        )}
                      </>
                    ))}
                  </Box>
                  {/* <Grid container columns={10} gap={2}>
                    {generateArray(49).map((i) => (
                    <Grid size={1} className={`tw-border-2 tw-border-gray-50 tw-rounded-full tw-flex tw-justify-center tw-items-center !tw-basis-[50px] tw-h-[50px]`}>{i}</Grid>
                    ))}
                  </Grid> */}
                </Container>
              </Box>
              <Box className={`tw-bg-white tw-rounded-md tw-mt-2 tw-p-2 tw-text-sm`}>
                <Box className={` tw-border-b tw-border-gray-300 tw-py-2`}>已選號碼</Box>
                {pickNumberList.map((list, listIndex) => (
                  <Box
                    key={`marksix-${listIndex}-list`}
                    className={`tw-my-2 tw-flex tw-justify-between tw-items-center tw-px-2 tw-h-[81px] tw-rounded-xl ${
                      listIndex === pickNumberIndex ? "tw-bg-gray-200" : "hover:tw-bg-gray-200"
                    }`}>
                    <Box>
                      {list
                        .sort((a, b) => a - b)
                        .map((i) => (
                          <span key={`ball${i}`}>
                            <button onClick={() => handleDeleteNumber(i, listIndex)}>
                              <img src={getImageURL(i)} />
                            </button>
                          </span>
                        ))}
                    </Box>
                    {list.length > 0 && (
                      <button onClick={() => handleDeleteList(listIndex)}>
                        <img src={deleteIcon} />
                      </button>
                    )}
                  </Box>
                ))}
                <Box className={`tw-flex tw-gap-12 tw-py-3`}>
                  <Box className={`tw-flex tw-flex-col tw-justify-between`}>
                    <Box className={`tw-text-xl tw-text-green-800 tw-font-bold`}>注數</Box>
                    <Box>{pickNumberList.filter((i) => i.length > 0).length}</Box>
                  </Box>
                  <Box className={`tw-flex tw-flex-col tw-justify-between`}>
                    <Box className={`tw-text-xl tw-text-green-800 tw-font-bold`}>投注金額</Box>
                    <Box>{pickNumberList.filter((i) => i.length === 6).length * 10}</Box>
                  </Box>
                  <Box className={`tw-flex tw-flex-col tw-justify-between`}>
                    <Box className={`tw-text-xl tw-text-green-800 tw-font-bold`}>多期攪珠</Box>
                    <Box>
                      <Select
                        value={round}
                        size="small"
                        sx={{ height: "25px" }}
                        MenuProps={{ sx: { height: "500px" } }}
                        onChange={(e: SelectChangeEvent) => setRound(e.target.value)}>
                        <MenuItem value={""}></MenuItem>
                        {generateArray(30).map((i) => (
                          <MenuItem value={i}>{i}</MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Box className={`tw-ml-auto tw-flex tw-items-end tw-gap-2`}>
                    <button className={`tw-rounded-full tw-h-[36px] tw-p-2 tw-min-w-[100px] tw-text-white tw-bg-green-800`}>重設</button>
                    <button className={`tw-rounded-full tw-h-[36px] tw-p-2 tw-min-w-[100px] tw-bg-yellow-300`}>添加到投注區</button>
                  </Box>
                </Box>
              </Box>
            </main>
          </Box>
        </Grid>
        <Grid size={2.5} className={`tw-bg-red-400`}>
          SideBar
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
