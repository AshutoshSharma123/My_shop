import {
    EnvelopeIcon,
    GlobeAltIcon,
    BriefcaseIcon,
    CodeBracketIcon,
    WindowIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-300 py-6 mt-10 shadow-inner">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                {/* Left side */}
                <p className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-cyan-400 font-semibold">Ashutosh Sharma</span> — All rights reserved.
                </p>

                {/* Right side - Heroicons links */}
                <div className="flex items-center justify-center gap-6">
                    {/* Email */}
                    <a
                        href="mailto:aashusharma375@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                        title="Email"
                    >
                        <EnvelopeIcon className="h-5 w-5" />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/aashu3380"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors flex items-center gap-1"
                        title="Instagram"
                    >
                        <GlobeAltIcon className="h-5 w-5" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/ashutosh-sharma-879a21220/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors flex items-center gap-1"
                        title="LinkedIn"
                    >
                        <BriefcaseIcon className="h-5 w-5" />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/AshutoshSharma123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors flex items-center gap-1"
                        title="GitHub"
                    >
                        <CodeBracketIcon className="h-5 w-5" />
                    </a>

                    {/* Portfolio */}
                    <a
                        href="https://ashutoshsharma123.github.io/FULL-STACK-WEB-DEVLOPNENT/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors flex items-center gap-1"
                        title="Portfolio"
                    >
                        <WindowIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
