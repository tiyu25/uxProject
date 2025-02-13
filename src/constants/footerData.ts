export interface SnsLink {
    name: string;
    url: string;
    label: string;
}

export interface FooterData {
    snsLinks: SnsLink[];
}

export const footerData: FooterData = {
    "snsLinks": [
        { "name": "facebook", "url": "https://www.facebook.com/amorepacific.official", "label": "아모레스토리 페이스북 새창 이동" },
        { "name": "linked", "url": "https://www.linkedin.com/company/amorepacific", "label": "아모레스토리 링크드인 새창 이동" },
        { "name": "instagram", "url": "https://www.instagram.com/amorestories_official/", "label": "아모레스토리 인스타그램 새창 이동" },
        { "name": "youtube", "url": "https://www.youtube.com/channel/UCQbyZBirGnqHTMcTZXs1_2A", "label": "아모레스토리 유튜브 새창 이동" },
        { "name": "naver", "url": "https://blog.naver.com/amorestories", "label": "아모레스토리 네이버 포스트 새창 이동" },
        { "name": "amop-home", "url": "https://www.apgroup.com/int/ko/", "label": "아모레퍼시픽 홈페이지 새창 이동" }
    ]
}