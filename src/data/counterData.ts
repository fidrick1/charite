interface DataType {
   id: number;
   page:string;
   icon: string;
   counter_number: number;
   title: string;
   icon_bg?:string;
 }[]
 
 const counter_data: DataType[] = [
   {
     id: 1,
     page:"home_1",
     icon: "flaticon-solidarity",
     counter_number: 876000,
     title: "Raised by 78,000 people in one year",
   },
   {
     id: 2,
     page:"home_1",
     icon: "flaticon-help",
     counter_number: 45000,
     title: "Volunteers are available to help you",
     icon_bg:"counter-item__icon--green",
   },

  //  home two
   {
    id: 1,
    page:"home_2",
    icon: "flaticon-solidarity",
    icon_bg: "counter-item__icon--green",
    title: "Donation",
    counter_number: 876000,
 },
 {
    id: 2,
    page:"home_2",
    icon: "flaticon-help",
    title: "Volunteers",
    counter_number: 45000,
 },
 {
    id: 3,
    page:"home_2",
    icon: "flaticon-heart",
    icon_bg: "counter-item__icon--yellow",
    title: "Campaigns",
    counter_number: 80000,
 },
 ]

 export default counter_data;