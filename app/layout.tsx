import './globals.css'
import './styles/iconsfont.css'
import type {Metadata} from 'next'
import {helvetica, helveticaBold, helveticaLight, robotoBold} from "@/app/styles/fonts";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
    title: 'SEO компания в Москве | Агентство интернет-маркетинга Intelsib',
    description: 'Комплекс digital-услуг по интернет-маркетингу: SEO, контекст, маркетинг-аналитика. Подробные кейсы проектов рекламного агентства интернет-маркетинга «Intelsib». ТОП-10 рейтинга SEO-компаний, 14 лет на рынке интернет-рекламы.',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body
            className={`${helvetica.className} ${helvetica.variable} ${helveticaBold.variable} ${helveticaLight.variable} ${robotoBold.variable}`}>
        <Header/>
        <main className={'main'}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
