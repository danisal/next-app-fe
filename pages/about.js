import Link from 'next/link';

function About() {
    return (
        <div>
            <p>About page</p>
            <Link href="/">
                <a>About</a>
            </Link>
        </div>
    );
}

export default About;
