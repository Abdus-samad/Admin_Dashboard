import Head from "next/head";
import Order from "../components/Layout/Dropdowns/Order";
import Search from "../components/Layout/Dropdowns/Search";
import Status from "../components/Layout/Dropdowns/Status";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import OrderTable from "../components/Layout/Table/OrderTable";

const Orders = () => {
	return (
        <>
        <Head>
            <title>PickBazar</title>
            <meta
                name='description'
                content='Generated by create next app'
            />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <div
            style={{height: 'calc(100vh - 92px)'}}
            className='flex items-center w-full'>
            <Sidebar />
            <div
                style={{width: 'calc(100% - 270px)'}}
                className='h-full flex bg-[#f7f7f7]'>
                <div className='py-[45px] px-[30px] h-auto w-full overflow-y-auto'>
                    <div className='px-[16px]'>
                        <div className='last:mb-0 box-border flex flex-initial flex-row flex-wrap mx-[-8px]'>
                            <div className='col-lg'>
                                <header
                                    className='p-[40px] flex flex-wrap flex-initial bg-white flex-row justify-between items-center'
                                    style={{
                                        marginBottom: '15px',
                                        boxShadow:
                                            'rgb(0 0 0 / 5%) 0px 0px 5px',
                                    }}>
                                    <div className='col-sm  box-border px-[8px]'>
                                        <h3 className='mr-[80px] text-[18px] leading-6 font-bold text-[#161f6a]'>
                                            Orders
                                        </h3>
                                    </div>
                                    <div className='col-start-1 box-border px-[8px]'>
                                        <div className='last:mb-0 box-border flex flex-initial flex-row flex-wrap mx-[-8px]'>
                                            <Status />
                                            <Order />
                                            <Search />
                                            
                                        </div>
                                    </div>
                                </header>
                                <div
                                    style={{
                                        boxShadow:
                                            'rgb(0 0 0 / 5%) 0px 0px 5px',
                                    }}
                                    className='bg-white'>
                                    <OrderTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
	);
};

export default Orders;
