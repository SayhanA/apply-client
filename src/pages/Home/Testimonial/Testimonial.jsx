import React from 'react';
import UsersComment from './UsersComment/UsersComment';

const Testimonial = () => {
    return (
        <div className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-fixed bg-center bg-cover" >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-8/12">
                    
                    <UsersComment />
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;