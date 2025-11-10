

import React, { useState, FC } from 'react';
import { User, View } from '../types';
import { GoogleIcon, EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, EnvelopeIcon, ArrowLeftIcon } from '../icons';

const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (!password) return 0;
    // Award points for different criteria
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    return score;
};

const PasswordStrengthIndicator: FC<{ strength: number, passwordLength: number }> = ({ strength, passwordLength }) => {
    if (passwordLength === 0) return null;
    
    const strengthLevels = [
        { label: 'Weak', color: 'bg-red-500' },
        { label: 'Medium', color: 'bg-yellow-500' },
        { label: 'Strong', color: 'bg-green-500' },
        { label: 'Very Strong', color: 'bg-emerald-500' }
    ];

    const currentStrength = strength > 2 ? (strength > 3 ? strengthLevels[3] : strengthLevels[2]) : (strength > 1 ? strengthLevels[1] : strengthLevels[0]);

    return (
        <div className="flex items-center mt-2 space-x-2">
            <div className="flex-grow grid grid-cols-4 gap-1.5">
                <div className={`h-2 rounded-full transition-all ${strength >= 1 ? currentStrength.color : 'bg-gray-200'}`}></div>
                <div className={`h-2 rounded-full transition-all ${strength >= 2 ? currentStrength.color : 'bg-gray-200'}`}></div>
                <div className={`h-2 rounded-full transition-all ${strength >= 3 ? currentStrength.color : 'bg-gray-200'}`}></div>
                <div className={`h-2 rounded-full transition-all ${strength >= 4 ? currentStrength.color : 'bg-gray-200'}`}></div>
            </div>
            <span className="text-xs font-semibold w-20 text-right">{currentStrength.label}</span>
        </div>
    );
};


