'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const BlogDetailsForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Message sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <div className="blog-comment-form form-style-two">
         <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
            <div className="row">
               <div className="col-xl-12 mb-5">
                  <h4>Leave a Comment</h4>
               </div>
               <div className="col-sm-6">
                  <div className="form-group">
                     <label htmlFor="name">Your Name</label>
                     <input type="text" id="name" {...register("name")} className="form-control" placeholder="Your Name" />
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
               <div className="col-md-12">
                  <div className="form-group">
                     <label htmlFor="message">Message</label>
                     <textarea {...register("message")} id="message" className="form-control" rows={5} placeholder="Write Your Messages"></textarea>
                     <p className="form_error">{errors.message?.message}</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="form-group">
                     <input type="checkbox" id="conditions" />
                     <label className="ms-2" htmlFor="conditions">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="form-group pt-10 mb-0">
                     <button type="submit" className="cr-btn ml-5">Post Comment</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default BlogDetailsForm
