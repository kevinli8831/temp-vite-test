// import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import marksix from '../assets/marksix.svg';
import { Fragment } from 'react';


interface ITabList {
  text: string;
  route: string;
  icon?: string;
}

const Header = () => {
  // const [value, setValue] = useState('1');

  const pathname = useLocation().pathname;
  console.log('pathname:', pathname);
  const tabList: ITabList[] = [
    { text: '六合彩', icon: marksix, route: '/marksix' },
    { text: '賽馬', route: '/temp' },
    { text: '網上渠道', route: '/temp' },
  ];
  return (
    <>
      <div className="tw-h-[44px] tw-bg-white tw-flex tw-border-b-green-800 tw-box-content tw-border-b">
        {tabList.map((tab, index) => (
          <Fragment key={index}>
            <div
              className={`${
                pathname.includes(tab.route) ? 'tw-bg-green-800 tw-text-white ' : 'hover:tw-text-green-800'
              } tw-cursor-pointer tw-px-8 tw-flex tw-justify-center tw-items-center   tw-font-bold`}>
              {tab.icon && <img src={tab.icon} alt={tab.text} className={'tw-h-[24px] tw-pr-2 '} />}
              <span>{tab.text}</span>
            </div>
          </Fragment>
        ))}
      </div>

      <Outlet />
    </>
  );
};
export default Header;
