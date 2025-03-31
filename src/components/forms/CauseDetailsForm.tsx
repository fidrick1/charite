'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';

interface FormData {
   first_name: string;
   last_name: string;
   cardholder_name: string;
   email: string;
   card_number: number;
}

const schema = yup
   .object({
      first_name: yup.string().required().label("First_Name"),
      last_name: yup.string().required().label("Last_Name"),
      cardholder_name: yup.string().required().label("Cardholder_Name"),
      email: yup.string().required().email().label("Email"),
      card_number: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
   })
   .required();

interface PriceDataType {
   id: number;
   price_id: string;
   price_title: number | string;
   check?: boolean;
}[]

const price_data: PriceDataType[] = [
   {
      id: 1,
      price_id: "price50",
      price_title: 50,
      check: true,
   },
   {
      id: 2,
      price_id: "price100",
      price_title: 100,
   },
   {
      id: 3,
      price_id: "price200",
      price_title: 200,
   },
   {
      id: 4,
      price_id: "price300",
      price_title: 300,
   },
   {
      id: 5,
      price_id: "price400",
      price_title: 400,
   },
   {
      id: 6,
      price_id: "price_amount",
      price_title: "Other your amount",
   },
   {
      id: 7,
      price_id: "oneTime",
      price_title: "One Time",
      check: true,
   },
   {
      id: 8,
      price_id: "monthly",
      price_title: "Monthly",
   },
   {
      id: 9,
      price_id: "yearly",
      price_title: "Yearly",
   },
   {
      id: 10,
      price_id: "creditCard",
      price_title: "Credit Card",
      check: true,
   },
   {
      id: 11,
      price_id: "payPal",
      price_title: "PayPal",
   },
   {
      id: 12,
      price_id: "bankTransfer",
      price_title: "Bank Transfer",
   },
]
const CauseDetailsForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Message sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   const [selectedPrice, setSelectedPrice] = React.useState<number | string | null>(price_data[0].price_id);
   const [makePayment, setMakePayment] = React.useState<string | null>(price_data[6].price_id);
   const [paymentMethod, setPaymentMethod] = React.useState<string | null>(price_data[9].price_id);

   const handlePriceChange = (price: number | string) => {
      setSelectedPrice(price);
   };

   const handleMakePayment = (type: string) => {
      setMakePayment(type);
   };

   const handlePaymentMethod = (type: string) => {
      setPaymentMethod(type);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="donation-form">
         <div className="row">
            <div className="col-lg-12">
               <h5>How Mouch Would You Like To Donate ?</h5>
               <div className="custom-radio-price">
                  {price_data.slice(0, 6).map((item, index) => (
                     <div key={index} className="radio-item">
                        <input
                           type="radio"
                           name="donationPrice"
                           id={item.price_id}
                           checked={selectedPrice === item.price_id}
                           onChange={() => handlePriceChange(item.price_id)}
                        />
                        <label htmlFor={item.price_id}>{item.price_title}$</label>
                     </div>
                  ))}
               </div>
            </div>

            <div className="col-lg-12">
               <h5>I want like to make</h5>
               <div className="custom-radios">
                  {price_data.slice(6, 9).map((item) => (
                     <div key={item.id} className="radio-item">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="donationType"
                           id={item.price_id}
                           checked={makePayment === item.price_id}
                           onChange={() => handleMakePayment(item.price_id)}
                        />
                        <label className="form-check-label" htmlFor={item.price_id}>{item.price_title}</label>
                     </div>
                  ))}
               </div>
            </div>

            <div className="col-lg-12">
               <h5>Personal Info</h5>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" {...register("first_name")} className="form-control" placeholder="Your First Name" />
                  <p className="form_error">{errors.first_name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" {...register("last_name")} className="form-control" placeholder="Your Last Name" />
                  <p className="form_error">{errors.last_name?.message}</p>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" {...register("email")} className="form-control" placeholder="Your Email Address" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>

            <div className="col-lg-12">
               <h5>Select Payment Method</h5>
               <div className="custom-radios">
                  {price_data.slice(9, 12).map((item) => (
                     <div key={item.id} className="radio-item">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="paymentMethod"
                           id={item.price_id}
                           checked={paymentMethod === item.price_id}
                           onChange={() => handlePaymentMethod(item.price_id)}
                        />
                        <label className="form-check-label" htmlFor={item.price_id}> Credit Card</label>
                     </div>
                  ))}
               </div>
            </div>

            <div className="col-lg-12">
               <h5>Credit Card Info</h5>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="card_number">Card Number</label>
                  <input type="text" id="card_number" {...register("card_number")} className="form-control" placeholder="Card Number" />
                  <p className="form_error">{errors.card_number?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="cvc_number">CVC</label>
                  <input type="text" id="cvc_number" name="cvc" className="form-control" placeholder="CVC" />
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="cardholderName">Cardholder Name</label>
                  <input type="text" id="cardholderName" {...register("cardholder_name")} className="form-control" placeholder="Cardholder Name" />
                  <p className="form_error">{errors.cardholder_name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="expirationDate">Expiration</label>
                  <input type="date" id="expirationDate" name="expirationDate" className="form-control" />
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group pt-10 mb-0">
                  <div className="total-price">
                     <div className="price-part">
                        <h5>Total donation</h5>
                        <span className="price">$50</span>
                     </div>
                     <button type="submit" className="cr-btn ml-5">Donation Now</button>
                  </div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default CauseDetailsForm
