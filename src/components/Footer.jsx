export default function Footer() {
    return (
        <section className="footer">
            <a
                className="footer-flip"
                href="https://github.com/tywin1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub: tywin1"
            >
                <span className="footer-flip__inner">
                    <span className="footer-flip__face footer-flip__front" />
                    <span className="footer-flip__face footer-flip__back">@tywin1</span>
                </span>
            </a>
        </section>
    )
}