export const AuthView: FC<{ users: User[], onLogin: (user: User) => void; onSignup: (user: User) => void; onNavigate: (view: View, data?: any) => void }> = ({ users, onLogin, onSignup, onNavigate }) => {
    type AuthStep = 'login' | 'signup' | 'forgotPassword' | 'resetSent';

    const [step, setStep] = useState<AuthStep>('login');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
        if (name === 'password') {
            setPasswordStrength(checkPasswordStrength(value));
        }
    };
    
    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        setError('');
        setIsSubmitting(true);

        setTimeout(() => {
            const user = users.find(u => u.email === formData.email && u.password === formData.password);
            
            if (user) {
                onLogin(user);
            } else {
                setError('Invalid email or password. Please try again.');
                setIsSubmitting(false);
            }
        }, 600);
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        setError('');

        if (users.some(u => u.email === formData.email)) {
            setError('An account with this email already exists.');
            return;
        }

        if(formData.password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match.");
            return;
        }
        if (!agreedToTerms) {
            setError("You must agree to the terms to create an account.");
            return;
        }
        
        setIsSubmitting(true);
        setTimeout(() => {
            const newUser: User = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            };
            onSignup(newUser);
        }, 600);
    };
    
    const handleGoogleSignIn = () => {
      // Simulate fetching a real user's details from their Google Account.
      // In a real app, this would involve an OAuth flow.
      const mockGoogleUser: User = {
        firstName: 'Alex',
        lastName: 'Morgan',
        email: 'alex.morgan.demo@gmail.com',
        // No password needed for OAuth sign-in
      };

      // Check if this mock user exists, if not, "create" it.
      const userExists = users.some(u => u.email === mockGoogleUser.email);
      if (!userExists) {
        onSignup(mockGoogleUser);
      } else {
        const existingUser = users.find(u => u.email === mockGoogleUser.email)!;
        onLogin(existingUser);
      }
    };

    const handleForgotPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.email) {
            setStep('resetSent');
        }
    };
    
    const getTitle = () => {
        switch (step) {
            case 'login': return { main: 'Welcome Back!', sub: 'Login to continue to Bigi.' };
            case 'signup': return { main: 'Create your Account', sub: 'Let\'s get you started with Bigi.' };
            case 'forgotPassword': return { main: 'Reset Password', sub: 'Enter your email to receive a reset link.' };
            case 'resetSent': return { main: 'Check Your Email', sub: `A password reset link has been sent.` };
        }
    };

    const { main, sub } = getTitle();

    const canSubmitSignup = formData.firstName && formData.lastName && formData.email && formData.password.length >= 8 && formData.password === formData.confirmPassword && agreedToTerms;
    const canSubmitLogin = formData.email && formData.password;

    const renderContent = () => {
        switch (step) {
            case 'login':
                return (
                  <div className="animate-fade-in">
                      <form onSubmit={handleLoginSubmit} className="space-y-6">
                          <div>
                              <label htmlFor="email" className="form-label text-black">Email address <span className="text-red-500">*</span></label>
                              <div className="mt-1 relative">
                                  <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="form-input pl-10" autoFocus placeholder="you@example.com"/>
                              </div>
                          </div>
                          <div>
                              <label htmlFor="password" className="form-label text-black">Password <span className="text-red-500">*</span></label>
                              <div className="mt-1 relative">
                                  <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleChange} className="form-input pl-10" placeholder="Enter your password" />
                                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                      {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                  </button>
                              </div>
                              <div className="flex justify-end mt-1">
                                  <button type="button" onClick={() => { setStep('forgotPassword'); setError(''); }} className="text-sm font-medium text-orange-500 hover:text-orange-600">Forgot password?</button>
                              </div>
                          </div>
                          <div className="flex justify-center">
                              <button type="submit" disabled={!canSubmitLogin || isSubmitting} className="form-button">Login</button>
                          </div>
                      </form>
                      
                      <div className="relative my-4">
                          <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-gray-300" /></div>
                          <div className="relative flex justify-center text-sm"><span className="bg-white/0 px-2 text-gray-500">or</span></div>
                      </div>
                      <button type="button" onClick={handleGoogleSignIn} className="w-full flex justify-center items-center gap-3 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                          <GoogleIcon className="w-5 h-5"/>
                          Continue with Google
                      </button>
                  </div>
                );
            case 'signup':
                 return (
                  <div className="animate-fade-in">
                    <form onSubmit={handleSignupSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="firstName" className="form-label text-black">First Name <span className="text-red-500">*</span></label>
                            <div className="relative mt-1">
                                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className="form-input pl-10" autoFocus placeholder="e.g. Jane"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="form-label text-black">Last Name <span className="text-red-500">*</span></label>
                             <div className="relative mt-1">
                                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className="form-input pl-10" placeholder="e.g. Doe"/>
                            </div>
                        </div>
                         <div>
                            <label htmlFor="signup-email" className="form-label text-black">Email Address <span className="text-red-500">*</span></label>
                            <div className="relative mt-1">
                                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input id="signup-email" name="email" type="email" required value={formData.email} onChange={handleChange} className="form-input pl-10" placeholder="you@example.com"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="signup-password" className="form-label text-black">Password <span className="text-red-500">*</span></label>
                            <div className="relative mt-1">
                                <LockClosedIcon className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ${isPasswordFocused ? 'text-orange-500 scale-110' : 'text-gray-400'}`} />
                                <input id="signup-password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleChange} className="form-input pl-10" placeholder="8+ characters" onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)}/>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                            <PasswordStrengthIndicator strength={passwordStrength} passwordLength={formData.password.length} />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="form-label text-black">Confirm Password <span className="text-red-500">*</span></label>
                            <div className="relative mt-1">
                                <LockClosedIcon className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ${isConfirmPasswordFocused ? 'text-orange-500 scale-110' : 'text-gray-400'}`} />
                                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} required value={formData.confirmPassword} onChange={handleChange} className="form-input pl-10" placeholder="Re-enter your password" onFocus={() => setIsConfirmPasswordFocused(true)} onBlur={() => setIsConfirmPasswordFocused(false)}/>
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                    {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-start pt-2">
                            <input id="terms" name="terms" type="checkbox" checked={agreedToTerms} onChange={e => setAgreedToTerms(e.target.checked)} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1" />
                            <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">I agree to the <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('terms')}} className="underline font-medium hover:text-orange-600">Terms</a> and <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('privacy')}} className="underline font-medium hover:text-orange-600">Privacy Policy</a>.</label>
                        </div>
                        <div className="pt-2 flex justify-center">
                            <button type="submit" disabled={!canSubmitSignup || isSubmitting} className="form-button">Create Account</button>
                        </div>
                    </form>
                  </div>
                );
            case 'forgotPassword':
                return (
                    <div className="animate-fade-in">
                        <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="form-label text-black">Email address</label>
                                <div className="mt-1 relative">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                    <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="form-input pl-10" autoFocus placeholder="you@example.com"/>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="form-button can-submit">Send Reset Link</button>
                            </div>
                        </form>
                        <p className="mt-6 text-center text-sm text-gray-700">
                            Remembered your password?{' '}
                            <button onClick={() => { setStep('login'); setError(''); }} className="font-medium text-orange-500 hover:text-orange-600">
                                Back to Login
                            </button>
                        </p>
                    </div>
                );
            case 'resetSent':
                return (
                    <div className="animate-fade-in text-center">
                        <p className="text-gray-700 mb-6">If an account exists for <span className="font-semibold">{formData.email}</span>, you will receive instructions to reset your password shortly.</p>
                        <div className="flex justify-center">
                            <button onClick={() => { setStep('login'); setError(''); }} className="form-button">
                                Back to Login
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 auth-background">
            <button onClick={() => onNavigate('home')} className="absolute top-4 left-4 z-20 flex items-center space-x-2 text-white font-semibold bg-black/20 hover:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Shop</span>
            </button>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-500">
                <div className="text-center">
                    <img
                        src="/public/assets/images/logo/medium_128x128.png"
                        alt="Bigi Logo"
                        className="w-32 h-auto mx-auto cursor-pointer"
                        onClick={() => onNavigate('home')}
                    />
                    <div className="mt-6 mb-4 min-h-[56px]">
                        <h2 className="text-2xl font-bold text-gray-900 transition-all">{main}</h2>
                        <p className="mt-1 text-sm text-gray-600 transition-all">{sub}</p>
                    </div>
                </div>

                {step !== 'forgotPassword' && step !== 'resetSent' && (
                    <div className="mb-6">
                        <div className="flex justify-center border border-gray-200 rounded-lg p-1 bg-gray-50 max-w-sm mx-auto">
                            <button 
                                type="button"
                                onClick={() => { setStep('login'); setError(''); setIsSubmitting(false); }} 
                                className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${step === 'login' ? 'bg-white shadow text-orange-600' : 'text-gray-500 hover:text-black'}`}
                            >
                                Login
                            </button>
                            <button 
                                type="button"
                                onClick={() => { setStep('signup'); setError(''); setIsSubmitting(false); }} 
                                className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${step === 'signup' ? 'bg-white shadow text-orange-600' : 'text-gray-500 hover:text-black'}`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}

                {error && <div className="rounded-md bg-red-50 p-3 mb-4"><p className="text-sm font-medium text-red-700 text-center">{error}</p></div>}

                {renderContent()}
            </div>
        </div>
    );
};