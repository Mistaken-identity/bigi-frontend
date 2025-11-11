import React, { FC, ReactNode } from 'react';
import { TeamMember } from '../types';
import { TEAM_MEMBERS, ABOUT_US_STORY, OUR_MISSION } from '../constants';
import { EyeIcon, SparklesIcon, UserGroupIcon } from '../icons';
import { useAnimateOnScroll } from '../hooks';

const TeamCard: FC<{ member: TeamMember }> = ({ member }) => (
    <div className="team-card-v2 relative bg-gray-900 rounded-lg shadow-lg overflow-hidden group aspect-[3/4]">
        <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="team-card-image absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="team-card-content">
                <p className="text-sm text-gray-200">{member.bio}</p>
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                 <p className="text-orange-400 font-semibold">{member.title}</p>
            </div>
        </div>
    </div>
);

export const AboutUsView: FC = () => {
    const storySection1Ref = useAnimateOnScroll<HTMLDivElement>();
    const storySection2Ref = useAnimateOnScroll<HTMLDivElement>();
    const whySectionRef = useAnimateOnScroll<HTMLDivElement>();
    const missionSectionRef = useAnimateOnScroll<HTMLDivElement>();
    const teamSectionRef = useAnimateOnScroll<HTMLDivElement>();

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center text-center text-white px-4">
                <div className="absolute inset-0 bg-black">
                    <img 
                        src="/assets/images/053c2e3e-d8e4-4ee6-8070-aca0ebbc64bd.jpeg" 
                        alt="African market" 
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="relative z-10 animate-slide-in-up">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>{ABOUT_US_STORY.title}</h1>
                    <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>A curated bridge from the heart of African creativity to your doorstep.</p>
                </div>
            </div>

            <div className="py-16 md:py-24 space-y-16 overflow-hidden">
                 {/* Story Section */}
                 <div ref={storySection1Ref} className="animated-section">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="prose prose-xl max-w-none text-gray-700 space-y-4">
                               <p>{ABOUT_US_STORY.content[0]}</p>
                               <p>{ABOUT_US_STORY.content[1]}</p>
                            </div>
                            <div className="unique-image-wrapper">
                                <img src="/assets/images/053c2e3e-d8e4-4ee6-8070-aca0ebbc64bd.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div ref={storySection2Ref} className="animated-section">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                             <div className="unique-image-wrapper lg:order-last">
                                <img src="/assets/images/little people 2🧍_♂️🧍_♀️.jpeg" alt="" />
                            </div>
                            <div className="prose prose-xl max-w-none text-gray-700 space-y-4">
                                <p>{ABOUT_US_STORY.content[2]}</p>
                                <p>{ABOUT_US_STORY.content[3]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Why Section */}
                <div ref={whySectionRef} className="animated-section">
                     <div className="bg-gray-50 py-16">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Our Why</h2>
                            <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">We're driven by a simple set of beliefs that guide everything we do.</p>
                             <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <SparklesIcon className="w-10 h-10 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold text-orange-600">Authentic Craftsmanship</h3>
                                    <p className="mt-2 text-gray-600">Championing genuine, handcrafted quality over mass-produced goods. Every item has a story and a soul.</p>
                                </div>
                                 <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <UserGroupIcon className="w-10 h-10 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold text-orange-600">Ethical Empowerment</h3>
                                    <p className="mt-2 text-gray-600">Ensuring our artisan partners receive fair compensation, fostering sustainable livelihoods and economic growth.</p>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <EyeIcon className="w-10 h-10 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold text-orange-600">Cultural Celebration</h3>
                                    <p className="mt-2 text-gray-600">Sharing the rich diversity and beauty of African cultures with the world, one unique product at a time.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                {/* Mission Section */}
                <div ref={missionSectionRef} className="animated-section">
                    <div className="container mx-auto px-6">
                        <div className="bg-gray-800 text-white p-12 rounded-lg shadow-xl text-center">
                            <h2 className="text-3xl font-bold mb-4">{OUR_MISSION.title}</h2>
                            <p className="prose prose-xl prose-invert max-w-none mx-auto text-gray-300">
                                {OUR_MISSION.content}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Team Section */}
                <div ref={teamSectionRef} className="animated-section">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet The Founders</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {TEAM_MEMBERS.map((member, index) => (
                                <div key={member.name} className="animate-card-entry" style={{ animationDelay: `${index * 100}ms` }}>
                                    <TeamCard member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
