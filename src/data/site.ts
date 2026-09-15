// This files serves as a template
export const SITE_TITLE = 'Huolettomat kotisivut Turku. Täysi mielenrauha. DigiSolutech';
export const SITE_DESCRIPTION = 'DigiSolutech: Rakennamme tehokkaat ja laadukkaat kotisivut yrityksille, yhdistyksille ja yksityishenkilöille ilman stressiä. Meiltä saat myös ylläpidon.';
export const SITE_KEYWORDS = "kotisivut, ylläpito, hakukoneoptimointi, nopea, turvallinen, saavutettava, päivitykset, responsiivinen, pienyrittäjä"
export const SOCIAL_IMAGE = "https://digisolutech.netlify.app/images/banner.avif"
export const LOGO = '/images/apple.png';
export const FAVICON = '/images/apple.png';

export const SOCIAL_LINKS = [
    {
        name: "Google",
        url: "https://www.google.com/maps?cid=15102198032253865202",
        icon: "google",
        alt: "Find us in Google"
    },
    /* { Lucide doesn't have brand icons. Use of cdn for simpleIcons. 
    They don't have Linkedin. I downloaded a svg
        name: "Linkedin",
        url: "https://www.linkedin.com/in/panagiotis-panagiotakopoulos",
        icon: "linkedin",
        alt: "Let's connect on Linkedin"
    }, */
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61579678980354",
        icon: "facebook",
        alt: "Follow me on Facebook"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/digisolutech5081/",
        icon: "instagram",
        alt: "Follow my instagram page"
    },
    {
        name: "Youtube",
        url: "https://youtube.com/@digisolutech",
        icon: "youtube",
        alt: "Watch the latest episode"
    }
];

export interface NavItem {
    name: string;
    url?: string;
    type: string[];
    prominent?: boolean;
    children?: NavItem[];
}

export const NAVIGATION: NavItem[] = [
    {
        name: "Etusivu",
        url: "#main-content",
        type: []
    },
    {
        name: "Portfolio",
        url: "/portfolio",
        type: ["header", "footer-yritys"]
    },
    {
        name: "Palvelut",
        type: ["header", "footer-palvelut"],
        children: [
            {
                name: "Kotisivut",
                url: "kotisivut",
                type: []
            },
            {
                name: "SEO & Näkyvyys",
                url: "seo",
                type: []
            },
            {
                name: "Ylläpito",
                url: "yllapito",
                type: []
            }
        ]
    },
    
    {
        name: "Minusta",
        url: "about",
        type: ["header", "footer-yritys"]
    },
    {
        name: "DigiSolutech vs Alustat",
        url: "vertailu",
        type: ["footer-yritys"]
    },
    {
        name: "Tietopankki",
        type: ["footer-tiedot"],
        children: [
            {
                name: "UKK",
                url: "ukk",
                type: []
            },
            {
                name: "Miten hoidamme GDPR",
                url: "gdpr",
                type: []
            },
            {
                name: "Miksi Saavutettavuus on tärkeä",
                url: "saavutettavuus",
                type: []
            },
        ]
    },
    {
        name: "Blogi",
        url: "blog",
        type: ["header", "footer-tiedot"]
    },
    {
        name: "Ota yhteyttä",
        url: "#contact",
        type: ["header"],
        prominent: true
    },
    {
        name: "Tietosuojaseloste",
        url: "tietosuoja",
        type: ["footer-legal"]
    },
    {
        name: "Saavutettavuusseloste",
        url: "saavutettavuusseloste",
        type: ["footer-legal"]
    },
    {
        name: "English",
        url: "en",
        type: ["footer-legal"]
    }
];

export interface Testimonial {
    name: string;
    role: string;
    company?: string;
    date: string; // ISO format: "2024-10-01"
    avatar: string;
    rating: number;
    text: string;
    fullText?: string;
    verified?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Mike Georgiou",
        role: "Board Game Designer",
        company: "the-game-mechanics.com",
        date: "2025-10-01",
        avatar: "https://fiverr-res.cloudinary.com/image/upload/f_avif,q_50,t_profile_original/v1/attachments/profile/photo/a42a70141cd641f96700e5d1f3c86d47-1637581554948/dece3873-82cf-42d0-a759-f1715ada5f21",
        rating: 5,
        text: "Highly recommended! I am really glad that I've decided to work with DigiSolutech. They took the time to truly understand my goals. The details, creativity, and professionalism really set them apart."
    },
    {
        name: "Giorgos Riskas",
        role: "Founder & CEO",
        company: "justgames.fi",
        date: "2025-05-04",
        avatar: "/images/riskas.avif",
        rating: 5,
        text: "Excellent work on my website, highly satisfied with the quality and professionalism."
    },
    {
        name: "Ioannis Lambropoulos",
        role: "Kirkkoherra",
        company: "ort.fi/turku",
        date: "2025-02-07",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoreE_Dne0AKn9wO3AKNG2yxITEkPxJkQvTw&s",
        rating: 5,
        text: "DigiSolutech thank you very much for your valuable help! Our cooperation is perfect."
    },
    {
        name: "Timo Ronkainen",
        role: "Business Advisor and mentoring",
        company: "growthdrivers.fi",
        date: "2025-11-05",
        avatar: "https://static.wixstatic.com/media/efccea_6e71b0a7ff174e78b1758c9f007abeb3~mv2.webp/v1/fill/w_336,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/EL7A8957.webp",
        rating: 5,
        text: "Panagiotis suunnitteli ja toteutti GrowthDriversille uudet kotisivut erittäin ammattitaitoisesti. Lopputulos vastasi hyvin tavoitteitamme, ja yhteistyö oli koko ajan sujuvaa ja luotettavaa. Suosittelemme lämpimästi Panagiotista."
    }
];

export const getHref = (url: string) => {
    if (url.startsWith('http')) return url; // External links
    if (url.startsWith('#')) return `/${url}`; // Internal anchors (e.g., /#portfolio)
    return `/${url.replace(/^\//, '')}`; // Internal pages (ensures single leading slash)
};