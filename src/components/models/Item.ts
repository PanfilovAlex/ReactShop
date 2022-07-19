import { DisplayAsset } from "./DisplayAsset";

export type Item = {
  mainId: string;
  displayName: string;
  displayDescription: string;
  price: {
    regularPrice: number;
    finalPrice: number;
  };
  displayAssets: DisplayAsset[];
};

// "mainId": "CID_A_326_Athena_Commando_M_SharpDresserBlack",
//             "displayName": "Мрачный спортсмен",
//             "displayDescription": "Быть крутым — непростая работа.",
//             "displayType": "Экипировка",
//             "mainType": "outfit",
//             "offerId": "v2:/d8470bdcbad151ae67860e29a51d7a42b87b4322f840981bdfb1e44b368d07c6",
//             "displayAssets": [
//                 {
//                     "displayAsset": "DAv2_CID_A_326_M_SharpDresserBlack",
//                     "materialInstance": "MI_CID_A_326_M_SharpDresserBlack",
//                     "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_326_M_SharpDresserBlack/MI_CID_A_326_M_SharpDresserBlack.png",
//                     "flipbook": null,
//                     "background_texture": null,
//                     "background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/MI_CID_A_326_M_SharpDresserBlack/background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/MI_CID_A_326_M_SharpDresserBlack/info.ru.png"
//                 },
//                 {
//                     "displayAsset": "DAv2_CID_A_326_M_SharpDresserBlack",
//                     "materialInstance": "MI_CID_A_326_M_SharpDresserBlack_02",
//                     "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_326_M_SharpDresserBlack/MI_CID_A_326_M_SharpDresserBlack_02.png",
//                     "flipbook": null,
//                     "background_texture": null,
//                     "background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/MI_CID_A_326_M_SharpDresserBlack_02/background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/MI_CID_A_326_M_SharpDresserBlack_02/info.ru.png"
//                 }
//             ],
//             "firstReleaseDate": "2022-01-30",
//             "previousReleaseDate": "2022-06-15",
//             "giftAllowed": true,
//             "buyAllowed": true,
//             "price": {
//                 "regularPrice": 800,
//                 "finalPrice": 800
//             },
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "НЕОБЫЧНЫЙ"
//             },
//             "series": null,
//             "banner": null,
//             "offerTag": null,
//             "granted": [
//                 {
//                     "id": "CID_A_326_Athena_Commando_M_SharpDresserBlack",
//                     "type": {
//                         "id": "outfit",
//                         "name": "Экипировка"
//                     },
//                     "name": "Мрачный спортсмен",
//                     "description": "Быть крутым — непростая работа.",
//                     "rarity": {
//                         "id": "Uncommon",
//                         "name": "НЕОБЫЧНЫЙ"
//                     },
//                     "series": null,
//                     "images": {
//                         "icon": "https://media.fortniteapi.io/images/3973f37c8016b0394c939e16c412b1cc/transparent.png",
//                         "featured": "https://media.fortniteapi.io/images/3973f37c8016b0394c939e16c412b1cc/full_featured.png",
//                         "background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/background.png",
//                         "icon_background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/icon_background.png",
//                         "full_background": "https://media.fortniteapi.io/images/cosmetics/3973f37c8016b0394c939e16c412b1cc/v2/info.ru.png"
//                     },
//                     "video": null,
//                     "audio": null,
//                     "gameplayTags": [
//                         "Cosmetics.Filter.Season.19",
//                         "Cosmetics.UserFacingFlags.HasVariants",
//                         "SoundLibrary.ID.StepType.ShoesSneakers",
//                         "SoundLibrary.ID.ClothingType.Generic",
//                         "SoundLibrary.ID.HandType.Bare",
//                         "Cosmetics.Set.FadAhead"
//                     ],
//                     "set": {
//                         "id": "FadAhead",
//                         "name": "Новая мода",
//                         "partOf": "Входит в набор «Новая мода»."
//                     }
//                 }
//             ],
//             "priority": -1,
//             "section": {
//                 "id": "Featured",
//                 "name": "Рекомендуемое",
//                 "landingPriority": 70
//             },
//             "groupIndex": 0,
//             "storeName": "BRWeeklyStorefront",
//             "tileSize": "Normal",
//             "categories": [
//                 "Panel 01"
//             ]
//         }
