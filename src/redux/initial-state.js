import room1 from '../assets/images/details-1.jpeg';
import room2 from '../assets/images/details-2.jpeg';
import room3 from '../assets/images/details-3.jpeg';
import room4 from '../assets/images/details-4.jpeg';
import img1 from '../assets/images/room-1.jpeg';
import img2 from '../assets/images/room-2.jpeg';
import img3 from '../assets/images/room-3.jpeg';
import img4 from '../assets/images/room-4.jpeg';
import img5 from '../assets/images/room-5.jpeg';
import img6 from '../assets/images/room-6.jpeg';
import img7 from '../assets/images/room-7.jpeg';
import img8 from '../assets/images/room-8.jpeg';
import img9 from '../assets/images/room-9.jpeg';
import img10 from '../assets/images/room-10.jpeg';
import img11 from '../assets/images/room-11.jpeg';
import img12 from '../assets/images/room-12.jpeg';

const entities = {
	
	rooms: {

		allIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		byId: {
			1: {
				id: 1,
				name: 'single economy',
				slug: 'single-economy',
				type: 'single',	
				price: 100,
				size: 200,
				capacity: 1,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [5, 2, 3, 4]
			},
			2: {
				id: 2,
				name: 'single basic',
				slug: 'single-basic',
				type: 'single',
				price: 150,
				size: 250,
				capacity: 1,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [6, 2, 3, 4]
			},
			3: {
				id: 3,
				name: 'single standard',
				slug: 'single-standard',
				type: 'single',
				price: 250,
				size: 300,
				capacity: 1,
				pets: true,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [7, 2, 3, 4]
			},
			4: {
				id: 4,
				name: 'single deluxe',
				slug: 'single-deluxe',
				type: 'single',
				price: 300,
				size: 400,
				capacity: 1,
				pets: true,
				breakfast: true,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [8, 2, 3, 4]
			},
			5: {
				id: 5,
				name: 'double economy',
				slug: 'double-economy',
				type: 'double',
				price: 200,
				size: 300,
				capacity: 2,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [9, 2, 3, 4]
			},
			6: {
				id: 6,
				name: 'double basic',
				slug: 'double-basic',
				type: 'double',
				price: 250,
				size: 350,
				capacity: 2,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [10, 2, 3, 4]
			},
			7: {
				id: 7,
				name: 'double standard',
				slug: 'double-standard',
				type: 'double',
				price: 300,
				size: 400,
				capacity: 2,
				pets: true,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [11, 2, 3, 4]
			},
			8: {
				id: 8,
				name: 'double deluxe',
				slug: 'double-deluxe',
				type: 'double',
				price: 400,
				size: 500,
				capacity: 2,
				pets: true,
				breakfast: true,
				featured: true,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [12, 2, 3, 4]
			},
			9: {
				id: 9,
				name: 'family economy',
				slug: 'family-economy',
				type: 'family',
				price: 300,
				size: 500,
				capacity: 3,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [13, 2, 3, 4]
			},
			10: {
				id: 10,
				name: 'family basic',
				slug: 'family-basic',
				type: 'family',
				price: 350,
				size: 550,
				capacity: 4,
				pets: false,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [14, 2, 3, 4]
			},
			11: {
				id: 11,
				name: 'family standard',
				slug: 'family-standard',
				type: 'family',
				price: 400,
				size: 600,
				capacity: 5,
				pets: true,
				breakfast: false,
				featured: false,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [15, 2, 3, 4]
			},
			12: {
				id: 12,
				name: 'family deluxe',
				slug: 'family-deluxe',
				type: 'family',
				price: 500,
				size: 700,
				capacity: 6,
				pets: true,
				breakfast: true,
				featured: true,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [16, 2, 3, 4]
			},
			13: {
				id: 13,
				name: 'presidential',
				slug: 'presidential-room',
				type: 'presidential',
				price: 600,
				size: 1000,
				capacity: 10,
				pets: true,
				breakfast: true,
				featured: true,
				description:
				'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
				extras: [
					'Plush pillows and breathable bed linens',
					'Soft, oversized bath towels',
					'Full-sized, pH-balanced toiletries',
					'Complimentary refreshments',
					'Adequate safety/security',
					'Internet',
					'Comfortable beds'
				],
				images: [1, 2, 3, 4]
			}
		}
	},
	images: {

		allIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		byId: {
			1: {
				id: 1,
				url: room1
			},
			2: {
				id: 2,
				url: room2
			},
			3: {
				id: 3,
				url: room3
			},
			4: {
				id: 4,
				url: room4
			},
			5: {
				id: 5,
				url: img1
			},
			6: {
				id: 6,
				url: img2
			},
			7: {
				id: 7,
				url: img3
			},
			8: {
				id: 8,
				url: img4
			},
			9: {
				id: 9,
				url: img5
			},
			10: {
				id: 10,
				url: img6
			},
			11: {
				id: 11,
				url: img7
			},
			12: {
				id: 12,
				url: img8
			},
			13: {
				id: 13,
				url: img9
			},
			14: {
				id: 14,
				url: img10
			},
			15: {
				id: 15,
				url: img11
			},
			16: {
				id: 16,
				url: img12
			}

		}

	}

};

/* const userOnline = {

	username: '',
	fullname: ''	
};  */ 

const filterRooms = {
	isFiltering: false,
	error: false,
	errorMessage: '',
	filterApplied: {
		roomType: 'all',
		guests: 1,
		maxPrice: 1000,
		minSize: 0,
		maxSize: 3000,
		pets: false,
		breakfast: false		
	},
	filteredRooms: {
		allIDs: [],
		byId: {}
	}
};

const initialState = {
	users: {
		authenticated: false,
		userOnLine: {}
	},	
	entities,
	filterRooms
};


export default initialState;
