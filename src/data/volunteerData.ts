import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.jpg";
import volunteerThumb_3 from "@/assets/img/valunteer/valunteer3.jpg";
import volunteerThumb_4 from "@/assets/img/valunteer/valunteer4.jpg";
import volunteerThumb_5 from "@/assets/img/valunteer/valunteer5.jpg";
import volunteerThumb_6 from "@/assets/img/valunteer/valunteer6.jpg";

import volunteer2Thumb_1 from "@/assets/img/valunteer/volunteer-two1.jpg";
import volunteer2Thumb_2 from "@/assets/img/valunteer/volunteer-two2.jpg";
import volunteer2Thumb_3 from "@/assets/img/valunteer/volunteer-two3.jpg";
import volunteer2Thumb_4 from "@/assets/img/valunteer/volunteer-two4.jpg";
import volunteer2Thumb_5 from "@/assets/img/valunteer/volunteer-two5.jpg";
import volunteer2Thumb_6 from "@/assets/img/valunteer/volunteer-two6.jpg";
import volunteer2Thumb_7 from "@/assets/img/valunteer/volunteer-two7.jpg";
import volunteer2Thumb_8 from "@/assets/img/valunteer/volunteer-two8.jpg";

import volunteer3Thumb_1 from "@/assets/img/valunteer/volunteer-three1.jpg";
import volunteer3Thumb_2 from "@/assets/img/valunteer/volunteer-three2.jpg";
import volunteer3Thumb_3 from "@/assets/img/valunteer/volunteer-three3.jpg";
import volunteer3Thumb_4 from "@/assets/img/valunteer/volunteer-three4.jpg";
import volunteer3Thumb_5 from "@/assets/img/valunteer/volunteer-three5.jpg";
import volunteer3Thumb_6 from "@/assets/img/valunteer/volunteer-three6.jpg";
import volunteer3Thumb_7 from "@/assets/img/valunteer/volunteer-three7.jpg";
import volunteer3Thumb_8 from "@/assets/img/valunteer/volunteer-three8.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   item_bg?: string;
}

const volunteer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: volunteerThumb_1,
      name: "Robart Jonson",
      item_bg: "valunteer-item--green",
   },
   {
      id: 2,
      page: "home_1",
      thumb: volunteerThumb_2,
      name: "Leslie Alexander"
   },
   {
      id: 3,
      page: "home_1",
      thumb: volunteerThumb_3,
      name: "Kristin Watson",
      item_bg: "valunteer-item--yellow",
   },
   {
      id: 4,
      page: "home_1",
      thumb: volunteerThumb_4,
      name: "Guy Hawkins",
      item_bg: "valunteer-item--green",
   },
   {
      id: 5,
      page: "home_1",
      thumb: volunteerThumb_5,
      name: "Theresa Webb"
   },
   {
      id: 6,
      page: "home_1",
      thumb: volunteerThumb_6,
      name: "Brooklyn Simmons",
      item_bg: "valunteer-item--yellow",
   },

   // home two

   {
      id: 1,
      page: "home_2",
      thumb: volunteer2Thumb_1,
      name: "Brooklyn Simmons"
   },
   {
      id: 2,
      page: "home_2",
      thumb: volunteer2Thumb_2,
      name: "Savannah Nguyen",
      item_bg: "valunteer-two-item__des--yellow",
   },
   {
      id: 3,
      page: "home_2",
      thumb: volunteer2Thumb_3,
      name: "Darrell Steward",
      item_bg: "valunteer-two-item__des--green",
   },
   {
      id: 4,
      page: "home_2",
      thumb: volunteer2Thumb_4,
      name: "Leslie Alexander"
   },
   {
      id: 5,
      page: "home_2",
      thumb: volunteer2Thumb_5,
      name: "Brooklyn Simmons"
   },
   {
      id: 6,
      page: "home_2",
      thumb: volunteer2Thumb_6,
      name: "Savannah Nguyen",
      item_bg: "valunteer-two-item__des--yellow",
   },
   {
      id: 7,
      page: "home_2",
      thumb: volunteer2Thumb_7,
      name: "Darrell Steward",
      item_bg: "valunteer-two-item__des--green",
   },
   {
      id: 8,
      page: "home_2",
      thumb: volunteer2Thumb_8,
      name: "Leslie Alexander"
   },

   // home three

   {
      id: 1,
      page: "home_3",
      thumb: volunteer3Thumb_1,
      name: "Brooklyn Simmons"
   },
   {
      id: 2,
      page: "home_3",
      thumb: volunteer3Thumb_2,
      name: "Savannah Nguyen"
   },
   {
      id: 3,
      page: "home_3",
      thumb: volunteer3Thumb_3,
      name: "Darrell Steward"
   },
   {
      id: 4,
      page: "home_3",
      thumb: volunteer3Thumb_4,
      name: "Leslie Alexander"
   },
   {
      id: 5,
      page: "home_3",
      thumb: volunteer3Thumb_5,
      name: "Brooklyn Simmons"
   },
   {
      id: 6,
      page: "home_3",
      thumb: volunteer3Thumb_6,
      name: "Savannah Nguyen"
   },
   {
      id: 7,
      page: "home_3",
      thumb: volunteer3Thumb_7,
      name: "Darrell Steward"
   },
   {
      id: 8,
      page: "home_3",
      thumb: volunteer3Thumb_8,
      name: "Leslie Alexander"
   },
]

export default volunteer_data;