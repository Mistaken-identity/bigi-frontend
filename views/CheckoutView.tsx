
import React, { FC, useState, useMemo, ReactNode, useEffect } from 'react';
import { CartItem, DeliveryDetails } from '../types';
import { DELIVERY_LOCATIONS, SHIPPING_COST } from '../constants';
import { ArrowLeftIcon, UserIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon, BanknotesIcon, BuildingStorefrontIcon, ChevronDownIcon } from '../icons';
import { formatCurrency } from '../utils';
import PlaceOrderButton from '../components/PlaceOrderButton';


// inside JSX 
<PlaceOrderButton />

const FormSection: FC<{ title: string, icon: ReactNode, children: ReactNode }> = ({ title, icon, children }) => (
    <div>
        <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4">
            <span className="bg-orange-100 text-orange-500 p-2 rounded-full mr-3">{icon}</span>
            {title}
        </h2>
        <div className="space-y-4">{children}</div>
    </div>
);


const FloatingInput: FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon: ReactNode }> = ({ label, icon, id, ...props }) => (
    <div className="floating-label-group">
        <input id={id} placeholder=" " {...props} className="floating-input" />
        <label htmlFor={id} className="floating-label">{label}{props.required && <span className="text-red-500">*</span>}</label>
        <div className="form-icon">{icon}</div>
    </div>
);


const FloatingTextarea: FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; icon: ReactNode }> = ({ label, icon, id, ...props }) => (
    <div className="floating-label-group">
        <textarea id={id} placeholder=" " {...props} className="floating-textarea" />
        <label htmlFor={id} className="floating-label">{label}</label>
        <div className="form-icon" style={{ top: '1.5rem' }}>{icon}</div>
    </div>
);

const FloatingSelect: FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; icon: ReactNode; children: ReactNode }> = ({ label, icon, id, children, ...props }) => (
    <div className="floating-label-group">
        <select id={id} {...props} className="floating-select">
            {children}
        </select>
        <label htmlFor={id} className="floating-label">{label}{props.required && <span className="text-red-500">*</span>}</label>
        <div className="form-icon">{icon}</div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </div>
    </div>
);

