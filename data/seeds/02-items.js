exports.seed = async function (knex) {
  await knex('items').insert([
    {
      itemName: 'Yamaha Piano',
      price: 100,
      description:
        'The CLP-625 is an ideal first piano for beginners or experienced players. This entry-level Clavinova features Yamaha CFX and Bösendorfer Imperial samples and Graded Hammer 3X (GH3X) keyboard action with escapement feel. New to CLP-625 is a Binaural CFX sample that makes playing with headphones a truly immersive experience. Now with Key-Off samples as well as Damper and String Resonance samples, the entry-level CLP has never sounded better. Connect to your iOS device or your computer using the USB port to experience a wealth of entertainment and educational apps.',
      rentalTerm: 'Weekly',
      available: false,
      imageUrl:
        'https://cdnm2-kraftmusic.netdna-ssl.com/media/catalog/product//y/a/yam-p125b_ipad.jpg',
      owner_id: 1
    },
    {
      itemName: '2020 Latest HP OMEN 30L Gaming Desktop PC',
      price: 59.99,
      description:
        "It’s gaming love at first sight. The OMEN 30L Desktop PC is crafted for the long term & was designed in collaboration with Cooler Master from the ground-up. A hassle-free OMEN RGB liquid cooling system quietly draws heat away from one of Intel's highest rated unlocked performance processors. Cooler Master's 750 watt platinum power supply provides maximum efficiency & Kingston HyperX RGB XMP brings the customizable flair with performance.",
      rentalTerm: 'Daily',
      available: true,
      imageUrl:
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A8S1D200916Y78V1.jpg',
      owner_id: 1
    },
    {
      itemName:
        'Focal Chora 5.1.2 Surround Sound Speaker Package with Built-In Dolby Atmos Modules',
      price: 499.99,
      description:
        'Chora 826-D is a loudspeaker equipped with a specific speaker driver that reproduces Dolby Atmos effects: for ultra-realistic 3D soundtracks and total immersion in the films you watch. Positioned on the top of the loudspeaker this full-range speaker driver directs the sound towards the ceiling to reflect it back to the listener. Action scenes in the air pouring rain or a rolling thunder are all brought to life. At the same time its directional baffle allows you to locate the sounds effects as though you had loudspeakers in the ceiling! Imagine a scene in a house: you hear conversations but also the noise of cutlery of footsteps... all of these spatialized in three dimensions as though you were actually there!',
      rentalTerm: 'Weekly',
      available: true,
      imageUrl:
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A1J7D2008050D2KT.jpg',
      owner_id: 2
    },
    {
      itemName:
        'Digital Projection TITAN 26000 4K-UHD 25000 Lumens at 4K-UHD/28000 Lumens at WUXGA/Compatible with Prior Titan Lenses',
      price: 5000,
      description:
        'The new Titan Laser Series is our powerhouse projection options offering between 25, 000 and 37, 000 lumens. The TITAN 26000 4K-UHD delivers up to 28, 000 lumens at the WUXGA option. The latest TITAN, a relatively compact chassis considering its brightness, makes it the ideal projector for the most demanding large-venue applications. Where bright, sharp images are required, the new TITAN series performs without compromise.',
      rentalTerm: 'Mothly',
      available: false,
      imageUrl:
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A9APS200313XnIcv.jpg',
      owner_id: 3
    },
    {
      itemName:
        'Sony VPL-VW1100ES 3D Ready SXRD Projector - 1080p - HDTV - 1.9:1',
      price: 250,
      description:
        'The VPL-VW1100ES projector brings the fully immersive experience of the cinema into your home. See exceptional detail with 4K resolution, a dynamic contrast ratio of 1, 000, 000:1 and 2, 000 lumens brightness.',
      rentalTerm: 'Daily',
      available: true,
      imageUrl:
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A98Y_1_20160421124121403.jpg',
      owner_id: 1
    },
    {
      itemName:
        'CTO/MacBook Pro 16/2.4GHz/AMD5600M8GB/64GB/4TBSSD/KBGreek/EURO/Space Grey',
      price: 199.95,
      description:
        'CTO/MacBook Pro 16/ 2.4GH z/AMD5600M8GB/64GB/4TBSSD/KBGreek/EURO/Space Grey',
      rentalTerm: 'Daily',
      available: true,
      imageUrl:
        'https://c1.neweggimages.com/ProductImageCompressAll1280/A8UCD2008055UWC9.jpg',
      owner_id: 2
    },
    {
      itemName: 'Lenovo HUB 500 Logitech-Avocor Huddle Room Kit',
      price: 2000,
      description:
        'With ThinkSmart Hub 500 for Microsoft Teams Rooms, meetings have never been more productive. Easy to deploy and use, this all-in-one meeting room device is the key to efficiency. It’s also scalable across room sizes and brings out the best Microsoft Teams experience. Start on time, every time with one tap. Share content quickly and easily. Hear what everyone says, loud and clear.',
      rentalTerm: 'Monthly',
      available: true,
      imageUrl:
        'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/1B4-001H-023T8-S01.jpg',
      owner_id: 2
    }
  ]);
};
