
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ContactForm() {
    
    const schema = yup
        .object({
            fullName: yup
                .string()
                .min(3, "Full Name must be at least 3 characters")
                .max(30, "Full Name cannot be longer than 30 characters")
                .required("Full Name is required"),
            email: yup
                .string()
                .email("Please enter a valid email address")
                .required("Email is required"),
            subject: yup
                .string()
                .min(3, "Subject must be at least 3 characters")
                .max(20, "Subject cannot be longer than 20 characters")
                .required("Subject is required"),
            message: yup
                .string()
                .min(3, "Message must be at least 3 characters")
                .max(300, "Message cannot be longer than 300 characters")
                .required("Message is required"),
    })
    .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <div className="flex flex-col md:mx-6 p-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit(onFormSubmit)} className="w-full md:w-[600px]">
                <div className="mb-4">
                    <label htmlFor="full-name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        {...register("fullName", {
                            required: true,
                            minLength: 3,
                            maxLength: 30,
                          })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter your full name"
                    /><p className="text-red-500">{errors.fullName?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter your email"
                    /><p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                        Subject
                    </label>
                    <input
                        {...register("subject", {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter your subject"
                    /><p className="text-red-500">{errors.subject?.message}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="messageBody" className="block text-gray-700 font-bold mb-2">
                        Your Message
                    </label>
                    <textarea
                        {...register("message", {
                            required: true,
                            minLength: 3,
                            maxLength: 300,
                          })}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="4"
                        placeholder="Enter your message"
                    /> <p className="text-red-500">{errors.message?.message}</p>
                </div>
                <SubmitBtn text="Send Form" />
            </form>
        </div>
    );
}
