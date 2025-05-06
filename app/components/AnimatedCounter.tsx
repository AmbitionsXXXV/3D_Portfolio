import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { counterItems } from '~/constants'

const AnimatedCounter = () => {
	const counterRef = useRef<HTMLDivElement>(null)
	const countersRef = useRef<HTMLDivElement[]>([])

	useGSAP(() => {
		countersRef.current.forEach((counter, index) => {
			const numberElement = counter.querySelector('.counter-number')
			const item = counterItems[index]

			// Set initial value to 0
			gsap.set(numberElement, { innerText: '0' })

			// Create the counting animation
			gsap.to(numberElement, {
				innerText: item.value,
				duration: 2.5,
				ease: 'power2.out',
				snap: { innerText: 1 }, // Ensures whole numbers
				scrollTrigger: {
					trigger: '#counter',
					start: 'top center',
				},
				// Add the suffix after counting is complete
				onComplete: () => {
					if (numberElement) {
						// 检查 numberElement 是否存在
						// 确保元素找到后才修改其内容
						numberElement.textContent = `${item.value}${item.suffix}`
					}
				},
			})
		}, counterRef)
	}, [])

	return (
		<div id="counter" ref={counterRef} className="padding-x-lg mt-32 xl:mt-0">
			<div className="grid-4-cols mx-auto">
				{counterItems.map((item, index) => (
					<div
						key={item.label}
						ref={(el) => {
							if (el) {
								// 将元素添加到ref数组中
								countersRef.current[index] = el
							}
						}}
						className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10"
					>
						<div className="counter-number mb-2 font-bold text-5xl text-white-50">
							0 {item.suffix}
						</div>
						<div className="text-lg text-white-50">{item.label}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default AnimatedCounter
