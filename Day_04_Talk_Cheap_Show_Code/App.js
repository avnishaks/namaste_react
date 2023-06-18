import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Tittle = () => (
  <img
    className="res-logo"
    alt="logo"
    src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3N3aWdneS5qcGc.png"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Tittle />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "535659",
  "name": "HUNGRAMA RESTAURANT",
  "uuid": "47fc23e5-2604-4f91-8e2d-1c5af7394afe",
  "city": "1",
  "area": "Mathikere",
  "totalRatingsString": "100+ ratings",
  "cloudinaryImageId": "dd69fb2c6a6da4f96a146505bfaf53bd",
  "cuisines": [
  "Biryani",
  "Salads",
  "Tandoor"
  ],
  "tags": [],
  "costForTwo": 45000,
  "costForTwoString": "₹450 FOR TWO",
  "deliveryTime": 44,
  "minDeliveryTime": 44,
  "maxDeliveryTime": 44,
  "slaString": "44 MINS",
  "lastMileTravel": 8.699999809265137,
  "slugs": {
  "restaurant": "hungrama-restaurant-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road-2",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "25, 12th Main Rd, A.K.Colony, Gokula 1st Stage, Mathikere Extension, Mathikere, Bengaluru, Karnataka 560054, India",
  "locality": "AK colony",
  "parentId": 332207,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 8900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 8900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "8900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "8.6 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "535659",
  "deliveryTime": 44,
  "minDeliveryTime": 44,
  "maxDeliveryTime": 44,
  "lastMileTravel": 8.699999809265137,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.2",
  "totalRatings": 100,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "564815",
  "name": "Madeena Aroma Biryani",
  "uuid": "118db8d4-ac86-4c9f-b448-05dd44b103c3",
  "city": "1",
  "area": "Btm Layout",
  "totalRatingsString": "100+ ratings",
  "cloudinaryImageId": "pd3jd9b2qidmhaibxhvl",
  "cuisines": [
  "Biryani",
  "North Indian",
  "Kebabs"
  ],
  "tags": [],
  "costForTwo": 39900,
  "costForTwoString": "₹399 FOR TWO",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "slaString": "30 MINS",
  "lastMileTravel": 9.199999809265137,
  "slugs": {
  "restaurant": "madeena-aroma-biryani-btm-btm",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "old number 81, new number 97,17th E Cross Rd, Mahadeshwara Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560076, India",
  "locality": "2nd Stage",
  "parentId": 339740,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 9900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 9900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "9900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "9.1 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "ABOVE ₹1100",
  "discountTag": "FLAT DEAL",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "564815",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "lastMileTravel": 9.199999809265137,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.6",
  "totalRatings": 100,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "449276",
  "name": "Wendy's Burgers",
  "uuid": "e8128b08-9dac-4a26-8083-7fed85e96419",
  "city": "1",
  "area": "Basaveshwar Nagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "aab4bc89ce4991a11400733e48ec21d1",
  "cuisines": [
  "Fast Food",
  "Snacks",
  "American",
  "Burgers",
  "Desserts",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "slaString": "33 MINS",
  "lastMileTravel": 7.5,
  "slugs": {
  "restaurant": "wendys-basaveshwara-nagar-basaveshwaranagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "NO 353, 8th Avenue, 8th main, 1st A cross, 4th block, 3rd stage, Basaveshwar nagar, Bangalore 560079",
  "locality": "3rd Stage",
  "parentId": 972,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 7900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 7900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "7900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "7.5 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "449276",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "lastMileTravel": 7.5,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.0",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "224868",
  "name": "Ambur Dum Biriyani",
  "uuid": "0c67a4ea-26f0-4739-bd01-19551b10b4f9",
  "city": "1",
  "area": "Indiranagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "goevzinldbotvpn3xid1",
  "cuisines": [
  "Indian",
  "Mughlai"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "slaString": "31 MINS",
  "lastMileTravel": 5.699999809265137,
  "slugs": {
  "restaurant": "ambur-dum-biriyani-indiranagar-indiranagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "7 first floor,Above Golden cizzorz saloon, Next booze barrel bar , opposite food town,2nd main 9th cross Binnamangala layout 1st stage Indiranagar Bangalore-560038",
  "locality": "Binnamangala",
  "parentId": 31395,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 5900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 5900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "5900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "5.6 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "224868",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "lastMileTravel": 5.699999809265137,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.8",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "576839",
  "name": "Om meals and paratha junction",
  "uuid": "e2c9a1cf-67ee-494c-a20d-66cded49cec2",
  "city": "1",
  "area": "Domlur",
  "totalRatingsString": "100+ ratings",
  "cloudinaryImageId": "u4c6vysici1ztf62f7hd",
  "cuisines": [
  "North Indian",
  "Thalis",
  "Chinese",
  "South Indian",
  "Beverages",
  "Snacks",
  "Biryani",
  "Kerala",
  "American"
  ],
  "tags": [],
  "costForTwo": 500,
  "costForTwoString": "₹5 FOR TWO",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "slaString": "30 MINS",
  "lastMileTravel": 6.099999904632568,
  "slugs": {
  "restaurant": "om-meals-and-paratha-junction-indiranagar-indiranagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "13th G Main Rd, HAL 2nd Stage, Doopanahalli, Domlur, Bengaluru, Karnataka 560008",
  "locality": "HAL 2nd Stage",
  "parentId": 21651,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 6900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 6900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "6900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "6 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "576839",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "lastMileTravel": 6.099999904632568,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.0",
  "totalRatings": 100,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "352907",
  "name": "Chicking",
  "uuid": "273e5073-cf1e-4094-b501-80cb01f3a557",
  "city": "1",
  "area": "Banashankari",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "optse2kwynu2psjuwyhm",
  "cuisines": [
  "Fast Food",
  "American",
  "Snacks",
  "Grill",
  "Pizzas",
  "Mexican",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 40000,
  "costForTwoString": "₹400 FOR TWO",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "slaString": "33 MINS",
  "lastMileTravel": 8.100000381469727,
  "slugs": {
  "restaurant": "chicking-banashankari-banashankari",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "MUNICIPAL NO: 217, 100 FTRING ROAD, BSK 3RD STAGE, BANGALORE - 560085",
  "locality": "3rd Stage",
  "parentId": 251,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 8900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 8900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "8900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "8.1 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "352907",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "lastMileTravel": 8.100000381469727,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.9",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "694919",
  "name": "EASY BITES BY EMPIRE",
  "uuid": "f67f2598-ab02-4afc-8293-60955bdeb59d",
  "city": "1",
  "area": "Banashankari",
  "totalRatingsString": "100+ ratings",
  "cloudinaryImageId": "d1005728cf3c5ea4447d77b0527b1499",
  "cuisines": [
  "Snacks",
  "Fast Food",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 25000,
  "costForTwoString": "₹250 FOR TWO",
  "deliveryTime": 35,
  "minDeliveryTime": 35,
  "maxDeliveryTime": 35,
  "slaString": "35 MINS",
  "lastMileTravel": 8.100000381469727,
  "slugs": {
  "restaurant": "easy-bites-by-empire-banashankari-banashankari",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "MUNICIPAL NO: 217, 100 FTRING ROAD, BSK 3RD STAGE, BANGALORE - 560085",
  "locality": "FT Ring Road",
  "parentId": 393168,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 8900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 8900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "8900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "8.1 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹499",
  "discountTag": "FLAT DEAL",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "694919",
  "deliveryTime": 35,
  "minDeliveryTime": 35,
  "maxDeliveryTime": 35,
  "lastMileTravel": 8.100000381469727,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.2",
  "totalRatings": 100,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "362852",
  "name": "Craving O Clock",
  "uuid": "27cfbbd1-4427-4a6e-b303-6c90a568a0ed",
  "city": "1",
  "area": "Btm Layout",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "fead0e8d60d85a0804b1134889c3c482",
  "cuisines": [
  "Snacks",
  "Beverages",
  "Continental",
  "Healthy Food",
  "American",
  "North Indian",
  "Indian",
  "Mexican",
  "Tandoor",
  "Punjabi",
  "Salads"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "slaString": "33 MINS",
  "lastMileTravel": 9.100000381469727,
  "slugs": {
  "restaurant": "craving-o-clock-btm-btm",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "Lower Ground floor, Shop no. 69, 7th main road, btm layout stage -2, N.S. palyam, bangalore, BTM Layout , B.B.M.P South, Karnataka - 560076",
  "locality": "2nd Stage",
  "parentId": 65598,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 9900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 9900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "9900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "9.1 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹100",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "362852",
  "deliveryTime": 33,
  "minDeliveryTime": 33,
  "maxDeliveryTime": 33,
  "lastMileTravel": 9.100000381469727,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.3",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "5891",
  "name": "Polar Bear Ice Cream Sundaes",
  "uuid": "57c218a2-79ae-489b-a1e6-5bc90c9c999f",
  "city": "1",
  "area": "Basaveshwara Nagar",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
  "cuisines": [
  "Desserts"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 26,
  "minDeliveryTime": 26,
  "maxDeliveryTime": 26,
  "slaString": "26 MINS",
  "lastMileTravel": 7.300000190734863,
  "slugs": {
  "restaurant": "polar-bear-rajajinagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "No. 491/1, 8th Main, 2nd Cross, 3rd Phase, 3rd Block, Basaveshnagar, Bangalore -560079",
  "locality": "3rd Phase",
  "parentId": 726,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 7900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 7900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "7900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "7.3 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "5891",
  "deliveryTime": 26,
  "minDeliveryTime": 26,
  "maxDeliveryTime": 26,
  "lastMileTravel": 7.300000190734863,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.3",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "174211",
  "name": "Five Star Chicken",
  "uuid": "7b1c888a-657d-4c88-8f9a-5d9ff9ea961f",
  "city": "1",
  "area": "R T Nagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "jxs68vadqravuphaqhxp",
  "cuisines": [
  "Snacks"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "slaString": "31 MINS",
  "lastMileTravel": 8.800000190734863,
  "slugs": {
  "restaurant": "five-star-chicken-kanakanagar-rt-nagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "Five star chicken, K R Enterprises, no 46/ 5, site number 1&2, 7th cross,khb main road, kanakaNagar,r t nagar post , Bangalore 560032",
  "locality": "KanakaNagar",
  "parentId": 376,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 8900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 8900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "8900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "8.8 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "174211",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "lastMileTravel": 8.800000190734863,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.0",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "170539",
  "name": "Donne Biryani Adda",
  "uuid": "ff404623-56e4-45bf-8a42-d843c1848f1b",
  "city": "1",
  "area": "Indiranagar",
  "totalRatingsString": "500+ ratings",
  "cloudinaryImageId": "wujms9lt0bsabrid1dwg",
  "cuisines": [
  "Biryani",
  "South Indian",
  "Desserts",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 26,
  "minDeliveryTime": 26,
  "maxDeliveryTime": 26,
  "slaString": "26 MINS",
  "lastMileTravel": 6.5,
  "slugs": {
  "restaurant": "donne-biryani-adda-indiranagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "#60, GNR Enclave, 1st Floor, Appareddy Palya, Indiranagar Double road, Indiranagar, Bangalore.",
  "locality": "Appareddy Palya",
  "parentId": 20115,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 6900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 6900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "6900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "6.5 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "170539",
  "deliveryTime": 26,
  "minDeliveryTime": 26,
  "maxDeliveryTime": 26,
  "lastMileTravel": 6.5,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.2",
  "totalRatings": 500,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "132622",
  "name": "Marwadi Chaat & Tiffin Services Shanti nagar",
  "uuid": "8797a981-9a80-4f22-835e-8ccfdc8e6def",
  "city": "1",
  "area": "Shanthi Nagar",
  "totalRatingsString": "5000+ ratings",
  "cloudinaryImageId": "e8f48a82caf1cdc428448f64dba7b61e",
  "cuisines": [
  "Rajasthani",
  "North Indian",
  "Snacks",
  "Chaat"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "slaString": "19 MINS",
  "lastMileTravel": 2.200000047683716,
  "slugs": {
  "restaurant": "marwadi-chaat-tiffin-services-shantinagar-shantinagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "No :9 5 th Cross Lakshmi road shantinagar Bangalore-560027",
  "locality": "Lakshmi road",
  "parentId": 20091,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 3300,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 3300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "3300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.2 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "132622",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "lastMileTravel": 2.200000047683716,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.7",
  "totalRatings": 5000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "532085",
  "name": "Thalairaj Biryani",
  "uuid": "ad0af2da-76d7-4954-bbaf-ae0438fec0e9",
  "city": "1",
  "area": "Vijayanagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "itzlucsdbqyljn07ucdy",
  "cuisines": [
  "Andhra",
  "Biryani",
  "Hyderabadi",
  "South Indian",
  "Indian",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "slaString": "30 MINS",
  "lastMileTravel": 8.800000190734863,
  "slugs": {
  "restaurant": "thalaivars-biryani-vijayanagar-vijayanagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "NO. 1234/A, LGF 1ST STAGE, 2ND PHASE, CHANDRA LAYOUT, BENGALURU, Vijayanagara, B.B.M.P West, Karnataka-560072",
  "locality": "Chandra Layout",
  "parentId": 373895,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 8900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 8900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "8900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "8.8 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹749",
  "discountTag": "FLAT DEAL",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "532085",
  "deliveryTime": 30,
  "minDeliveryTime": 30,
  "maxDeliveryTime": 30,
  "lastMileTravel": 8.800000190734863,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.2",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "574268",
  "name": "The Meals Junction",
  "uuid": "10635572-9740-4e35-b7dc-4cb7e94c0e5f",
  "city": "1",
  "area": "Indiranagar",
  "totalRatingsString": "100+ ratings",
  "cloudinaryImageId": "nobnx31741uiwnmvsvst",
  "cuisines": [
  "North Indian",
  "Bengali",
  "South Indian",
  "Fast Food",
  "Chinese",
  "Biryani",
  "Desserts",
  "Kerala",
  "Punjabi"
  ],
  "tags": [],
  "costForTwo": 500,
  "costForTwoString": "₹5 FOR TWO",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "slaString": "28 MINS",
  "lastMileTravel": 6.099999904632568,
  "slugs": {
  "restaurant": "the-meals-junction-indiranagar-indiranagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "No.21, 1, 3rd Cross Rd, HAL 2nd Stage, indiranagar ,,K R Puram,B.B.M.P East,Karnataka-560008",
  "locality": "2nd stage",
  "parentId": 211345,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "distance",
  "fee": 6900,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 6900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "6900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "6 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "574268",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "lastMileTravel": 6.099999904632568,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.7",
  "totalRatings": 100,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "577017",
  "name": "Crispy Studio",
  "uuid": "58ba3362-8206-4ca8-ac75-b105cb51f231",
  "city": "1",
  "area": "JP Nagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "ioqg6ynikepkzqcq5gue",
  "cuisines": [
  "Burgers",
  "Biryani",
  "American",
  "Turkish",
  "Salads",
  "Fast Food"
  ],
  "tags": [],
  "costForTwo": 40000,
  "costForTwoString": "₹400 FOR TWO",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "slaString": "31 MINS",
  "lastMileTravel": 9.899999618530273,
  "slugs": {
  "restaurant": "crispy-studio-jp-nagar-jp-nagar",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "312, 15th Cross Rd, J P Nagar Phase 5, J. P. Nagar, Bengaluru, Karnataka 560078, India",
  "locality": "5th Phase",
  "parentId": 345614,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 9900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 9900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "9900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "9.8 kms",
  "hasSurge": false,
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100",
  "discountTag": "",
  "headerTypeV2": 0
  },
  "sla": {
  "restaurantId": "577017",
  "deliveryTime": 31,
  "minDeliveryTime": 31,
  "maxDeliveryTime": 31,
  "lastMileTravel": 9.899999618530273,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.3",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  },
  {
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "393840",
  "name": "Chinese Wok",
  "uuid": "356aa40a-430c-42b5-b125-16ff0af0f308",
  "city": "1",
  "area": "Adugodi",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
  "cuisines": [
  "Chinese",
  "Asian",
  "Tibetan",
  "Desserts"
  ],
  "tags": [],
  "costForTwo": 25000,
  "costForTwoString": "₹250 FOR TWO",
  "deliveryTime": 22,
  "minDeliveryTime": 22,
  "maxDeliveryTime": 22,
  "slaString": "22 MINS",
  "lastMileTravel": 5.900000095367432,
  "slugs": {
  "restaurant": "chinese-wok-(wok-express)-koramangala-koramangala",
  "city": "bangalore"
  },
  "cityState": "1",
  "address": "SHOP NO.17 & 17/1, CHIKKALAKSHMAIAH LAYOUT, HOSUR MAIN ROAD, BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560029",
  "locality": "Chikka Lakshmaiah Layout",
  "parentId": 61955,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 5900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 5900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "5900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "5.9 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "393840",
  "deliveryTime": 22,
  "minDeliveryTime": 22,
  "maxDeliveryTime": 22,
  "lastMileTravel": 5.900000095367432,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.8",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  "parentWidget": false
  }
]
const BurgerKing = {
  name: "BurgerKing",
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e",
  cousines: ["Beverages", "Bakery", "Fast Food"],
  ratings: "4.2",
};

const RestrauntCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId,cuisines,totalRatingsString}= resData.data.data;
  return (
    <div className="res-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
          cloudinaryImageId
        }
      />
      <div className="res-property">
        <h5>{name}</h5>
        <h6>{cuisines.join(",")}</h6>
        <h7>{totalRatingsString} stars</h7>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conatainer">
       {
         resList.map(rest=><RestrauntCard key={rest.data.data.id} resData={rest}/>)
       }
      </div>
    </div>
  );
};
const Footer = () => {
  return <h4> FooterComponent </h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
