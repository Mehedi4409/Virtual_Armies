import React, { useState } from 'react';
import newsCover from "../../../asset/Office Work Collaboration.png";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newslatter = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
        setEmail('');
        // You can add API call here
    };

    return (
        <div
            className="relative bg-cover bg-center h-lvh overflow-hidden flex justify-center"
            style={{ backgroundImage: `url(${newsCover})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col pb-24 w-[85%] lg:w-1/3 justify-center gap-4 h-full text-white">
                    <h2 className="text-5xl font-semibold mb-2">
                        Subscribe to our newsletter.
                    </h2>
                    <p className="">
                        Stay informed with industry news, product launches, and expert tips.
                    </p>
                    <form onSubmit={handleSubmit} className=" space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button size="lg" type="submit" variant="primary">
                            Subscribe
                        </Button>
                    </form>
                </div>
        </div>
    );
};

export default Newslatter;
