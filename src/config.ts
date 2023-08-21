

type FontFamily = "arial" | "sans-serif";
type FontWeight = "normal" | "bold";
type FontColor = "white" | "black";

// BACKGROUND

type BacgroundColor = "white" | "black";



// CONFIG

export interface FontConfig {
    fontFamily?: FontFamily;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: FontWeight;
    fontColor?: FontColor;
};

export interface BackgroundConfig {
    bacgroundColor?: BacgroundColor;
};

export interface AnimationConfig {
    // animasi dalam milidetik
    animationTime: number;
};

export interface ConfigOptions {
    font?: FontConfig;
    background?: BackgroundConfig;
    animation?: AnimationConfig;
};


const initialConfig : ConfigOptions = {
    font: {

    },
    background: {

    },
    animation: {
        animationTime: 300,
    },
};

const config = initialConfig;

export default config;