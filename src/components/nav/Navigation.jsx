import React from 'react'
import logo from '../../assets/svg/logo.svg'
import like from '../../assets/svg/like.svg'
import notification from '../../assets/svg/notifications.svg'
import settings from '../../assets/svg/settings.svg'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Navigation = () => {
  return (
    <nav className=" top-nav md:px-16 md:py-8 px-4 py-3 bg-white flex items-center gap-3 md:gap-5 border-b border-b-secondary-200">
        <img style={{width: '150px'}} src={logo} alt="" />
        <div data-visible="false" className="search-wrapper bg-white px-4 py-3 md:p-0 w-full flex gap-4 items-center justify-start fixed -top-full right-0 md:static">
            <form className="search-form flex gap-2 bg-white w-f border border-secondary-100 py-2 px-4 rounded-xl min-w-0 md:flex flex-1 md:flex-none">
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}/>
            </form>
            <button className="button bu-minimal flex gap-2  items-center justify-center h-4 w-4 md:hidden flex"></button>
        </div>
            <ul className="flex-container w-full  max-w-[200px] flex gap-4">
                <li><button className="button  flex  items-center justify-center rounded-full"><img style={{width: '44px', height: '44px'}} src={like} alt="" /></button></li>
                <li><button className="button  flex  items-center justify-center rounded-full"><img style={{width: '44px', height: '44px'}} src={notification} alt="" /></button></li>
                <li><button className="button  flex  items-center justify-center rounded-full"><img style={{width: '44px', height: '44px'}} src={settings} alt="" /></button></li>
                <li className="shrink-0"><img style={{width: '44px', height: '44px'}} src={'https://toppng.com/public/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'} alt="" /></li>
            </ul>
        </nav>
  )
}

export default Navigation