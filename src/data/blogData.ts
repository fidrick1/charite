import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/blog1.jpg"
import blogThumb_2 from "@/assets/img/blog/blog2.jpg"
import blogThumb_3 from "@/assets/img/blog/blog3.jpg"
import blogThumb_4 from "@/assets/img/blog/blog4.jpg"
import blogThumb_5 from "@/assets/img/blog/blog5.jpg"
import blogThumb_6 from "@/assets/img/blog/blog6.jpg"
import blogThumb_7 from "@/assets/img/blog/blog7.jpg"
import blogThumb_8 from "@/assets/img/blog/blog8.jpg"
import blogThumb_9 from "@/assets/img/blog/blog9.jpg"

import blog2Thumb_1 from "@/assets/img/blog/blog-two1.jpg"
import blog2Thumb_2 from "@/assets/img/blog/blog-two2.jpg"
import blog2Thumb_3 from "@/assets/img/blog/blog-two3.jpg"

import blogClasicThumb_1 from "@/assets/img/blog/blog-clasic1.jpg"
import blogClasicThumb_2 from "@/assets/img/blog/blog-clasic2.jpg"
import blogClasicThumb_3 from "@/assets/img/blog/blog-clasic3.jpg"

import blogRcPost_1 from "@/assets/img/widgets/post1.jpg"
import blogRcPost_2 from "@/assets/img/widgets/post2.jpg"
import blogRcPost_3 from "@/assets/img/widgets/post3.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   date: number;
   desc?: string;
   item_bg?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blogThumb_1,
      date: 13,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 2,
      page: "home_1",
      thumb: blogThumb_2,
      date: 20,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 3,
      page: "home_1",
      thumb: blogThumb_3,
      date: 31,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },

   // home two

   {
      id: 1,
      page: "home_2",
      thumb: blog2Thumb_1,
      date: 13,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 2,
      page: "home_2",
      item_bg: "blog-item--green",
      thumb: blog2Thumb_2,
      date: 20,
      title: "Stroke care puerto ticro",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 3,
      page: "home_2",
      item_bg: "blog-item--yellow",
      thumb: blog2Thumb_3,
      date: 20,
      title: "posuere imperdi Maecenas",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },

   // home three

   {
      id: 1,
      page: "home_3",
      thumb: blogThumb_1,
      date: 13,
      title: "Stroke care in Puerto Ricro Charity campain",
   },
   {
      id: 2,
      page: "home_3",
      item_bg: "item--green",
      thumb: blogThumb_4,
      date: 21,
      title: "Maecenas tempus tellusin eget condimentum",
   },
   {
      id: 3,
      page: "home_3",
      item_bg: "item--yellow",
      thumb: blogThumb_3,
      date: 13,
      title: "posuere imperdiet aecena malesuada Praesent",
   },

   // inner page

   {
      id: 1,
      page: "inner_page",
      thumb: blogThumb_1,
      date: 13,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 2,
      page: "inner_page",
      thumb: blogThumb_2,
      date: 15,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 3,
      page: "inner_page",
      thumb: blogThumb_3,
      date: 18,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 4,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 5,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 6,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 7,
      page: "inner_page",
      thumb: blogThumb_7,
      date: 25,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 8,
      page: "inner_page",
      thumb: blogThumb_8,
      date: 28,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 9,
      page: "inner_page",
      thumb: blogThumb_9,
      date: 9,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 10,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 11,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 12,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 13,
      page: "inner_page",
      thumb: blogThumb_7,
      date: 25,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 14,
      page: "inner_page",
      thumb: blogThumb_8,
      date: 28,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 15,
      page: "inner_page",
      thumb: blogThumb_9,
      date: 9,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 16,
      page: "inner_page",
      thumb: blogThumb_1,
      date: 13,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 17,
      page: "inner_page",
      thumb: blogThumb_2,
      date: 15,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 18,
      page: "inner_page",
      thumb: blogThumb_3,
      date: 18,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 19,
      page: "inner_page",
      thumb: blogThumb_7,
      date: 25,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 20,
      page: "inner_page",
      thumb: blogThumb_8,
      date: 28,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 21,
      page: "inner_page",
      thumb: blogThumb_9,
      date: 9,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 222,
      page: "inner_page",
      thumb: blogThumb_1,
      date: 13,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 23,
      page: "inner_page",
      thumb: blogThumb_2,
      date: 15,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 24,
      page: "inner_page",
      thumb: blogThumb_3,
      date: 18,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 25,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 26,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 27,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 28,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 29,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "Aenean viverra rhoncus",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 30,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "Donec vitae sapien libero",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
   {
      id: 31,
      page: "inner_page",
      thumb: blogThumb_7,
      date: 25,
      title: "tincidunt egeting semper",
      desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },

   // clasic blog

   {
      id: 1,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 2,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Charity To Close After 60 Years Due To Pandemic",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 3,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Hedgehogs In Charity Bags And Offensive Sculptures",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 4,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 5,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 6,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Charity To Close After 60 Years Due To Pandemic",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 7,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 8,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Hedgehogs In Charity Bags And Offensive Sculptures",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 9,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Hedgehogs In Charity Bags And Offensive Sculptures",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 10,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 11,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 12,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Charity To Close After 60 Years Due To Pandemic",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 13,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Katie Stewart Your Charity May Be Net Zero",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 14,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Charity To Close After 60 Years Due To Pandemic",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },
   {
      id: 15,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Hedgehogs In Charity Bags And Offensive Sculptures",
      desc: "A Bedfordshire-based charity for older people has announced it will be closing, after the Covid-19 pandemic led to a drop in funding and an enduring decline in service users. Does this mean getting lots of sleep would have the reverse effect? Would one become the best person to ever have lived.",
   },

   // blog sidebar recent post
   
   {
      id: 1,
      page: "rc_post",
      thumb: blogRcPost_1,
      date: 12,
      title: "Desktop publishing sotware like aldus page",
   },
   {
      id: 2,
      page: "rc_post",
      thumb: blogRcPost_2,
      date: 15,
      title: "Desktop publishing sotware like aldus page",
   },
   {
      id: 3,
      page: "rc_post",
      thumb: blogRcPost_3,
      date: 18,
      title: "Desktop publishing sotware like aldus page",
   },
]

export default blog_data;