const ProgressBar: FC<{ current: number, total: number }> = ({ current, total }) => (
    <div>
        <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${(current / total) * 100}%` }}></div>
        </div>
        <div className="progress-steps-container">
            {[...Array(total + 1)].map((_, i) => (
                <div key={i} className={`progress-step ${i === current ? 'active' : ''} ${i < current ? 'completed' : ''}`}></div>
            ))}
        </div>
    </div>
);

export const CheckoutView: FC<{ cart: CartItem[], onPlaceOrder: (details: DeliveryDetails) => void, onBack: () => void }> = ({ cart, onPlaceOrder, onBack }) => {
    const [details, setDetails] = useState<DeliveryDetails>({
        firstName: '', lastName: '', phone: '', email: '', location: '', locationDetails: '', paymentMethod: 'payOnDelivery', mpesaNumber: '', cardNumber: ''
    });
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [showMpesaPrompt, setShowMpesaPrompt] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const total = subtotal + SHIPPING_COST;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };
    
    const formSteps = useMemo(() => [
        {
            key: 'firstName' as keyof DeliveryDetails,
            question: "Let's start with your first name",
            validation: (value: string) => value.trim().length > 1,
            component: <FloatingInput type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange} required autoComplete="given-name" label="First Name" icon={<UserIcon className="w-5 h-5"/>} autoFocus={currentStep === 0} />
        },
        {
            key: 'lastName' as keyof DeliveryDetails,
            question: "And your last name?",
            validation: (value: string) => value.trim().length > 1,
            component: <FloatingInput type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange} required autoComplete="family-name" label="Last Name" icon={<UserIcon className="w-5 h-5"/>} autoFocus={currentStep === 1} />
        },
        {
            key: 'phone' as keyof DeliveryDetails,
            question: "What's a good phone number to reach you?",
            validation: (value: string) => /^(07|01)\d{8}$/.test(value.trim()),
            component: <FloatingInput type="tel" id="phone" name="phone" value={details.phone} onChange={handleChange} required autoComplete="tel" placeholder="e.g. 0712345678" label="Phone Number" icon={<PhoneIcon className="w-5 h-5"/>} autoFocus={currentStep === 2} />
        },
        {
            key: 'email' as keyof DeliveryDetails,
            question: "What's your email for order updates?",
            validation: (value: string) => value.trim() === '' || /\S+@\S+\.\S+/.test(value.trim()),
            component: <FloatingInput type="email" id="email" name="email" value={details.email} onChange={handleChange} autoComplete="email" placeholder="you@example.com" label="Email Address (Optional)" icon={<EnvelopeIcon className="w-5 h-5"/>} autoFocus={currentStep === 3} />
        },
        {
            key: 'location' as keyof DeliveryDetails,
            question: "Where should we deliver your order?",
            validation: (value: string) => !!value,
            component: <FloatingSelect id="location" name="location" value={details.location} onChange={handleChange} required label="Delivery Location" icon={<MapPinIcon className="w-5 h-5"/>} autoFocus={currentStep === 4}>
                            <option value="" disabled>Select a location...</option>
                            {Object.entries(DELIVERY_LOCATIONS).map(([group, locations]) => (
                                <optgroup label={group} key={group}>
                                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                                </optgroup>
                            ))}
                        </FloatingSelect>
        },
        {
            key: 'locationDetails' as keyof DeliveryDetails,
            question: "Any specific details? (e.g., building, floor)",
            validation: () => true, // Optional field
            component: <FloatingTextarea id="locationDetails" name="locationDetails" value={details.locationDetails} onChange={handleChange} rows={2} label="Apartment, building, etc. (Optional)" icon={<BuildingStorefrontIcon className="w-5 h-5"/>} autoFocus={currentStep === 5} />
        },
    ], [details, handleChange, currentStep]);

    const handleNext = () => {
        const currentField = formSteps[currentStep];
        const value = details[currentField.key] as string;
        const isValid = currentField.validation(value);

        if (isValid) {
            if (currentStep < formSteps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        } else {
            setErrors(prev => ({ ...prev, [currentField.key]: true }));
            setTimeout(() => setErrors(prev => ({ ...prev, [currentField.key]: false })), 820);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isFormComplete = useMemo(() => {
        return formSteps.every(step => step.validation(details[step.key] as string));
    }, [details, formSteps]);
    
    const handleMpesaPaymentConfirmed = () => {
        setShowMpesaPrompt(false);
        setIsProcessingPayment(true);
        setTimeout(() => { // Simulate final verification
            setIsProcessingPayment(false);
            onPlaceOrder(details);
        }, 1200);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormComplete) {
            const firstInvalidStep = formSteps.findIndex(step => !step.validation(details[step.key] as string));
            if(firstInvalidStep !== -1) setCurrentStep(firstInvalidStep);
            return;
        }

        if (details.paymentMethod === 'payAtSite') {
            if (details.sitePaymentOption === 'mpesa') {
                if (/^(07|01)\d{8}$/.test(details.mpesaNumber || '')) {
                    setShowMpesaPrompt(true);
                }
            } else if (details.sitePaymentOption === 'card') {
                if ((details.cardNumber || '').replace(/\s/g, '').length >= 16) {
                    setIsProcessingPayment(true);
                    setTimeout(() => {
                        setIsProcessingPayment(false);
                        onPlaceOrder(details);
                    }, 2000);
                }
            }
        } else {
            onPlaceOrder(details);
        }
    };
    
    const handlePaymentMethodChange = (method: 'payOnDelivery' | 'payAtSite') => {
        setDetails(prev => ({
            ...prev,
            paymentMethod: method,
            sitePaymentOption: method === 'payOnDelivery' ? undefined : prev.sitePaymentOption,
            mpesaNumber: method === 'payOnDelivery' ? '' : prev.mpesaNumber,
            cardNumber: method === 'payOnDelivery' ? '' : prev.cardNumber,
        }));
    };
    
    const handlePaymentOptionChange = (option: 'mpesa' | 'card') => {
        setDetails(prev => ({
            ...prev,
            sitePaymentOption: option,
            mpesaNumber: option === 'card' ? '' : prev.mpesaNumber,
            cardNumber: option === 'mpesa' ? '' : prev.cardNumber,
        }));
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && currentStep < formSteps.length - 1) {
                e.preventDefault();
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentStep, handleNext]);

    return (
    <>
        {showMpesaPrompt && (
            <div className="mpesa-modal-overlay">
                <div className="mpesa-modal-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1280px-M-PESA_LOGO-01.svg.png" alt="M-Pesa Logo" className="mpesa-logo" />
                    <h3 className="text-xl font-bold text-gray-900">Confirm Payment</h3>
                    <p className="text-gray-600 mt-2">An STK push has been sent to your phone <strong className="text-gray-800">{details.mpesaNumber}</strong>.</p>
                    <p className="text-3xl font-extrabold text-green-600 my-4">{formatCurrency(total)}</p>
                    <p className="text-sm text-gray-500">Please enter your M-Pesa PIN on your phone to complete the transaction.</p>
                    <button onClick={handleMpesaPaymentConfirmed} className="mpesa-confirm-button mt-6">
                        I Have Paid
                    </button>
                    <button onClick={() => setShowMpesaPrompt(false)} className="mpesa-cancel-button">
                        Cancel Payment
                    </button>
                </div>
            </div>
        )}

        <div className="checkout-futuristic-bg min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeftIcon className="w-5 h-5 mr-2"/>
                    Back to Cart
                </button>
                
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-7">
                        <div className="checkout-card p-6 sm:p-8">
                            <form onSubmit={handleSubmit} noValidate>
                                {/* Delivery & Contact Details */}
                                <FormSection title="Delivery & Contact Details" icon={<UserIcon className="w-5 h-5" />}>
                                    <ProgressBar current={currentStep} total={formSteps.length - 1} />
                                    <p className="text-lg font-semibold text-center text-gray-700 h-8">{formSteps[currentStep].question}</p>
                                    <div className="overflow-hidden">
                                        <div className="form-stepper" style={{ transform: `translateX(-${currentStep * 100}%)` }}>
                                            {formSteps.map((step, index) => (
                                                <div key={index} className={`form-step ${errors[step.key] ? 'shake' : ''}`}>
                                                    {step.component}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 flex justify-between items-center">
                                        {currentStep > 0 ? (
                                            <button type="button" onClick={handlePrev} className="step-nav-button text-gray-600 hover:bg-gray-100">
                                                Back
                                            </button>
                                        ) : <div />}
                                        {currentStep < formSteps.length - 1 && (
                                            <button type="button" onClick={handleNext} className="step-forward-button">
                                                <span>Next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="arrow-icon w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </FormSection>
                                
                                <div className="border-t border-gray-200 my-8"></div>
                                
                                {/* Payment Method */}
                                <FormSection title="Payment Method" icon={<BanknotesIcon className="w-5 h-5" />}>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button type="button" onClick={() => handlePaymentMethodChange('payOnDelivery')} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 ${details.paymentMethod === 'payOnDelivery' ? 'payment-option-selected' : 'border-gray-300 hover:border-gray-400'}`}>
                                            <BanknotesIcon className="w-6 h-6 mr-3 text-green-600"/>
                                            <div>
                                                <p className="font-semibold text-black">Pay on Delivery</p>
                                                <p className="text-sm text-gray-500">Cash or M-Pesa to rider</p>
                                            </div>
                                        </button>
                                        <button type="button" onClick={() => handlePaymentMethodChange('payAtSite')} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 ${details.paymentMethod === 'payAtSite' ? 'payment-option-selected' : 'border-gray-300 hover:border-gray-400'}`}>
                                            <CheckCircleIcon className="w-6 h-6 mr-3 text-blue-600"/>
                                            <div>
                                                <p className="font-semibold text-black">Pay Now</p>
                                                <p className="text-sm text-gray-500">M-Pesa / Card (upfront)</p>
                                            </div>
                                        </button>
                                    </div>
                                    
                                    {details.paymentMethod === 'payAtSite' && (
                                        <div className="checkout-step-anim mt-4 p-4 bg-gray-50 rounded-lg border">
                                             <h3 className="text-sm font-bold text-gray-800 mb-3">Choose your payment method at our site</h3>
                                             <div className="flex gap-4">
                                                 <div className="flex-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => handlePaymentOptionChange('mpesa')}
                                                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${details.sitePaymentOption === 'mpesa' ? 'payment-option-selected' : 'border-gray-300 hover:border-gray-400'}`}
                                                    >
                                                        <p className="font-semibold text-black">Mpesa</p>
                                                        <p className="text-sm text-gray-500">Pay with M-Pesa STK Push.</p>
                                                    </button>
                                                 </div>
                                                 <div className="flex-1">
                                                     <button
                                                        type="button"
                                                        onClick={() => handlePaymentOptionChange('card')}
                                                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${details.sitePaymentOption === 'card' ? 'payment-option-selected' : 'border-gray-300 hover:border-gray-400'}`}
                                                    >
                                                        <p className="font-semibold text-black">Card</p>
                                                        <p className="text-sm text-gray-500">Pay with Credit/Debit Card.</p>
                                                    </button>
                                                 </div>
                                             </div>
                                             {details.sitePaymentOption === 'mpesa' && (
                                                <div className="mt-4">
                                                    <label htmlFor="mpesaNumber" className="checkout-form-label">Phone Number</label>
                                                    <input type="tel" id="mpesaNumber" name="mpesaNumber" value={details.mpesaNumber} onChange={handleChange} required className="checkout-form-input" placeholder="0712345678" />
                                                </div>
                                             )}
                                             {details.sitePaymentOption === 'card' && (
                                                <div className="mt-4">
                                                    <label htmlFor="cardNumber" className="checkout-form-label">Card Number</label>
                                                    <input type="tel" id="cardNumber" name="cardNumber" value={details.cardNumber} onChange={handleChange} required className="checkout-form-input" placeholder="**** **** **** ****" />
                                                </div>
                                             )}
                                        </div>
                                    )}
                                </FormSection>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="checkout-card p-6 sm:p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order Summary</h2>
                            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                                {cart.map(item => (
                                    <div key={item.id} className="flex items-start">
                                        {/* Fix: Changed item.imageUrl to item.imageUrls[0] */}
                                        <img src={item.imageUrls[0]} alt={item.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                                        <div className="flex-grow">
                                            <p className="font-semibold text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-medium text-gray-700">{formatCurrency(item.price * item.quantity)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 my-6"></div>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">{formatCurrency(SHIPPING_COST)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-xl text-gray-900 pt-2 border-t mt-2">
                                    <span>Total</span>
                                    <span>{formatCurrency(total)}</span>
                                </div>
                            </div>
                             <button type="submit" onClick={handleSubmit} disabled={!isFormComplete || isProcessingPayment} className="w-full mt-8 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isProcessingPayment ? 'Processing...' : (details.paymentMethod === 'payAtSite' ? 'Pay & Place Order' : 'Place Order')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};