import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import styled from '@emotion/styled'

const myFont = localFont({ src: '../../../fonts/Intro-Book.ttf' })

const Header = () => {
	return (
		<div
			className={
				'w-full pt-[20px] bg-[#484283] text-[#fff] items-center flex flex-col fixed' +
				' ' +
				myFont.className
			}
		>
			<div className='container text-[14px]'>
				<div className='flex justify-between w-full'>
					<Link href='/'>
						<Image src={'/logo.svg'} width={145} height={25} alt='logo' />
					</Link>
					<LinkLine className='flex '>
						<nav className='w-full'>
							<ul className='flex justify-between gap-[40px]'>
								<li>
									<Link href='/'>Каталог</Link>
								</li>
								<li>
									<Link href='/'>О нас</Link>
								</li>
								<li>
									<Link href='/'>Подбор товара</Link>
								</li>
								<li>
									<Link href='/'>Наша команда</Link>
								</li>
								<li>
									<Link href='/'>Доставка и оплата</Link>
								</li>
								<li>
									<Link href='/'>Контакты</Link>
								</li>
								<li>
									<div className='flex gap-[10px] items-center'>
										<Link href={'/'}>Корзина</Link>
										<button className='h-[18px] w-[20px]'>
											<Image
												src={'/basket.svg'}
												width={20}
												height={18}
												alt='basket '
											/>
										</button>
									</div>
								</li>
							</ul>
						</nav>
					</LinkLine>
				</div>
				<div className='h-[2px] w-full bg-[#fff]/[.50] mt-[20px] rounded-[50%]'></div>
			</div>
		</div>
	)
}

const LinkLine = styled.div`
	a {
		display: block;
		position: relative;
		padding-bottom: 0.2em;
		overflow: hidden;
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: #fff;
			opacity 0;
			transition: opacity 300ms, transform 300ms;

			transform: translate3d(-110%, 0, 0);
		}
		&:focus::after,
		:hover::after {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`

export default Header
