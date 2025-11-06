import React, { FC, useState } from 'react';
import { COMPANY_EMAIL, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, FACEBOOK_HANDLE, X_HANDLE, TIKTOK_HANDLE, LINKEDIN_HANDLE } from '../constants';
import { EnvelopeIcon, WhatsAppIcon, InstagramIcon, FacebookIcon, XSocialIcon, TikTokIcon, LinkedInIcon, UserIcon, TagIcon, CheckCircleIcon } from '../icons';
import { StaticPageLayout } from '../components/StaticPageLayout';

export const ContactUsView: FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('Please fill out all required fields.');
            return;
        }
        // Simulate form submission
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };
    
    return (
        <StaticPageLayout title="Get in Touch">
            <p>We'd love to hear from you! Whether you have a question about your order, our products, or just want to say hello, please use the form below or one of the contact methods to reach us.</p>
            
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 not-prose">
                <div className="lg:col-span-3">
                    {isSubmitted ? (
                        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg text-center flex flex-col items-center justify-center h-full">
                            <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                            <p className="text-gray-700 mt-2">Thank you for contacting us. We've received your message and will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="floating-label-group">
                                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder=" " required className="floating-input" />
                                <label htmlFor="name" className="floating-label">Your Name<span className="text-red-500">*</span></label>
                                <div className="form-icon"><UserIcon className="w-5 h-5"/></div>
                            </div>
                             <div className="floating-label-group">
                                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder=" " required className="floating-input" />
                                <label htmlFor="email" className="floating-label">Email Address<span className="text-red-500">*</span></label>
                                <div className="form-icon"><EnvelopeIcon className="w-5 h-5"/></div>
                            </div>
                            <div className="floating-label-group">
                                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder=" " required className="floating-input" />
                                <label htmlFor="subject" className="floating-label">Subject<span className="text-red-500">*</span></label>
                                <div className="form-icon"><TagIcon className="w-5 h-5"/></div>
                            </div>
                            <div className="floating-label-group">
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder=" " rows={5} required className="floating-textarea pt-6"></textarea>
                                <label htmlFor="message" className="floating-label">Your Message<span className="text-red-500">*</span></label>
                                <div className="form-icon" style={{ top: '1.5rem' }}><EnvelopeIcon className="w-5 h-5"/></div>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div>
                                <button type="submit" className="form-button w-full">Send Message</button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="lg:col-span-2 space-y-6">
                     <a href={`mailto:${COMPANY_EMAIL}`} className="group bg-orange-50 border border-orange-200 p-6 rounded-lg flex items-start space-x-4 hover:border-orange-500 hover:bg-white transition-all duration-300">
                        <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                            <EnvelopeIcon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
                            <p className="text-gray-600 mt-1 text-sm">Best for non-urgent inquiries.</p>
                            <span className="mt-2 inline-block text-sm font-semibold text-orange-600 group-hover:underline">{COMPANY_EMAIL}</span>
                        </div>
                    </a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="group bg-green-50 border border-green-200 p-6 rounded-lg flex items-start space-x-4 hover:border-green-500 hover:bg-white transition-all duration-300">
                        <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-500 transition-colors">
                            <WhatsAppIcon className="w-6 h-6 text-green-600 group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">WhatsApp</h3>
                            <p className="text-gray-600 mt-1 text-sm">Get instant answers for your questions.</p>
                            <span className="mt-2 inline-block text-sm font-semibold text-green-600 group-hover:underline">Start Chat</span>
                        </div>
                    </a>
                     <div className="text-center pt-6">
                        <h3 className="text-xl font-bold text-gray-800">Follow Us</h3>
                        <div className="mt-4 flex justify-center space-x-5">
                            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 social-icon social-instagram"><InstagramIcon className="w-7 h-7" /></a>
                            <a href={`https://facebook.com/${FACEBOOK_HANDLE}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 social-icon social-facebook"><FacebookIcon className="w-7 h-7" /></a>
                            <a href={`https://tiktok.com/@${TIKTOK_HANDLE}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 social-icon social-tiktok"><TikTokIcon className="w-7 h-7" /></a>
                            <a href={`https://x.com/${X_HANDLE}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 social-icon social-x-light"><XSocialIcon className="w-7 h-7" /></a>
                            <a href={LINKEDIN_HANDLE} target="_blank" rel="noopener noreferrer" className="text-gray-400 social-icon social-linkedin"><LinkedInIcon className="w-7 h-7" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </StaticPageLayout>
    );
};