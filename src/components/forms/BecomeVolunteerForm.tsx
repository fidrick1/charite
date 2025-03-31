'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   phone: number;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required().label("Message"),
   })
   .required();

const BecomeVolunteerForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Message sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (

      <form onSubmit={handleSubmit(onSubmit)} className="volunteer-form">
         <div className="row">
            <div className="col-xl-9 mb-10">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name"  {...register("name")} className="form-control" placeholder="Your Name" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" {...register("email")} className="form-control" placeholder="Email Address" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input type="text" id="phone_number"  {...register("phone")} className="form-control" placeholder="Phone Number" />
                  <p className="form_error">{errors.phone?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="birth-day">Date Of Birth</label>
                  <input type="date" id="birth-day" name="birth-day" className="form-control" />
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" {...register("message")} className="form-control" rows={3} placeholder="Write Your Messages"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group pt-10 mb-0">
                  <button type="submit" className="cr-btn ml-5">Send us a message</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default BecomeVolunteerForm
