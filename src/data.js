import card1 from "./assets/img/card1.png";
import card2 from "./assets/img/card2.png";
import card3 from "./assets/img/card3.png";
import fb from "./assets/img/fb.png";
import inst from "./assets/img/insta.png";
import tw from "./assets/img/twitter.png";
import linkd from "./assets/img/linkedin.png";

const navData = [{
	href: '/works',
	text: 'Works'
}, {
	href: '/blog',
	text: 'Blog'
}, {
	href: '/contact',
	text: 'Contact'
}]

const cardData = [{
	title: 'Making a design system from scratch',
	date: '12 Feb 2020',
	type: 'Disign, Pattern',
	text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}, {
	title: 'Creating pixel perfect icons in Figma',
	date: '12 Feb 2020',
	type: 'Figma, Icon Disign',
	text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}]

const worksData = [{
	title: 'Designing Dashboards',
	year: '2020',
	type: 'Dashboard',
	text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	img: card1
}, {
	title: 'Vibrant Portraits of 2020',
	year: '2018',
	type: 'Illustration',
	text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	img: card2
}, {
	title: '36 Days of Malayalam type',
	year: '2018',
	type: 'Typography',
	text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	img: card3
}]

const socialData = [{
	href: '/fb',
	img: fb
}, {
	href: '/inst',
	img: inst
}, {
	href: '/twit',
	img: tw
}, {
	href: '/linkd',
	img: linkd
}]

export {
	navData,
	cardData,
	worksData,
	socialData
}