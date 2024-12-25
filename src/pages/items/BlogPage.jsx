import { motion } from "framer-motion"
import community from "../../assets/blogPost/community.jpeg"
import help from "../../assets/blogPost/help.png"
import lostAndFound from "../../assets/blogPost/lostAndFoundService.png"
import success from "../../assets/blogPost/success.jpeg"
import technology from "../../assets/blogPost/technology.jpeg"
import tips from "../../assets/blogPost/tips.jpeg"

const BlogPage = () => {

    const fadeInFromLeft = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
    };

    const fadeInFromRight = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
    };

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 },
    };


    return (
        <div className="container p-4 mx-auto my-8">
            <motion.h1 {...fadeIn} className="mb-8 text-4xl font-bold text-center">
                Blog Post
            </motion.h1>

            {/* Section 1 */}
            <motion.section {...fadeInFromLeft} className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.img
                    src={lostAndFound}
                    alt="Lost and Found Services"
                    className="w-full h-auto mb-4 rounded-lg md:w-1/3"
                    whileHover={{ scale: 1.05 }}
                />
                <motion.div className="md:w-2/3" {...fadeInFromRight}>
                    <h2 className="mb-4 text-2xl font-semibold">
                        The Importance of Lost and Found Services
                    </h2>
                    <p>
                        In our fast-paced world, losing personal belongings is an all-too-common
                        occurrence. Whether it's a phone left behind on public transport, a wallet
                        misplaced in a busy mall, or a beloved pet that strays too far from home,
                        the experience can be stressful and disheartening. This is where lost and
                        found services come to the rescue, acting as a bridge between the finder and
                        the rightful owner, fostering a sense of community and trust.
                    </p>
                </motion.div>
            </motion.section>

            {/* Section 2 */}
            <motion.section className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.div className="w-full md:w-2/3" {...fadeInFromLeft}>
                    <h2 className="mb-4 text-2xl font-semibold">
                        The Role of Technology in Lost and Found
                    </h2>
                    <p>Gone are the days when lost and found relied solely on bulletin boards and handwritten notes. Today, technology plays a pivotal role in streamlining the process:</p>
                    <ul className="ml-6 list-disc">
                        <li><strong>Online Platforms:</strong> Websites and apps dedicated to lost and found allow users to report lost items, browse found items, and connect with others.</li>
                        <li><strong>Geolocation Services:</strong> Advanced mapping tools help pinpoint the last known location of an item, making searches more efficient.</li>
                        <li><strong>Social Media:</strong> Platforms like Facebook and Twitter enable users to share information about lost items, often reaching a vast audience in a short time.</li>
                        <li><strong>AI and Image Recognition:</strong> Cutting-edge technologies can match images of lost items with those reported as found, increasing the likelihood of successful reunions.</li>
                    </ul>
                </motion.div>
                <motion.img
                    src={technology}
                    alt="Technology in Lost and Found"
                    className="w-full h-auto mb-4 rounded-lg md:w-1/3"
                    {...fadeInFromRight}
                    whileHover={{ scale: 1.05 }}
                />
            </motion.section>

            {/* Section 3 */}
            <motion.section className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.img
                    src={tips}
                    alt="Tips for Preventing Lost Items"
                    className="w-full h-auto mb-4 rounded-lg md:w-1/3"
                    {...fadeInFromLeft}
                    whileHover={{ rotate: 3 }}
                />
                <motion.div className="w-full md:w-2/3" {...fadeInFromRight}>
                    <h2 className="mb-4 text-2xl font-semibold">Tips for Preventing Lost Items</h2>
                    <p>While lost and found services are invaluable, prevention is always better than cure. Here are some tips to keep your belongings safe:</p>
                    <ol className="ml-6 list-decimal">
                        <li><strong>Label Your Items:</strong> Attach contact details to frequently carried items like phones, laptops, and bags.</li>
                        <li><strong>Stay Organized:</strong> Develop a habit of double-checking your surroundings before leaving a place.</li>
                        <li><strong>Use Tracking Devices:</strong> Gadgets like Bluetooth trackers can help locate lost items in real time.</li>
                        <li><strong>Be Mindful:</strong> Avoid distractions, especially in crowded or unfamiliar places.</li>
                    </ol>
                </motion.div>
            </motion.section>

            {/* Section 4 */}
            <motion.section className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.div className="w-full md:w-2/3" {...fadeInFromLeft}>
                    <h2 className="mb-4 text-2xl font-semibold">How TraceBack Helps</h2>
                    <p>TraceBack is a dedicated platform that simplifies the lost and found process. With user-friendly features and a focus on community involvement, TraceBack enables individuals to:</p>
                    <ul className="ml-6 list-disc">
                        <li><strong>Report Lost or Found Items:</strong> Easily submit details and photos of lost or found items through an intuitive interface.</li>
                        <li><strong>Search for Items:</strong> Use filters such as category, location, and date to find matching items quickly.</li>
                        <li><strong>Connect with Others:</strong> Communicate securely with users to arrange the return of belongings.</li>
                    </ul>

                    <h3 className="mt-4 text-xl font-semibold">Key Features of TraceBack:</h3>
                    <ul className="ml-6 list-disc">
                        <li><strong>Community-Driven:</strong> Encourages users to actively participate by reporting found items and assisting others.</li>
                        <li><strong>Secure and Private:</strong> Ensures that personal information is protected while facilitating communication.</li>
                        <li><strong>Mobile-Friendly:</strong> Optimized for smartphones, allowing users to access the platform anytime, anywhere.</li>
                    </ul>
                </motion.div>
                <motion.img
                    src={help} alt="TraceBack Platform"
                    className="w-full h-auto mb-4 rounded-lg md:w-1/3"
                    {...fadeInFromRight}
                    whileHover={{ scale: 1.05 }} />
            </motion.section>

            {/* Section 5 */}
            <motion.section {...fadeInFromLeft} className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.img src={success} alt="Success Stories" className="w-full h-auto mb-4 rounded-lg md:w-1/3" whileHover={{ scale: 1.05 }} />
                <motion.div className="w-full md:w-2/3" {...fadeInFromRight}>
                    <h2 className="mb-4 text-2xl font-semibold">Real-Life Success Stories</h2>
                    <p>Lost and found services have reunited countless individuals with their belongings, fostering hope and gratitude. Here are a few inspiring examples:</p>
                    <ul className="ml-6 list-disc">
                        <li>A university student found her misplaced backpack containing crucial academic documents after it was reported on a lost and found app.</li>
                        <li>A pet owner was reunited with their lost dog thanks to geolocation updates shared on social media.</li>
                        <li>A vintage watch, a family heirloom, was returned to its owner after being listed on a dedicated platform for lost valuables.</li>
                    </ul>
                </motion.div>
            </motion.section>

            {/* Section 6 */}
            <motion.section className="flex flex-col items-center gap-4 mb-8 md:flex-row">
                <motion.div className="w-full md:w-2/3" {...fadeInFromLeft}>
                    <h2 className="mb-4 text-2xl font-semibold">Why You Should Get Involved</h2>
                    <p>By participating in lost and found initiatives, you contribute to a kinder, more connected world. Whether you report a found item or assist someone in need, your actions can make a significant difference.</p>
                    <p><strong>Join the Community Today:</strong> Platforms like TraceBack are here to make the process easier for everyone. Together, we can turn moments of distress into stories of kindness and reunion.</p>
                </motion.div>
                <img
                    src={community}
                    alt="Community Involvement"
                    className="w-full h-auto mb-4 rounded-lg md:w-1/3"
                    {...fadeInFromRight}
                    whileHover={{ scale: 1.05 }}
                />
            </motion.section>
        </div>

    );
};

export default BlogPage;