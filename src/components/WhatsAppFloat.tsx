
const WhatsAppFloat = () => {
    const phoneNumber = "919725724010"; // WhatsApp format: country code + number
    const message = "Hello! I'm interested in your automation services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Simple WhatsApp button */}
            <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
                {/* Official WhatsApp Logo SVG */}
                <svg
                    viewBox="0 0 32 32"
                    className="w-8 h-8"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.738 5.478 2.031 7.781L0 32l8.438-2.219A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.547 0-4.95-.708-7-1.938l-.5-.292-5.188 1.365 1.385-5.052-.32-.52A13.283 13.283 0 012.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
                    <path d="M23.334 19.417c-.365-.182-2.156-1.063-2.49-1.188-.333-.125-.573-.182-.813.183-.24.365-.927 1.188-1.135 1.428-.208.24-.417.271-.781.089-.365-.182-1.542-.568-2.938-1.813-1.083-.969-1.813-2.167-2.021-2.531-.208-.365-.021-.563.161-.745.167-.167.365-.438.547-.656.182-.219.24-.365.365-.604.125-.24.063-.448-.031-.63-.094-.182-.813-1.958-1.115-2.687-.292-.708-.594-.615-.813-.625h-.688c-.24 0-.625.094-.953.458-.328.365-1.25 1.219-1.25 2.979s1.281 3.458 1.458 3.698c.177.24 2.5 3.823 6.063 5.354.844.365 1.5.583 2.021.75.844.271 1.615.229 2.229.135.677-.104 2.156-.885 2.458-1.74.302-.854.302-1.583.208-1.74-.094-.156-.333-.24-.698-.427z" />
                </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-background/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-border/50">
                    <p className="text-sm font-medium">Chat with us on WhatsApp</p>
                </div>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-background/95" />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppFloat;
