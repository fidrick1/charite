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

const EventDetailsForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Message sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (

      <form onSubmit={handleSubmit(onSubmit)} className="join-us-form form-style-two pt-15">
         <div className="row">
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
                  <input type="email" id="email"  {...register("email")} className="form-control" placeholder="Email Address" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input type="text" id="phone_number" {...register("phone")} className="form-control" placeholder="Phone Number" />
                  <p className="form_error">{errors.phone?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select className="single-select" name="subject" id="subject">
                     <option value="default">Select One</option>
                     <option value="donation">Donation</option>
                     <option value="help">For Help</option>
                  </select>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea  {...register("message")} id="message" className="form-control" rows={5} placeholder="Write Your Messages" required></textarea>
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

export default EventDetailsForm
