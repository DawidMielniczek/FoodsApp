import logoImage from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <header>
            <Link href='/'>
                <img src={logoImage.src} alt="A plate with food on it">
                    NextLevel Food

                </img>
            </Link>
        </header>
    );
}