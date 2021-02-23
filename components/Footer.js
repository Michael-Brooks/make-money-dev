const Footer = () => (
    <footer className="container bg-purple-800 text-white p-3 mx-auto max-w-3xl lg:max-w-5xl mt-10 -mb-4 rounded-t-lg text-center">
        <p>
            @ {new Date().getFullYear()} MakeMoneyDev by{" "}
            <a
                className="font-bold"
                target="_blank"
                href="https://twitter.com/florinpop1705"
            >
                Florin Pop
            </a>
        </p>
    </footer>
);

export default Footer;
