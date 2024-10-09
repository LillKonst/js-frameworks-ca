import { useState } from "react";
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
import { APIUrl } from "../../api/api";

export default function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageBody, setMessageBody] = useState("");
    const [status, setStatus] = useState("");

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    function onFormSubmit(event) {
        event.preventDefault();

        
        if (fullName.length < 3) {
            setStatus("Full Name must be at least 3 characters long.");
            return;
        }
        if (!isValidEmail(email)) {
            setStatus("Please enter a valid email address.");
            return;
        }
        if (subject.length < 3) {
            setStatus("Subject must be at least 3 characters long.");
            return;
        }
        if (messageBody.length < 3) {
            setStatus("Message body must be at least 3 characters long.");
            return;
        }

        
        console.log({
            fullName,
            email,
            subject,
            messageBody,
        });

        
        const body = {
            fullName,
            email,
            subject,
            messageBody,
        };

        fetch(`${APIUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setStatus("Form submitted successfully!");
                console.log("Form submitted successfully:", data);
            })
            .catch((error) => {
                setStatus("Error submitting the form.");
                console.error("Error submitting form:", error);
            });
    }

    function onTextInputChange(event) {
        const value = event.target.value;
        if (event.target.name === "full-name") {
            setFullName(value);
        }
        if (event.target.name === "email") {
            setEmail(value);
        }
        if (event.target.name === "subject") {
            setSubject(value);
        }
        if (event.target.name === "message-body") {
            setMessageBody(value);
        }
    }

    return (
        <div className="flex flex-col md:mx-6 p-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={onFormSubmit} className="w-full md:w-[600px]">
                <div className="mb-4">
                    <label htmlFor="full-name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        name="full-name"
                        value={fullName}
                        onChange={onTextInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        name="email"
                        value={email}
                        onChange={onTextInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                        Subject
                    </label>
                    <input
                        name="subject"
                        value={subject}
                        onChange={onTextInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="messageBody" className="block text-gray-700 font-bold mb-2">
                        Your Message
                    </label>
                    <textarea
                        name="message-body"
                        value={messageBody}
                        onChange={onTextInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        rows="4"
                        placeholder="Enter your message"
                        required
                    />
                </div>
                {status && <p className="text-red-500 mb-4">{status}</p>}
                <SubmitBtn text="Send Form" />
            </form>
        </div>
    );
}
