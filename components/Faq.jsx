"use client"
import { useState } from 'react';

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What is this platform about?',
            answer: 'This platform provides construction equipment rental services.'
        },
        {
            question: 'How do I rent an equipment?',
            answer: 'You can rent an equipment by browsing through our catalogue and choosing the equipment that fits your needs.'
        },
        {
            question: 'What types of equipment are available for rent?',
            answer: 'We offer a wide range of construction equipment including, but not limited to, excavators, bulldozers, loaders, and cranes.'
        },
        {
            question: 'How do I pay for the equipment rental?',
            answer: 'We offer several payment options including major credit cards and bank transfers.'
        },
        {
            question: 'What if I have an issue with the rented equipment?',
            answer: 'Our customer service team is available 24/7 to assist with any issues you might encounter with the rented equipment.'
        }
    ];

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <section className="bg-gray-100 py-10 px-5 md:px-10 rounded-lg max-w-4xl mx-auto my-16 shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow rounded-lg mb-6 p-5">
                    <div className="cursor-pointer" onClick={() => toggleAnswer(index)}>
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                        {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                    </div>
                </div>
            ))}
        </section>
    );
}
