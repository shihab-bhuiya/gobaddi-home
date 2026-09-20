import localFont from "next/font/local";

export const Tusker_Grotesk = localFont({
    src: [
        {
            path: "../fonts/Tusker_Grotesk/TuskerGrotesk-1500Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Tusker_Grotesk/TuskerGrotesk-1600Semibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../fonts/Tusker_Grotesk/TuskerGrotesk-1700Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Tusker_Grotesk/TuskerGrotesk-1800Super.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-tusker-grotesk",
}); 