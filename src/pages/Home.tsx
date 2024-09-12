import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useLocation } from 'react-router-dom';
import { ITabList } from '../types';

const Home = () => {
  const InnerHeader = () => {
    const tabList: ITabList[] = [
      { text: '主頁', route: '/home' },
      { text: '核對中獎號碼', route: '/temp' },
      { text: '過去攪珠結果', route: '/temp' },
      { text: '攪珠日期表', route: '/temp' },
      { text: '六合彩計算機', route: '/temp' },
      { text: '攪珠結果統計', route: '/temp' },
      { text: '六合彩指南', route: '/temp' },
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
                  pathname.includes(tab.route) ? 'tw-bg-green-800 tw-text-white' : 'tw-bg-white hover:tw-text-green-800'
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
          <Box className={'tw-grid tw-grid-cols-5 tw-pt-5 tw-gap-2'}>
            <Box className={'tw-col-span-1 tw-flex tw-flex-col tw-bg-white tw-rounded-md'}>
              <Box className={`tw-flex-grow tw-p-2 tw-text-green-800 tw-font-bold`}>下期攪珠</Box>
              <Box
                className={`tw-cursor-pointer hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選單式
              </Box>
              <Box
                className={`tw-cursor-pointer hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選複式
              </Box>
              <Box
                className={`tw-cursor-not-allowed hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2 tw-border-b tw-border-gray-200`}>
                自選膽拖
              </Box>
              <Box className={`tw-cursor-not-allowed hover:tw-bg-green-800 hover:tw-text-white tw-font-bold tw-flex-grow tw-p-2`}>運財號碼</Box>
            </Box>

            <Box className={'tw-col-span-4 tw-gap-2'}>
              <Box className={`tw-bg-green-800 tw-text-white tw-p-2 tw-font-bold tw-text-xl tw-rounded-t-md`}>運財號碼 (金多寶)</Box>
              <Box className={`tw-grid-cols-2 tw-grid tw-bg-white tw-py-2 tw-rounded-b-md`}>
                <Box>
                  <Box className={`tw-px-2 tw-flex tw-py-1`}>
                    <Box className={`tw-flex-1 tw-font-bold`}>金多寶攪珠期數</Box>
                    <Box className={`tw-flex-1 tw-font-bold`}>b</Box>
                  </Box>
                  <Box className={`tw-px-2 tw-flex tw-py-1`}>
                    <Box className={`tw-flex-1 tw-font-bold`}>攪珠日期</Box>
                    <Box className={`tw-flex-1 tw-font-bold`}>b</Box>
                  </Box>
                  <Box className={`tw-px-2 tw-flex tw-py-1`}>
                    <Box className={`tw-flex-1 tw-font-bold`}>截止售票時間</Box>
                    <Box className={`tw-flex-1 tw-font-bold`}>a</Box>
                  </Box>
                  <Box className={`tw-px-2 tw-flex tw-py-1`}>
                    <Box className={`tw-flex-1 tw-font-bold`}>投注額</Box>
                    <Box className={`tw-flex-1 tw-font-bold`}>b</Box>
                  </Box>
                </Box>
                <Box>
                  <Box className={`tw-px-2`}>b</Box>
                </Box>
              </Box>
            </Box>
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
