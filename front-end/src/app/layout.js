import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    style: ["normal"],
    subsets: ["latin"],
    weight: "300",
});

export const metadata = {
    title: "TOPSHOP",
    description: "Sklep e-commerce w Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
