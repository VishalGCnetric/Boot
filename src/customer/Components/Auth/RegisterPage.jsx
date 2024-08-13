import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        receiveDeals: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.title) tempErrors.title = 'Please select a title.';
        if (!formData.firstName) tempErrors.firstName = 'First name is required.';
        if (!formData.lastName) tempErrors.lastName = 'Last name is required.';
        if (!formData.email) tempErrors.email = 'Email address is required.';
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid.';
        if (!formData.password) tempErrors.password = 'Password is required.';
        if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters.';
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match.';
        if (!formData.agreeToTerms) tempErrors.agreeToTerms = 'You must agree to the terms.';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
            // Handle form submission
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-xl lg:max-w-3xl bg-white rounded-lg shadow-lg p-6 md:p-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-600 mb-6">Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Title*</label>
                        <select
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                        >
                            <option value="">Please Select</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                            required
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                            required
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address*</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <small className="text-gray-500">This will be your username</small>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password*</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Confirm Password*</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full`}
                            required
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    <p className="text-gray-500 text-sm">*Required fields</p>

                    <div className="p-6 mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">How We Use Your Personal Data</h2>
                        <p className="text-gray-600 mb-4">
                            We will collect and process your personal data you share with us such as your name and email address to provide and manage your account. We may share your data with carefully selected companies that provide services on our behalf but assure you that we will never sell your data.
                        </p>
                        <p className="text-gray-600 mb-4">
                            For more details, please see our <a href="#" className="text-blue-600 hover:underline">privacy policy</a> or contact <a href="mailto:Boots.CustomerCare_Team@boots.co.uk" className="text-blue-600 hover:underline">Boots.CustomerCare_Team@boots.co.uk</a>.
                        </p>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="receiveDeals"
                                    checked={formData.receiveDeals}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-700">
                                    Yes, I would like to receive exclusive deals, information on the latest products, and relevant offers.
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className={`form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                                    required
                                />
                                <span className="ml-2 text-gray-700">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline">terms & conditions*</a>
                                </span>
                            </label>
                            {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white hover:bg-blue-700 transition duration-200 py-3 px-4 rounded-lg w-full md:w-auto"
                    >
                        Create My Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
