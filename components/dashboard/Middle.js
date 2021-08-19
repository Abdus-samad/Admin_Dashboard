import { data } from "./data";

const Middle = () => {
	return (
		<>
			{data.map((item, index) => (
				<div className='col-3  box-border px-[8px]'>
					<div className='rounded-[6px] p-[30px] flex flex-col bg-white h-full w-full '>
						<div className='mb-[50px] flex justify-between w-full'>
							<div
								
								className='flex flex-col'>
								<span className='mb-[10px] text-[#161f6a] text-[16px] leading-5 font-bold'>{item.name}</span>
								<span className='mb-[0px] text-[#666d92] text-[13px] leading-5 font-bold'>{item.days}</span>
							</div>
							<div className='h-[48px] w-[48px] flex items-center justify-center'>{item.icon}</div>
						</div>
						<span className='text-[21px] mb-[10px] font-bold text-[#161f6a]'>{item.price}</span>
						<span className={item.cName}>
                        {item.rate}  {item.title}
							<span className='text-[#666d92] leading-4 font-normal text-[14px]'>{item.last}</span>
						</span>
                        <a href="#" className='text-[#8a6afc] leading-5 text-[13px] fotn-bold'>Full Details</a>
					</div>
				</div>
			))}
		</>
	);
};

export default Middle;

{
	/**
   


















     *    color: ;
}
<style>
.f2 {
    margin-bottom: 50px;
}
<style>
.ex {
    line-height: 1.2;
}
<style>
.cs {
    font-weight: 700;
}
<style>
.cr {
    font-family: Lato, sans-serif;
}
<style>
.bh {
    fon
	 */
}
