class CategoriesWrapper extends HTMLElement {
	constructor() {
		super()

		this.sliderInited = false
		this.initSlider()
	}

	initSlider() {
		this.sliderElement = new Swiper(this.querySelector(".js-slider"), {
			slidesPerView: "auto",
			initialSlide: 0,
			spaceBetween: 20,
			navigation: {
				nextEl: this.querySelector(".js-slider-next"),
				prevEl: this.querySelector(".js-slider-prev"),
			},
			pagination: {
				el: ".js-swiper-pagination",
			},
			breakpoints: {
				769: {
					slidesPerView: 2.3,
				},
				990: {
					slidesPerView: 4,
				},
			},
		})
		this.sliderInited = true
	}
}

customElements.define("categories-wrapper", CategoriesWrapper)
