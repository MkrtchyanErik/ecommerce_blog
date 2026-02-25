let products_data_json = [
    {
        id: 1,
        title: "ASUS ROG Zephyrus G16 (2024)",
        category: 2,
        sku: "ROG-G16-2026-001",
        images: ["/images/id1images1.jpg", "/images/id1images2.jpg", "/images/id1images3.jpg", "/images/id1images4.jpg", "/images/id1images5.jpg"],
        description: "The ultimate gaming powerhouse featuring the new Ryzen 9 AI Max processor and RTX 5080 graphics. Includes a 240Hz OLED Nebula display for stunning visuals.",
        URL: "https://amazon.com/dp/B0example1",
        price: 2499,
        attributes: [
            { id: 1, term: 5 },
            { id: 2, term: 4 },
            { id: 3, term: 3 },
            { id: 5, term: 3 }
        ]
    },
    {
        id: 2,
        title: "Samsung Odyssey Neo G9 (G95NC)",
        category: 9,
        sku: "SAM-G9-57-2026",
        images: ["https://m.media-amazon.com/images/I/71cuZoxL0cL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81viOu1vDhL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/61IFDbVPKnL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/81Q1wuRsClL._AC_SL1500_.jpg", "https://m.media-amazon.com/images/I/718itOgof+L._AC_SL1500_.jpg"],
        description: "World's first 57-inch Dual UHD monitor. Mini-LED technology with a 240Hz refresh rate and 1000R curvature for immersive gaming.",
        URL: "https://amazon.com/dp/B0example2",
        price: 1799,
        attributes: [
            { id: 2, term: 4 },
            { id: 9, term: 4 },
            { id: 3, term: 4 }
        ]
    },
    {
        id: 3,
        title: "Sony WH-1000XM6 Wireless Headphones",
        category: 4,
        sku: "SONY-WHXM6-B",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Industry-leading noise cancellation with the new V3 processor. Supports Hi-Res Audio and 40-hour battery life with fast charging.",
        URL: "https://amazon.com/dp/B0example3",
        price: 398,
        attributes: [
            { id: 28, term: 3 },
            { id: 10, term: 3 },
            { id: 8, term: 3 }
        ]
    },
    {
        id: 4,
        title: "Apple MacBook Pro 14 (M5 Max)",
        category: 2,
        sku: "AAPL-MBP14-M5",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Powered by the M5 Max chip with a 16-core CPU and 40-core GPU. Features a Tandem OLED Liquid Retina XDR display.",
        URL: "https://amazon.com/dp/B0example4",
        price: 3199,
        attributes: [
            { id: 12, term: 4 },
            { id: 3, term: 3 },
            { id: 4, term: 3 }
        ]
    },
    {
        id: 5,
        title: "Dell XPS 13 Copilot+ PC",
        category: 2,
        sku: "DELL-XPS13-AI",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Ultra-thin AI PC with Snapdragon X Elite 2. Optimized for Windows Copilot+ with 45 TOPS NPU performance for all-day productivity.",
        URL: "https://amazon.com/dp/B0example5",
        price: 1299,
        attributes: [
            { id: 7, term: 2 },
            { id: 10, term: 3 },
            { id: 13, term: 1 }
        ]
    },
    {
        id: 6,
        title: "Samsung Galaxy S26 Ultra",
        category: 1,
        sku: "SAM-S26U-512",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtUWa687iw85uxQqctzlCwN3zq5Tf2vybg&s", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Featuring the Snapdragon 8 Elite Gen 5 and a 200MP main camera with AI-enhanced 100x Space Zoom. 6.8-inch Dynamic AMOLED 144Hz display.",
        URL: "https://amazon.com/dp/B0example6",
        price: 1299,
        attributes: [
            { id: 37, term: 3 },
            { id: 6, term: 2 },
            { id: 4, term: 2 },
            { id: 3, term: 3 }
        ]
    },
    {
        id: 7,
        title: "Apple iPhone 17 Pro Max",
        category: 1,
        sku: "AAPL-I17PM-256",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The A19 Pro chip delivers unprecedented mobile gaming power. Includes a new 48MP Telephoto lens and Wi-Fi 7 support.",
        URL: "https://amazon.com/dp/B0example7",
        price: 1199,
        attributes: [
            { id: 12, term: 4 },
            { id: 8, term: 2 },
            { id: 37, term: 2 }
        ]
    },
    {
        id: 8,
        title: "Sony PlayStation 5 Pro",
        category: 6,
        sku: "SONY-PS5-PRO",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Enhanced 4K/60fps gaming with PSSR AI upscaling. Includes a 2TB SSD and high-speed GDDR6 memory.",
        URL: "https://amazon.com/dp/B0example8",
        price: 699,
        attributes: [
            { id: 6, term: 4 },
            { id: 7, term: 2 },
            { id: 9, term: 3 }
        ]
    },
    {
        id: 9,
        title: "LG Ultragear EVO 32GS95UE",
        category: 9,
        sku: "LG-32GS-OLED",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Dual-mode OLED monitor: Switch between 4K at 240Hz for cinematic RPGs and 1080p at 480Hz for competitive shooters.",
        URL: "https://amazon.com/dp/B0example9",
        price: 1399,
        attributes: [
            { id: 3, term: 3 },
            { id: 2, term: 5 },
            { id: 9, term: 3 }
        ]
    },
    {
        id: 10,
        title: "DJI Mavic 4 Pro",
        category: 5,
        sku: "DJI-M4P-COMBO",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Triple-camera system with a 1-inch CMOS sensor. Features 360-degree obstacle avoidance and 45-minute flight time.",
        URL: "https://amazon.com/dp/B0example10",
        price: 2199,
        attributes: [
            { id: 41, term: 2 },
            { id: 39, term: 3 }
        ]
    },
    {
        id: 11,
        title: "GoPro HERO14 Black",
        category: 5,
        sku: "GOPRO-H14-BLK",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "5.3K video at 120fps with HyperSmooth 7.0. Rugged design waterproof up to 33ft, now with an improved edge-to-edge touch screen.",
        URL: "https://amazon.com/dp/B0example11",
        price: 449,
        attributes: [
            { id: 39, term: 1 },
            { id: 31, term: 2 }
        ]
    },
    {
        id: 12,
        title: "Razer DeathAdder V4 Pro",
        category: 8,
        sku: "RAZ-DAV4-PRO",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "HyperPolling 8K technology for the lowest latency in gaming. Ultra-lightweight 55g design with an optical sensor of 35K DPI.",
        URL: "https://amazon.com/dp/B0example12",
        price: 159,
        attributes: [
            { id: 35, term: 1 },
            { id: 36, term: 3 }
        ]
    },
    {
        id: 13,
        title: "Nintendo Switch 2",
        category: 6,
        sku: "NINT-SW2-NEON",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The next-gen hybrid console. Features a 1080p OLED handheld screen and 4K output in docked mode with DLSS support.",
        URL: "https://amazon.com/dp/B0example13",
        price: 499,
        attributes: [
            { id: 3, term: 3 },
            { id: 9, term: 3 }
        ]
    },
    {
        id: 14,
        title: "Sonos Arc Gen 2",
        category: 3,
        sku: "SONO-ARC2-BLK",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Premium Dolby Atmos soundbar with 11 high-performance drivers and improved spatial audio tuning. Works with Wi-Fi 7.",
        URL: "https://amazon.com/dp/B0example14",
        price: 899,
        attributes: [
            { id: 25, term: 3 },
            { id: 8, term: 2 }
        ]
    },
    {
        id: 15,
        title: "Kindle Paperwhite 12th Gen",
        category: 1,
        sku: "AMZ-KNDL-PW12",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "7-inch display with adjustable warm light and 10 weeks of battery life. Faster page turns and 32GB of storage for thousands of books.",
        URL: "https://amazon.com/dp/B0example15",
        price: 149,
        attributes: [
            { id: 10, term: 3 },
            { id: 6, term: 1 }
        ]
    },
    {
        id: 16,
        title: "NVIDIA RTX 5090 Founders Edition",
        category: 2,
        sku: "NV-RTX5090-FE",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The world's fastest GPU. 32GB of VRAM and Blackwell architecture for real-time ray tracing at 8K resolutions.",
        URL: "https://amazon.com/dp/B0example16",
        price: 1999,
        attributes: [
            { id: 5, term: 3 },
            { id: 4, term: 3 },
            { id: 9, term: 5 }
        ]
    },
    {
        id: 17,
        title: "Google Pixel 10 Pro",
        category: 1,
        sku: "GOOG-P10P-OBS",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Tensor G5 chip with dedicated Gemini AI hardware. Featuring advanced 'Magic Editor 2.0' for professional-grade photo manipulation.",
        URL: "https://amazon.com/dp/B0example17",
        price: 999,
        attributes: [
            { id: 7, term: 3 },
            { id: 37, term: 2 },
            { id: 3, term: 3 }
        ]
    },
    {
        id: 18,
        title: "SteelSeries Arctis Nova Pro Wireless (2026)",
        category: 4,
        sku: "SS-ARCTIS-26",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Active noise cancellation for gaming. Infinity Power System allows hot-swapping batteries so you never stop playing.",
        URL: "https://amazon.com/dp/B0example18",
        price: 349,
        attributes: [
            { id: 28, term: 2 },
            { id: 10, term: 3 }
        ]
    },
    {
        id: 19,
        title: "Corsair Dominator Titanium 64GB DDR5",
        category: 2,
        sku: "COR-DOM-64G",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "8000MHz ultra-high-speed memory for Ryzen 9 and Intel Core Ultra 9 systems. Premium forged aluminum heatspreaders.",
        URL: "https://amazon.com/dp/B0example19",
        price: 299,
        attributes: [
            { id: 4, term: 4 },
            { id: 17, term: 2 }
        ]
    },
    {
        id: 20,
        title: "Logitech MX Master 4S",
        category: 8,
        sku: "LOGI-MX4S-GR",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Ergonomic productivity mouse with 8K DPI laser tracking. Silent clicks and multi-device flow between 3 computers.",
        URL: "https://amazon.com/dp/B0example20",
        price: 119,
        attributes: [
            { id: 35, term: 2 },
            { id: 36, term: 2 }
        ]
    },
    {
        id: 21,
        title: "TP-Link Deco BE95 Wi-Fi 7 Mesh",
        category: 2,
        sku: "TP-BE95-2PACK",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Quad-band Wi-Fi 7 mesh system delivering up to 33 Gbps. Covers up to 7,800 sq. ft. with ultra-low latency.",
        URL: "https://amazon.com/dp/B0example21",
        price: 1199,
        attributes: [
            { id: 8, term: 2 }
        ]
    },
    {
        id: 22,
        title: "Ring Battery Doorbell Pro",
        category: 7,
        sku: "RING-DB-PRO",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Head-to-toe 1536p HD video with Bird's Eye View. Dual-band Wi-Fi connectivity and color night vision.",
        URL: "https://amazon.com/dp/B0example22",
        price: 229,
        attributes: [
            { id: 41, term: 3 },
            { id: 27, term: 2 }
        ]
    },
    {
        id: 23,
        title: "Bose QuietComfort Ultra",
        category: 4,
        sku: "BOSE-QC-ULTRA",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "World-class quiet, more quiet than ever before. Breakthrough spatial audio for more immersive listening.",
        URL: "https://amazon.com/dp/B0example23",
        price: 429,
        attributes: [
            { id: 28, term: 3 },
            { id: 25, term: 3 }
        ]
    },
    {
        id: 24,
        title: "Elgato Stream Deck MK.3",
        category: 8,
        sku: "ELG-SD-MK3",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The interface of choice for creators. 15 customizable LCD keys to trigger unlimited actions with a single touch.",
        URL: "https://amazon.com/dp/B0example24",
        price: 149,
        attributes: [
            { id: 21, term: 2 }
        ]
    },
    {
        id: 25,
        title: "Alienware 34 Curved QD-OLED (AW3426DW)",
        category: 9,
        sku: "AW-3426-DW",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Stunning 175Hz ultrawide curved monitor. Infinite contrast ratio and 99.3% DCI-P3 color coverage for pro creators and gamers.",
        URL: "https://amazon.com/dp/B0example25",
        price: 1099,
        attributes: [
            { id: 3, term: 3 },
            { id: 16, term: 3 },
            { id: 2, term: 3 }
        ]
    },
    {
        id: 26,
        title: "Samsung T9 Portable SSD 4TB",
        category: 2,
        sku: "SAM-T9-4TB",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "High-speed USB 3.2 Gen 2x2 interface with up to 2000 MB/s read/write. Rugged design with 3-meter drop resistance.",
        URL: "https://amazon.com/dp/B0example26",
        price: 349,
        attributes: [
            { id: 6, term: 5 },
            { id: 18, term: 4 }
        ]
    },
    {
        id: 27,
        title: "Keychron Q1 Pro Wireless",
        category: 8,
        sku: "KEY-Q1-PRO",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Fully customizable mechanical keyboard with CNC aluminum body. Supports QMK/VIA for remapping any key.",
        URL: "https://amazon.com/dp/B0example27",
        price: 199,
        attributes: [
            { id: 33, term: 2 },
            { id: 29, term: 2 }
        ]
    },
    {
        id: 28,
        title: "Anker 737 Power Bank (PowerCore 24K)",
        category: 8,
        sku: "ANK-737-PB",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "140W ultra-powerful charging for laptops and smartphones. Smart digital display shows output and recharge time.",
        URL: "https://amazon.com/dp/B0example28",
        price: 149,
        attributes: [
            { id: 23, term: 4 }
        ]
    },
    {
        id: 29,
        title: "Philips Hue Bridge & Starter Kit",
        category: 7,
        sku: "HUE-KIT-V2",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Smart lighting for your entire home. Control up to 50 lights via the Bridge and sync with movies and music.",
        URL: "https://amazon.com/dp/B0example29",
        price: 199,
        attributes: [
            { id: 40, term: 2 }
        ]
    },
    {
        id: 30,
        title: "Apple Watch Ultra 3",
        category: 13,
        sku: "AAPL-AW-U3",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Designed for the extreme. Features a 3000-nit micro-LED display and advanced diving metrics. 72-hour battery life.",
        URL: "https://amazon.com/dp/B0example30",
        price: 799,
        attributes: [
            { id: 3, term: 5 },
            { id: 31, term: 3 },
            { id: 10, term: 3 }
        ]
    },
    {
        id: 31,
        title: "Microsoft Surface Pro 11",
        category: 2,
        sku: "MS-SURF-P11",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The most flexible Copilot+ PC. Switch between tablet and laptop modes with 13-inch OLED display and AI-powered inking.",
        URL: "https://amazon.com/dp/B0example31",
        price: 1099,
        attributes: [
            { id: 3, term: 3 },
            { id: 7, term: 2 },
            { id: 49, term: 1 }
        ]
    },
    {
        id: 32,
        title: "Steam Deck OLED 1TB",
        category: 6,
        sku: "VALVE-SD-1TB",
        images: ["steam_deck_oled.png"],
        description: "Portable PC gaming with a stunning 7.4-inch 90Hz HDR OLED screen. Features improved battery and faster Wi-Fi 6E.",
        URL: "https://amazon.com/dp/B0example32",
        price: 649,
        attributes: [
            { id: 3, term: 3 },
            { id: 6, term: 3 },
            { id: 8, term: 1 }
        ]
    },
    {
        id: 33,
        title: "Sony ZV-E10 II Mirrorless Camera",
        category: 5,
        sku: "SONY-ZVE10-M2",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The ultimate vlogging camera. 26MP APS-C sensor with 4K/60p video and advanced AI autofocus for creators.",
        URL: "https://amazon.com/dp/B0example33",
        price: 799,
        attributes: [
            { id: 39, term: 1 },
            { id: 37, term: 2 }
        ]
    },
    {
        id: 34,
        title: "Blue Yeti X USB Microphone",
        category: 4,
        sku: "BLUE-YETI-X",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Four-capsule condenser array for professional broadcasting. High-res LED metering and Blue VO!CE software.",
        URL: "https://amazon.com/dp/B0example34",
        price: 169,
        attributes: [
            { id: 26, term: 2 }
        ]
    },
    {
        id: 35,
        title: "Roborock S8 MaxV Ultra",
        category: 7,
        sku: "ROBO-S8-ULTRA",
        images: ["roborock_s8.png"],
        description: "Robot vacuum and mop with 10,000Pa suction. All-in-one docking station that empties, washes, and dries itself.",
        URL: "https://amazon.com/dp/B0example35",
        price: 1599,
        attributes: [
            { id: 41, term: 2 }
        ]
    },
    {
        id: 36,
        title: "AMD Ryzen 9 9950X",
        category: 2,
        sku: "AMD-R9-9950X",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "16-core, 32-thread enthusiast processor for gaming and streaming. Up to 5.7GHz boost clock on the AM5 platform.",
        URL: "https://amazon.com/dp/B0example36",
        price: 649,
        attributes: [
            { id: 1, term: 4 }
        ]
    },
    {
        id: 37,
        title: "Apple AirPods Pro (3rd Gen)",
        category: 4,
        sku: "AAPL-APP3",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "New H3 chip for double the noise cancellation. Features 'Conversation Awareness' and USB-C charging case.",
        URL: "https://amazon.com/dp/B0example37",
        price: 249,
        attributes: [
            { id: 28, term: 3 },
            { id: 8, term: 3 }
        ]
    },
    {
        id: 38,
        title: "Samsung QN900D 8K Neo QLED",
        category: 3,
        sku: "SAM-8K-75",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrzYfdWPW9N-tRUeMIR2i_GqgyxT2pNBCnA&s", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "75-inch 8K TV with Infinity Air Design. AI Motion Enhancer Pro ensures smooth sports and gaming visuals.",
        URL: "https://amazon.com/dp/B0example38",
        price: 4999,
        attributes: [
            { id: 9, term: 5 },
            { id: 3, term: 4 },
            { id: 2, term: 4 }
        ]
    },
    {
        id: 39,
        title: "Elgato Facecam Pro",
        category: 8,
        sku: "ELG-FC-PRO",
        images: ["facecam_pro.png"],
        description: "World's first 4K/60fps webcam. Studio-quality Sony STARVIS sensor and large f/2.0 aperture for low light.",
        URL: "https://amazon.com/dp/B0example39",
        price: 299,
        attributes: [
            { id: 27, term: 3 },
            { id: 39, term: 1 }
        ]
    },
    {
        id: 40,
        title: "Seagate FireCuda 540 2TB SSD",
        category: 2,
        sku: "SEA-FC-540",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "PCIe Gen5 speed up to 10,000 MB/s. Built-in heatsink for sustained performance in high-end gaming rigs.",
        URL: "https://amazon.com/dp/B0example40",
        price: 289,
        attributes: [
            { id: 6, term: 4 },
            { id: 18, term: 2 }
        ]
    },
    {
        id: 41,
        title: "Wyze Cam v4",
        category: 7,
        sku: "WYZE-V4",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "2.5K resolution security camera with built-in spotlight and siren. IP65 weather resistance for indoor/outdoor use.",
        URL: "https://amazon.com/dp/B0example41",
        price: 35,
        attributes: [
            { id: 41, term: 3 },
            { id: 31, term: 2 }
        ]
    },
    {
        id: 42,
        title: "Sonos Move 2",
        category: 4,
        sku: "SONO-MOVE2-BLK",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Powerful portable speaker with 24 hours of battery. IP56 weather resistance and automatic Trueplay tuning.",
        URL: "https://amazon.com/dp/B0example42",
        price: 449,
        attributes: [
            { id: 10, term: 3 },
            { id: 31, term: 2 }
        ]
    },
    {
        id: 43,
        title: "Razer Kiyo Pro Ultra",
        category: 8,
        sku: "RAZ-KIYO-ULTRA",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The largest sensor ever in a webcam. DSL-like quality with hardware-based HDR and raw 4K footage.",
        URL: "https://amazon.com/dp/B0example43",
        price: 299,
        attributes: [
            { id: 27, term: 3 }
        ]
    },
    {
        id: 44,
        title: "Meta Quest 4",
        category: 6,
        sku: "META-QUEST-4",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Next-gen VR/MR headset with Snapdragon XR3. Features high-res color passthrough and eye-tracking as standard.",
        URL: "https://amazon.com/dp/B0example44",
        price: 499,
        attributes: [
            { id: 44, term: 3 },
            { id: 7, term: 3 }
        ]
    },
    {
        id: 45,
        title: "Nanoleaf Shapes Ultra",
        category: 7,
        sku: "NANO-SHAPES-U",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Smart modular light panels with 16M+ colors. Syncs with screen mirror technology for immersive gaming environments.",
        URL: "https://amazon.com/dp/B0example45",
        price: 199,
        attributes: [
            { id: 34, term: 2 }
        ]
    },
    {
        id: 46,
        title: "Intel Core Ultra 9 285K",
        category: 2,
        sku: "INTL-CU9-285K",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Arrow Lake architecture with built-in AI NPU. 24 cores (8P + 16E) for elite productivity and gaming.",
        URL: "https://amazon.com/dp/B0example46",
        price: 589,
        attributes: [
            { id: 11, term: 5 },
            { id: 7, term: 3 }
        ]
    },
    {
        id: 47,
        title: "Samsung Galaxy Watch Ultra",
        category: 13,
        sku: "SAM-GW-ULTRA",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "The most rugged Galaxy watch. Titanium case with 10ATM water resistance and up to 100 hours of battery in power mode.",
        URL: "https://amazon.com/dp/B0example47",
        price: 649,
        attributes: [
            { id: 31, term: 3 },
            { id: 10, term: 3 },
            { id: 29, term: 3 }
        ]
    },
    {
        id: 48,
        title: "LG C6 4K OLED TV (2026)",
        category: 3,
        sku: "LG-OLED-C6-55",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Featuring the Alpha 11 AI processor for 4x improved performance. Native 144Hz support and G-Sync for ultimate gaming.",
        URL: "https://amazon.com/dp/B0example48",
        price: 1699,
        attributes: [
            { id: 3, term: 3 },
            { id: 2, term: 3 },
            { id: 43, term: 1 }
        ]
    },
    {
        id: 49,
        title: "Western Digital Black SN850P 4TB",
        category: 2,
        sku: "WD-SN850P-4TB",
        images: ["/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Officially licensed SSD for PS5. 7300 MB/s speeds with a custom heatsink designed to fit perfectly in the expansion slot.",
        URL: "https://amazon.com/dp/B0example49",
        price: 499,
        attributes: [
            { id: 6, term: 5 },
            { id: 45, term: 2 }
        ]
    },
    {
        id: 50,
        title: "Logitech G Pro X Superlight 3",
        category: 8,
        sku: "LOGI-GPRO-X3",
        images: ["https://www.logitechg.com/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-6.png", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg", "/images/idimages.jpg"],
        description: "Weighing only 49g, it's the lightest pro mouse yet. HERO 3 sensor with 44K DPI and 8000Hz polling rate.",
        URL: "https://amazon.com/dp/B0example50",
        price: 179,
        attributes: [
            { id: 35, term: 1 },
            { id: 36, term: 3 },
            { id: 30, term: 1 }
        ]
    }
];


localStorage.setItem("tech_store_products", JSON.stringify(products_data_json));