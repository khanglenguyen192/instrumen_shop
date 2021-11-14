import { productList } from "./pianoProdData"
import { organData } from "./organe_data"
import { homeGuitarList } from "./guitar_data"
import { ukuleleData } from "./ukulele_data"
import { drumData } from "./drum_data"
import { violinData } from "./violin_data"
import { amplifierData } from "./amplifier_data"
import { soundData } from "./sound_data"
import { fluteData } from "./flute_data"

import { fluteBrand } from "./brands/fluteBrand"
import { soundBrand } from "./brands/soundBrands"
import { amplifierBrand } from "./brands/amplifierBrand"
import { violinBrand } from "./brands/violinBrands"
import { drumBrand } from "./brands/drumBrands"
import { ukuleleBrand } from "./brands/ukuleleBrands"
import { guitarBrand } from "./brands/guitarBrands"
import { pianoBrand } from "./brands/pianoBrands"
import { organBrand } from "./brands/organBrands"
export const productType = [
    {
        category: "piano",
        brandNames: pianoBrand,
        data: productList,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/027-piano.svg",
        title: "Đàn piano"
    },
    {
        category: "organ",
        brandNames: organBrand,
        data: organData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/034-organ.svg",
        title: "Đàn organ"
    },
    {
        category: "guitar",
        brandNames: guitarBrand,
        data: homeGuitarList,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/015-electric-guitar.svg",
        title: "Đàn guitar"
    },
    {
        category: "ukulele",
        brandNames: ukuleleBrand,
        data: ukuleleData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/022-guitar.svg",
        title: "Đàn ukulele"
    },
    {
        category: "violin",
        brandNames: violinBrand,
        data: violinData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/018-violin.svg",
        title: "Đàn violin"
    },
    {
        category: "drum",
        brandNames: drumBrand,
        data: drumData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/038-drums.svg",
        title: "Trống"
    },
    {
        category: "amplifier",
        brandNames: amplifierBrand,
        data: amplifierData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/008-amplifier.svg",
        title: "Amplifier"
    },
    {
        category: "sound",
        brandNames: soundBrand,
        data: soundData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/019-speaker.svg",
        title: "Âm thanh"
    },
    {
        category: "flute",
        brandNames: fluteBrand,
        data: fluteData,
        img: "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/016-flute.svg",
        title: "Nhạc cụ hơi"
    },
]