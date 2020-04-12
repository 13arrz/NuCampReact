// import { PARTNERS } from "../shared/partners";

// import * as ActionTypes from "./ActionTypes";

// export const Partners = (
//   state = { isLoading: true, errMess: null, partners: [] },
//   action
// ) => {
//   switch (action.type) {
//     case ActionTypes.ADD_PARTNERS:
//       return {
//         ...state,
//         isLoading: false,
//         errMess: null,
//         partners: action.payload,
//       };

//     case ActionTypes.PARTNERS_LOADING:
//       return { ...state, isLoading: true, errMess: null, partners: [] };

//     case ActionTypes.PARTNERS_FAILED:
//       return { ...state, isLoading: false, errMess: action.payload };

//     default:
//       return state;
//   }
// };

import { PARTNERS } from "../shared/partners";

export const Partners = (state = PARTNERS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// export const PARTNERS = [
//     {
//         id: 0,
//         name: "Bootstrap Outfitters",
//         image: "assets/images/bootstrap-logo.png",
//         featured: false,
//         description: "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
//     },
//     {
//         id: 1,
//         name: "Git Out Expeditions",
//         image: "assets/images/git-logo.png",
//         featured: false,
//         description: "Join Git Out Expeditions to explore new horizons with a group of other adventurers!"
//     },
//     {
//         id: 2,
//         name: "Mongo Fly Shop",
//         image: "assets/images/mongo-logo.png",
//         featured: false,
//         description: "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
//     },
//     {
//         id: 3,
//         name: "Node Outdoor Apparel",
//         image: "assets/images/node-logo.png",
//         featured: true,
//         description: "From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered."
//     }
// ]
