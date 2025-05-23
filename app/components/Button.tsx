const Button = ({
	text,
	className,
	id,
}: { text: string; className: string; id: string }) => {
	return (
		<button
			type="button"
			/**
			 * Smoothly scrolls to the section with the given ID.
			 * @param {React.MouseEvent<HTMLButtonElement>} e - The event that triggered this function.
			 * @param {string} id - The ID of the section to scroll to.
			 *
			 * This function prevents the link from jumping instantly, and if the section is not found,
			 * it does not scroll at all. It also prevents the contact button from scrolling to the top
			 * by only scrolling if an ID is passed in.
			 */
			onClick={(e) => {
				e.preventDefault() // Stop the link from jumping instantly

				const target = document.getElementById('counter') // Find the section with ID "counter"

				// Only scroll if we found the section and an ID is passed in
				// that prevents the contact button from scrolling to the top
				if (target && id) {
					const offset = window.innerHeight * 0.15 // Leave a bit of space at the top

					// Calculate how far down the page we need to scroll
					const top =
						target.getBoundingClientRect().top + window.pageYOffset - offset

					// Scroll smoothly to that position
					window.scrollTo({ top, behavior: 'smooth' })
				}
			}}
			className={`${className ?? ''} cta-wrapper`} // Add base + extra class names
		>
			<div className="cta-button group">
				<div className="bg-circle" />
				<p className="text">{text}</p>
				<div className="arrow-wrapper">
					<img src="/images/arrow-down.svg" alt="arrow" />
				</div>
			</div>
		</button>
	)
}

export default Button
