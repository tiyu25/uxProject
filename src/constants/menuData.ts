export interface MenuItem {
    name: string;
    path: string;
}

export const menuData: MenuItem[] = [
    { name: "INSPIRE", path: "/inspire" },
    { name: "HERITAGE", path: "/heritage" },
    { name: "NEW BEAUTY", path: "/newbeauty" },
    { name: "ESG", path: "/esg" },
    { name: "PRESS", path: "/press" }
]