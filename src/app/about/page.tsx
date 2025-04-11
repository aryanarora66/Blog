"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

// About page sections
const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <br />
        <br />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Networty</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building the next generation of networking tools for professionals and businesses around the world.
          </p>
        </div>

      </div>
    </section>
  );
};

const OurStory = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2023, Networty began with a simple mission: to help professionals build meaningful connections that drive success.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our founders recognized that traditional networking methods were no longer sufficient in today's digital-first world. They envisioned a platform that combines the power of technology with human connection.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we've grown into a team of passionate individuals dedicated to transforming how people network and build professional relationships.
            </p>
          </div>
          <div className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
            {/* Replace with your actual founding story image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new ideas and technologies to improve networking experiences."
    },
    {
      title: "Authenticity",
      description: "We believe in fostering genuine connections built on trust and transparency."
    },
    {
      title: "Inclusivity",
      description: "We create spaces where everyone has equal opportunity to build valuable relationships."
    },
    {
      title: "Impact",
      description: "We measure success by the positive difference we make in people's professional lives."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These core principles guide everything we do, from product development to customer service.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Co-Founder",
      bio: "With over 15 years in tech, Jane leads our vision and strategy."
    },
    {
      name: "John Smith",
      role: "CTO & Co-Founder",
      bio: "John's engineering expertise drives our platform innovation."
    },
    {
      name: "Alex Johnson",
      role: "Head of Product",
      bio: "Alex ensures our solutions meet real-world networking needs."
    },
    {
      name: "Sam Wilson",
      role: "Head of Customer Success",
      bio: "Sam is dedicated to helping our users achieve their goals."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind Networty working to transform professional networking.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                {/* Replace with actual profile images */}
                <span className="text-gray-500 dark:text-gray-400">Photo</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-center text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your networking?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are building meaningful connections with Networty.
        </p>
        <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurValues />
      {/* <Team /> */}
      <CallToAction />
    </div>
  );
}