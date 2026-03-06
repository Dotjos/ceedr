export interface Testimonial {
    desc: string;
    testifierName: string;
    role: string;
    image: string;
}

export const testimonials: Testimonial[] = [
    {
        desc: "I didn’t know what to expect but what they delivered was way beyond my expectations. They implemented all my feedback, responded promptly, and understood what I wanted perfectly (even more than I thought I did).",
        testifierName: "Bayonle",
        role: "Video Editor",
        image: "/testimony-1.png",
    },
    {
        desc: "Ceedr handled my CV writing professionally and efficiently. The final document was clean, well-structured, and easy to use for applications. Turnaround time was great, and communication was smooth throughout. Solid service all round.",
        testifierName: "Eniola",
        role: "BSc Student",
        image: "/testimony-2.png",
    },
    {
        desc: "This changed how I present myself professionally The process felt collaborative, and the end result genuinely raised the quality of my applications.I’m glad I trusted them with this.",
        testifierName: "David",
        role: "Project Manager",
        image: "/testimony-3.png",
    },
];
