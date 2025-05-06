import Button from '~/components/Button'
import HeroExperience from '~/components/models/hero_models/HeroExperience'
import { words } from '~/constants'

const Hero = () => {
	return (
		<section id="hero" className="relative overflow-hidden">
			<div className="absolute top-0 left-0 z-10">
				<img src="/images/bg.png" alt="background" />
			</div>

			<div className="hero-layout">
				<header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
					<div className="flex flex-col gap-7">
						<div className="hero-text">
							<h1>
								Shaping
								<span className="slide">
									<span className="wrapper">
										{words.map((word) => (
											<span
												key={word.text}
												className="flex items-center gap-1 pb-2 md:gap-3"
											>
												<img
													src={word.imgPath}
													alt={word.text}
													className="size-7 rounded-full bg-white-50 p-1 md:size-10 md:p-2 xl:size-12"
												/>
												<span>{word.text}</span>
											</span>
										))}
									</span>
								</span>
							</h1>
							<h1>into Real Projects</h1>
							<h1>that Deliver Results</h1>
						</div>

						<p className="pointer-events-none relative z-10 text-white-50 md:text-xl">
							Hi, I’m Etcetera, a developer based in China with a passion for code.
						</p>

						<Button
							text="See My Work"
							className="h-12 w-60 md:h-16 md:w-80"
							id="counter"
						/>
					</div>
				</header>

				<figure>
					<div className="hero-3d-layout">
						<HeroExperience />
					</div>
				</figure>
			</div>
		</section>
	)
}

export default Hero
