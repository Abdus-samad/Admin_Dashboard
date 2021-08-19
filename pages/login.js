import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid';


const login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		showPassword: false,
	});
	const handleClickShowPassword = (e) => {
		setUser({...user, showPassword: !user.showPassword});
		e.preventDefault();
	};

	const {email, password} = user;

	const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

	// useEffect(() => {
	// 	if (!isLoading && !isAuthenticated) {
	// 	  router.push('/');
	// 	}
	//   }, [isAuthenticated, isLoading]);
	return (
		<>
			<Head>
				<title>Admin Dashboard </title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='bg-[#f1f1f1] h-screen w-screen flex items-center justify-center'>
				<div className='flex flex-col p-[50px] bg-white rounded-[3px] w-[470px]'>
					<form>
						<div className='first:mt-0 my-[20px] flex flex-col w-full mx-0'>
							<div className='mb-[20px] flex items-center justify-center'>
								<img
									src='/PickBazar.png'
									alt=''
									className='max-w-[150px] block'
								/>
							</div>
							<h3 className='text-center text-[#161f6a] mb-0 mt-0 text-[18px] font-medium leading-6 font-sans'>
								Log in to admin
							</h3>
						</div>
						<div className='my-[20px] mx-0 flex flex-col w-full'>
							<label className='mb-[10px] font-bold text-[#161f6a] text-[14px] leading-6 font-sans'>
								Username
							</label>
							<div className='text-[#000] leading-6 font-normal font-sans w-full flex'>
								<div className='LoginInputWrapper'>
									<input
										className='LoginInput'
										type='email'
										name='email'
										value={email}
										onChange={onChange}
										required
									/>
								</div>
							</div>
						</div>
						<div className='my-[20px] mx-0 flex flex-col w-full'>
							<label className='mb-[10px] font-bold text-[#161f6a] text-[14px] leading-6 font-sans'>
								PassWord
							</label>
							<div className='text-[#000] leading-6 font-normal font-sans w-full flex'>
								<div className='LoginInputWrapper'>
									<input
										type={
											user.showPassword
												? 'text'
												: 'password'
										}
										name='password'
										onChange={onChange}
										value={password}
										className='LoginInput'
									/>
									<button
										className='LoginBtn'
										onClick={handleClickShowPassword}>
										{user.showPassword ? (
											<EyeIcon className='h-[20px]' />
										) : (
											<EyeOffIcon className='h-[20px]' />
										)}
									</button>
								</div>
							</div>
						</div>
						<button className='Submit'>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default login;
/** 

}


*/
