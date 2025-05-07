import NavBar from '~/components/NavBar'
import Hero from '~/sections/Hero'
import ShowcaseSection from '~/sections/ShowcaseSection'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<ShowcaseSection />
		</>
	)
}
