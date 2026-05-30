

export default function About() {
    return (
        <div className="border-x-red-50 border-solid h-full m-auto space-y-6" id="about">
            <div>
                <h3 className="font-semibold text-lg mb-2">Professional</h3>
                <p className="p-2 justify-center m-1">
                    Driven by a passion for technology and innovation, 
                    I&apos;ve carved a path as a Cloud Engineer in software development. 
                    With a focus on crafting impactful solutions, 
                    I excel at building efficient and user-centric applications. 
                    Leveraging my expertise in React, Node.js, Python, and AWS to accelerate cloud adoption and optimize costs. 
                    Committed to lifelong learning, I&apos;m expanding my skill set with Kubernetes, Terraform, 
                    and CI/CD pipelines to drive innovation and contribute to cutting-edge projects.
                </p>
            </div>
            
            <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <div className="p-2 m-1">
                    <p className="font-medium">B.Tech in Computer Science and Engineering</p>
                    <p className="text-sm text-muted-foreground">Rajeev Gandhi Memorial College of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">CGPA: 8.56/10 (2021-2025)</p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-2">Certifications & Achievements</h3>
                <ul className="p-2 m-1 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>AWS Certified Cloud Practitioner</strong> - Amazon Web Services (2026)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Salesforce Developer Internship</strong> - Powered by Trailhead & SmartInternz</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Google Cloud & Kubernetes</strong> - FutureSkills Prime, Wipro, and Google Cloud Skills Boost</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>GATE All India Rank 6226 (2024)</strong> - Graduate Aptitude Test in Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>1st Place - Coding & Web Design</strong> - Campus Technical Events</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-2">Interests & Beyond</h3>
                <p className="p-2 justify-center m-1">
                    I&apos;m passionate about sharing my knowledge and experiences with others.
                    When I&apos;m not in front of a screen, I love watching divine dramas, spending time with family, and reading books.
                    Always open to new opportunities and collaborations!
                </p>
            </div>
        </div>
    );
}
